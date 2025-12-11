import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import netomiLogo from "@/assets/netomi-logo.jpg";
import UnderDevelopmentModal from "@/components/ui/UnderDevelopmentModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLaunchAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 focusable">
            <img
              src={netomiLogo}
              alt="Netomi Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-heading text-xl font-bold tracking-tight">
              Netomi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 focusable ${
                  isActive(link.path)
                    ? "text-primary neon-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleLaunchAppClick}
              className="btn-primary text-sm focusable"
            >
              Launch App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focusable"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium py-2 transition-all duration-300 focusable ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleLaunchAppClick}
              className="btn-primary text-sm text-center mt-2 focusable"
            >
              Launch App
            </button>
          </div>
        </div>
      )}

      {/* Under Development Modal */}
      <UnderDevelopmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
