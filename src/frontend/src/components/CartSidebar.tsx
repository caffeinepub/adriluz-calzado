import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    totalItems,
    clearCart,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (item) => `• ${item.name} (Ref: ${item.referenceCode}) x${item.quantity}`,
    );
    const message = `¡Hola Luz Adriani! 😊 Soy un cliente de Adriluz Calzado y me gustaría hacer el siguiente pedido:\n\n${lines.join("\n")}\n\nTotal: ${totalItems} par(es)\n\nPor favor confirmen disponibilidad y precio. ¡Gracias!`;
    const url = `https://wa.me/584245488229?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-50"
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            data-ocid="cart.panel"
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-elevated z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-brand-rose" /> Mi Carrito
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                data-ocid="cart.close_button"
                className="p-2 hover:text-brand-rose transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16" data-ocid="cart.empty_state">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="font-body text-muted-foreground">
                    Tu carrito está vacío
                  </p>
                </div>
              ) : (
                items.map((item, i) => (
                  <div
                    key={item.referenceCode}
                    data-ocid={`cart.item.${i + 1}`}
                    className="flex gap-3 bg-muted/30 rounded-xl p-3"
                  >
                    <img
                      src={item.imagePath}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-body font-semibold text-sm text-foreground truncate">
                        {item.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        Ref: {item.referenceCode}
                      </p>
                      <p className="font-body text-xs font-semibold text-brand-tan mt-1">
                        {item.price}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.referenceCode,
                              item.quantity - 1,
                            )
                          }
                          data-ocid="cart.button"
                          className="h-6 w-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-body text-sm font-semibold w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.referenceCode,
                              item.quantity + 1,
                            )
                          }
                          data-ocid="cart.button"
                          className="h-6 w-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.referenceCode)}
                          data-ocid="cart.delete_button"
                          className="ml-auto h-6 w-6 flex items-center justify-center text-destructive hover:text-destructive/80 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-border space-y-3">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">
                    Total de artículos
                  </span>
                  <span className="font-bold text-foreground">
                    {totalItems} par(es)
                  </span>
                </div>
                <Button
                  onClick={handleWhatsAppOrder}
                  data-ocid="cart.submit_button"
                  className="w-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-body font-semibold rounded-full"
                >
                  Enviar Pedido por WhatsApp 💬
                </Button>
                <button
                  type="button"
                  onClick={clearCart}
                  data-ocid="cart.delete_button"
                  className="w-full text-xs font-body text-muted-foreground hover:text-destructive transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
