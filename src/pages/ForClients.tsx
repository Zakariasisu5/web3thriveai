
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Shield, Zap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";

const ForClients = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-web3-primary" />,
      title: "Access Top Web3 Talent",
      description: "Connect with pre-vetted blockchain developers, designers, and experts."
    },
    {
      icon: <Shield className="w-8 h-8 text-web3-primary" />,
      title: "Secure Contracts",
      description: "Smart contract-based escrow and milestone payments for peace of mind."
    },
    {
      icon: <Zap className="w-8 h-8 text-web3-primary" />,
      title: "Fast Matching",
      description: "Find the perfect talent for your project within 48 hours."
    },
    {
      icon: <Award className="w-8 h-8 text-web3-primary" />,
      title: "Quality Guaranteed",
      description: "Work with professionals who have proven Web3 experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hire Web3 Professionals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access a global network of blockchain experts ready to bring your Web3 projects to life
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">
            Post a Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForClients;
