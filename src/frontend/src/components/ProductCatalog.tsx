import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import type { Product } from "../hooks/useQueries";

interface ProductCatalogProps {
  products: Product[];
  isLoading: boolean;
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
}

const categoryLabels: Record<string, string> = {
  todos: "Todos",
  damas: "Damas",
  caballeros: "Caballeros",
  ninos: "Niños",
};

const categoryGroups = [
  { key: "damas", label: "👠 Damas" },
  { key: "caballeros", label: "👞 Caballeros" },
  { key: "ninos", label: "👟 Niños y Niñas" },
];

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const { addItem } = useCart();
  return (
    <motion.div
      key={product.referenceCode}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
      data-ocid={`catalog.item.${index + 1}`}
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group"
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.imagePath}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-2 left-2 bg-brand-rose/90 text-white text-xs font-body font-semibold px-2 py-1 rounded-full capitalize">
          {categoryLabels[product.category] ?? product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground text-sm leading-tight">
          {product.name}
        </h3>
        <p className="font-body text-xs text-muted-foreground mt-1">
          Ref: {product.referenceCode}
        </p>
        <p className="font-body font-semibold text-brand-tan mt-2 text-sm">
          {product.price}
        </p>
        <Button
          onClick={() =>
            addItem({
              imagePath: product.imagePath,
              name: product.name,
              referenceCode: product.referenceCode,
              category: product.category,
              price: product.price,
            })
          }
          data-ocid="catalog.primary_button"
          className="w-full mt-3 bg-brand-slate hover:bg-brand-slate/90 text-white font-body text-xs rounded-full"
          size="sm"
        >
          <ShoppingBag className="h-3 w-3 mr-1" /> Agregar al carrito
        </Button>
      </div>
    </motion.div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, i) => (
        <ProductCard key={product.referenceCode} product={product} index={i} />
      ))}
    </div>
  );
}

export default function ProductCatalog({
  products,
  isLoading,
  activeCategory,
  onCategoryChange,
  searchQuery,
}: ProductCatalogProps) {
  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "todos" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.referenceCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section
      id="catalogo"
      className="py-16 bg-muted/40"
      data-ocid="catalog.section"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nuestro Catálogo
          </h2>
          <p className="mt-2 font-body text-muted-foreground">
            Los mejores estilos para ti y tu familia
          </p>
        </motion.div>

        {/* Tabs filter */}
        <div className="flex justify-center mb-8">
          <Tabs value={activeCategory} onValueChange={onCategoryChange}>
            <TabsList className="bg-white shadow-xs">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  data-ocid="catalog.tab"
                  className="font-body data-[state=active]:bg-brand-rose data-[state=active]:text-white"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="catalog.loading_state"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders
              <div key={i} className="bg-white rounded-2xl overflow-hidden">
                <Skeleton className="aspect-square" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="catalog.empty_state">
            <p className="font-body text-muted-foreground text-lg">
              No se encontraron productos
            </p>
          </div>
        ) : activeCategory === "todos" ? (
          // Grouped view: one section per category
          <div className="space-y-12">
            {categoryGroups.map((group) => {
              const groupProducts = filtered.filter(
                (p) => p.category === group.key,
              );
              if (groupProducts.length === 0) return null;
              return (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="font-display text-2xl font-bold text-foreground whitespace-nowrap">
                      {group.label}
                    </h3>
                    <div className="flex-1 h-px bg-brand-rose/40" />
                  </div>
                  <ProductGrid products={groupProducts} />
                </motion.div>
              );
            })}
          </div>
        ) : (
          // Flat grid for specific category
          <ProductGrid products={filtered} />
        )}
      </div>
    </section>
  );
}
