import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import AIAssistant from "@/components/AIAssistant";
import MarketplacePreview from "@/components/MarketplacePreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <AIAssistant />
      <MarketplacePreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
