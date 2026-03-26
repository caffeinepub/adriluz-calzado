import { Badge } from "@/components/ui/badge";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Damas", href: "#catalogo", filter: "damas" },
  { label: "Caballeros", href: "#catalogo", filter: "caballeros" },
  { label: "Ni\u00f1os", href: "#catalogo", filter: "ninos" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

interface HeaderProps {
  onCategoryFilter: (cat: string) => void;
  searchQuery: string;
  onSearch: (q: string) => void;
}

export default function Header({
  onCategoryFilter,
  searchQuery,
  onSearch,
}: HeaderProps) {
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-brand-cream border-b border-border sticky top-0 z-40 shadow-xs">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main header row */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col leading-tight shrink-0">
            <span className="font-display text-2xl font-bold text-brand-rose tracking-tight">
              Adriluz
            </span>
            <span className="text-xs font-body text-muted-foreground uppercase tracking-widest -mt-1">
              Calzado
            </span>
          </a>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Buscar zapatos..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              data-ocid="header.search_input"
              className="w-full bg-white border border-border rounded-full px-4 py-2 pr-10 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              data-ocid="header.button"
              className="relative p-2 hover:text-primary transition-colors"
              aria-label="Carrito"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-brand-rose text-white text-xs rounded-full">
                  {totalItems}
                </Badge>
              )}
            </button>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Men\u00fa"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Nav row */}
        <nav
          className="hidden md:flex items-center gap-6 pb-3 -mt-1"
          data-ocid="nav.panel"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              onClick={() => link.filter && onCategoryFilter(link.filter)}
              className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-3 flex flex-col gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-white border border-border rounded-full px-4 py-2 pr-10 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  link.filter && onCategoryFilter(link.filter);
                  setMobileOpen(false);
                }}
                className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
