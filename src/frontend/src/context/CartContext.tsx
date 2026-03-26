import { createContext, useContext, useState } from "react";

export interface CartItem {
  imagePath: string;
  name: string;
  referenceCode: string;
  category: string;
  price: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (referenceCode: string) => void;
  updateQuantity: (referenceCode: string, quantity: number) => void;
  totalItems: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.referenceCode === product.referenceCode,
      );
      if (existing) {
        return prev.map((i) =>
          i.referenceCode === product.referenceCode
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (referenceCode: string) => {
    setItems((prev) => prev.filter((i) => i.referenceCode !== referenceCode));
  };

  const updateQuantity = (referenceCode: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(referenceCode);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.referenceCode === referenceCode ? { ...i, quantity } : i,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        totalItems,
        isOpen,
        setIsOpen,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
