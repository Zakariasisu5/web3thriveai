
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNavigation = (route: string) => {
    if (route === '/find-work' || route === '/for-clients' || route === '/learning' || route === '/ai-assistant') {
      toast({
        title: "Coming Soon",
        description: "This feature is currently under development. Stay tuned!",
      });
    } else {
      navigate(route);
    }
  };

  return (
    <nav className="py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
            <span className="font-bold text-white text-lg">W3</span>
          </div>
          <span className="font-bold text-xl">Web3Thrive</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavigation('/find-work')}
            className="text-sm font-medium hover:text-web3-primary transition-colors"
          >
            Find Work
          </button>
          <button 
            onClick={() => handleNavigation('/for-clients')}
            className="text-sm font-medium hover:text-web3-primary transition-colors"
          >
            For Clients
          </button>
          <button 
            onClick={() => handleNavigation('/learning')}
            className="text-sm font-medium hover:text-web3-primary transition-colors"
          >
            Learning Portal
          </button>
          <button 
            onClick={() => handleNavigation('/ai-assistant')}
            className="text-sm font-medium hover:text-web3-primary transition-colors"
          >
            AI Assistance
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b z-50 py-4">
          <div className="container flex flex-col gap-4">
            <button 
              onClick={() => handleNavigation('/find-work')}
              className="text-sm font-medium py-2 hover:text-web3-primary"
            >
              Find Work
            </button>
            <button 
              onClick={() => handleNavigation('/for-clients')}
              className="text-sm font-medium py-2 hover:text-web3-primary"
            >
              For Clients
            </button>
            <button 
              onClick={() => handleNavigation('/learning')}
              className="text-sm font-medium py-2 hover:text-web3-primary"
            >
              Learning Portal
            </button>
            <button 
              onClick={() => handleNavigation('/ai-assistant')}
              className="text-sm font-medium py-2 hover:text-web3-primary"
            >
              AI Assistance
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
