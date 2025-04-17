
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 gradient-bg text-white">
      <div className="container text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          
        </h2>
        <p className="text-lg mb-8 text-white/80">
          Join thousands of freelancers leveraging blockchain technology and AI assistance 
          to find better jobs, develop skills, and earn more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-web3-primary hover:bg-white/90">
            Create Your Profile
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
