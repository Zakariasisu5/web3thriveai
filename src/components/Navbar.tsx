
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
            <span className="font-bold text-white text-lg">SV</span>
          </div>
          <span className="font-bold text-xl">SkillVerse</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-web3-primary transition-colors">
            Find Work
          </a>
          <a href="#" className="text-sm font-medium hover:text-web3-primary transition-colors">
            For Clients
          </a>
          <a href="#" className="text-sm font-medium hover:text-web3-primary transition-colors">
            Learning Portal
          </a>
          <a href="#" className="text-sm font-medium hover:text-web3-primary transition-colors">
            AI Assistance
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button className="gradient-bg border-0">Join Now</Button>
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
            <a href="#" className="text-sm font-medium py-2 hover:text-web3-primary">
              Find Work
            </a>
            <a href="#" className="text-sm font-medium py-2 hover:text-web3-primary">
              For Clients
            </a>
            <a href="#" className="text-sm font-medium py-2 hover:text-web3-primary">
              Learning Portal
            </a>
            <a href="#" className="text-sm font-medium py-2 hover:text-web3-primary">
              AI Assistance
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full gradient-bg border-0">Join Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
