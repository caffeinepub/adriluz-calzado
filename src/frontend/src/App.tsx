import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Blog from "./components/Blog";
import CartSidebar from "./components/CartSidebar";
import CategoryTiles from "./components/CategoryTiles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ProductCatalog from "./components/ProductCatalog";
import WhatsAppButton from "./components/WhatsAppButton";
import { CartProvider } from "./context/CartContext";
import { useActor } from "./hooks/useActor";
import {
  Category,
  useAddBlogPost,
  useAddProduct,
  useAllBlogPosts,
  useAllProducts,
} from "./hooks/useQueries";

const SEED_PRODUCTS = [
  {
    name: "Tacón Zafiro",
    referenceCode: "ACPS13-ZAFIRO",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0079-019d2b57-0e65-73ed-8512-b3fb9c47c1e9-1.jpg",
  },
  {
    name: "Sandalia Plataforma 7124",
    referenceCode: "ACPS13-7124",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0080_1-019d2b57-0ecc-765a-bd59-0967aace45e7-2.jpg",
  },
  {
    name: "Tacón Correa 8210",
    referenceCode: "ACPS13-8210",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0073-019d2b57-0f0e-76be-aa40-f8521e1d39a8-3.jpg",
  },
  {
    name: "Sandalias Elegantes Colección",
    referenceCode: "ACPS13-COL",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0069-019d2b57-0f96-7003-a8d5-54f3f2221f22-4.jpg",
  },
  {
    name: "Zapato Casual Hombre BOSI",
    referenceCode: "BOSI-CAFE",
    category: Category.caballeros,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0056-019d2b57-0fbc-74de-a35c-47285ae6832d-5.jpg",
  },
  {
    name: "Zapatilla Cuero Ilusión",
    referenceCode: "LA-GS205-ILUSION",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0060_1-019d2b57-1037-7387-871b-6132749c2c38-6.jpg",
  },
  {
    name: "Colección Tacones Animal Print",
    referenceCode: "COL-ANIMALPRINT",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0072-019d2b57-101d-767b-bc07-b4a8df1988c1-7.jpg",
  },
  {
    name: "Zapato Formal Hombre BOSI Negro",
    referenceCode: "BOSI-NEGRO",
    category: Category.caballeros,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0055-019d2b57-1073-74b8-a1d8-dc782c57dd7e-8.jpg",
  },
  {
    name: "Tacones Bloque Colección",
    referenceCode: "COL-BLOQUE",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0071-019d2b57-104d-7489-ad1a-5be7d63dea7d-9.jpg",
  },
  {
    name: "Plataforma Wedge PS19",
    referenceCode: "PS19",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0063-019d2b57-101d-72cf-9113-b4b91cefcf21-10.jpg",
  },
  {
    name: "Mocasín Cuero LA GS205",
    referenceCode: "LA-GS205-MOCASIN",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0044-019d2b57-11e6-7609-a833-4cfc8cc3fd06-11.jpg",
  },
  {
    name: "Tacón Correa Charol PS17",
    referenceCode: "PS17-CORREA-CHAROL",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0194-019d2b8b-e8b8-754a-aca0-64874c539832-1.jpg",
  },
  {
    name: "Tacón Punta PS17",
    referenceCode: "PS17-PUNTA",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0191-019d2b8b-e8f1-744c-b7e9-f0dedc925b4a-2.jpg",
  },
  {
    name: "Stiletto Slingback PS17",
    referenceCode: "PS17-SLINGBACK",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0196-019d2b8b-e8f4-7288-a598-38f1c3808b53-3.jpg",
  },
  {
    name: "Kitten Heel Slingback PS17",
    referenceCode: "PS17-KITTEN",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0195-019d2b8b-e92e-70f1-9b24-c0cd338c9b63-4.jpg",
  },
  {
    name: "Sandalia Correa Dorada PS17",
    referenceCode: "PS17-SANDALIA-DORADA",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0183-019d2b8b-e941-739c-9052-1ae4a6b2521e-5.jpg",
  },
  {
    name: "Sandalia Negra Tacón PS17",
    referenceCode: "PS17-SANDALIA-NEGRA",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0180-019d2b8b-e903-73ae-bead-d76516228b0f-6.jpg",
  },
  {
    name: "Tacón Gamuza Colores PS17",
    referenceCode: "PS17-GAMUZA",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0188-019d2b8b-e9b2-777f-9060-9bf7ef14d813-7.jpg",
  },
  {
    name: "Tacón Bloque Colores PS17",
    referenceCode: "PS17-BLOQUE-COL",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0193-019d2b8b-e990-747c-8bf7-d7428ea45a81-8.jpg",
  },
  {
    name: "Sandalia Festiva Flor PS17",
    referenceCode: "PS17-FESTIVA-FLOR",
    category: Category.damas,
    price: "Consultar precio",
    imagePath:
      "/assets/uploads/img-20260326-wa0192-019d2b8b-e9a3-703c-82e1-0494e1f0f28b-9.jpg",
  },
];

const SEED_BLOG_POSTS = [
  {
    title: "Cómo elegir el zapato perfecto para cada ocasión",
    content:
      "Cada evento requiere el calzado adecuado. Desde una reunión de trabajo hasta una cena romántica, te enseñamos a combinar estilo y comodidad. Considera el tipo de suelo, la duración del evento y tu outfit para hacer la elección ideal.",
    author: "Luz Adriani",
  },
  {
    title: "Cuidado y mantenimiento de tus zapatos de cuero",
    content:
      "El cuero genuino puede durar años si lo cuidas bien. Aprende a limpiar, nutrir y almacenar tus zapatos de cuero para que siempre luzcan impecables. Los productos correctos marcan la diferencia.",
    author: "Luz Adriani",
  },
  {
    title: "Tendencias en calzado femenino esta temporada",
    content:
      "Los tacones bloque regresan con fuerza, los animal prints dominan las pasarelas y las plataformas siguen siendo tendencia. Descubre qué estilos son los favoritos esta temporada y cómo llevarlos con tu guardarropa.",
    author: "Luz Adriani",
  },
];

function AppContent() {
  const { actor, isFetching } = useActor();
  const { data: products = [], isLoading: productsLoading } = useAllProducts();
  const { data: blogPosts = [], isLoading: blogLoading } = useAllBlogPosts();
  const addProduct = useAddProduct();
  const addBlogPost = useAddBlogPost();
  const seededRef = useRef(false);

  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Seed data once actor is ready
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional seed-once effect
  useEffect(() => {
    if (!actor || isFetching || productsLoading || blogLoading) return;
    if (seededRef.current) return;
    seededRef.current = true;

    const seed = async () => {
      if (products.length === 0) {
        await Promise.all(SEED_PRODUCTS.map((p) => addProduct.mutateAsync(p)));
      }
      if (blogPosts.length === 0) {
        await Promise.all(
          SEED_BLOG_POSTS.map((p) => addBlogPost.mutateAsync(p)),
        );
      }
    };
    seed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actor, isFetching, productsLoading, blogLoading]);

  const handleCategoryFilter = (cat: string) => {
    setActiveCategory(cat);
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewCatalog = () => {
    setActiveCategory("todos");
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header
        onCategoryFilter={handleCategoryFilter}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <main>
        <Hero onViewCatalog={handleViewCatalog} />
        <CategoryTiles onFilter={handleCategoryFilter} />
        <ProductCatalog
          products={products}
          isLoading={productsLoading}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
        />
        <HowItWorks />
        <Blog posts={blogPosts} isLoading={blogLoading} />
      </main>
      <Footer />
      <CartSidebar />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
