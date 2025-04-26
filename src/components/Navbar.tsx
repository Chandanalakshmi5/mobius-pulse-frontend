
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? 
      "text-blue-600 font-semibold" : 
      "text-gray-700 hover:text-blue-600 transition-colors";
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/a6f41e2f-4457-4daf-8202-2d528274435e.png" 
                alt="MobiusEngine.ai" 
                className="h-8"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`flex items-center gap-2 ${isActive('/')}`}>
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/about-us" className={isActive('/about-us')}>
              About Us
            </Link>
            <Link to="/features" className={isActive('/features')}>
              Features
            </Link>
            <Link to="/how-it-works" className={isActive('/how-it-works')}>
              How It Works
            </Link>
            <Link to="/testimonials" className={isActive('/testimonials')}>
              Testimonials
            </Link>
            <Link to="/login" className={isActive('/login')}>
              Log In
            </Link>
            <Link to="/get-started">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/"
              className={`flex items-center gap-2 py-2 ${isActive('/')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link 
              to="/about-us" 
              className={`block py-2 ${isActive('/about-us')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/features" 
              className={`block py-2 ${isActive('/features')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className={`block py-2 ${isActive('/how-it-works')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/testimonials" 
              className={`block py-2 ${isActive('/testimonials')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/login" 
              className={`block py-2 ${isActive('/login')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/get-started" 
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
