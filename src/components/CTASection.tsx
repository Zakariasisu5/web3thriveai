
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    
       
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-web3-primary hover:bg-white/90">
            Create Your Profile
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
    </div>
  );
};

export default CTASection;
