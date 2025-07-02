import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sage-200 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-medium text-sage-900">
              Dr. Serena Blake
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sage-600 hover:text-sage-800 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sage-600 hover:text-sage-800 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sage-600 hover:text-sage-800 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sage-600 hover:text-sage-800 transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full"
            >
              Book Consult
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-sage-600" />
            ) : (
              <Menu className="h-6 w-6 text-sage-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sage-600 hover:text-sage-800 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sage-600 hover:text-sage-800 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sage-600 hover:text-sage-800 transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sage-600 hover:text-sage-800 transition-colors text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full w-fit"
              >
                Book Consult
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
