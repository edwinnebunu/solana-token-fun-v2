
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/10 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/8c67f8b8-afe0-49cf-b511-4d74781b79a6.png"
              alt="FlashMeme Logo"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-flashmeme-green">
              FlashMeme
              <span className="text-flashmeme-yellow">.fun</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-flashmeme-light hover:text-flashmeme-green transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-flashmeme-light hover:text-flashmeme-green transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-flashmeme-light hover:text-flashmeme-green transition-colors"
              >
                Why Choose Us
              </button>
              <Button
                onClick={() => scrollToSection("newsletter")}
                variant="primary"
                size="sm"
              >
                Get Notified
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-flashmeme-green focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel rounded-b-lg mx-4 mt-2 p-4 space-y-3">
          <button
            onClick={() => scrollToSection("features")}
            className="block w-full text-left px-3 py-2 rounded-md text-flashmeme-light hover:bg-flashmeme-green/20 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="block w-full text-left px-3 py-2 rounded-md text-flashmeme-light hover:bg-flashmeme-green/20 transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("why-choose-us")}
            className="block w-full text-left px-3 py-2 rounded-md text-flashmeme-light hover:bg-flashmeme-green/20 transition-colors"
          >
            Why Choose Us
          </button>
          <Button
            onClick={() => scrollToSection("newsletter")}
            variant="primary"
            size="sm"
            className="w-full"
          >
            Get Notified
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
