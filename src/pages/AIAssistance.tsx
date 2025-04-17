
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Code, FileSearch, BrainCircuit, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const AIAssistance = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([
    {role: "assistant", content: "How can I assist you with your Web3 development today?"}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const features = [
    {
      icon: <Code className="w-8 h-8 text-web3-primary" />,
      title: "Smart Contract Analysis",
      description: "Get instant feedback on your smart contract code."
    },
    {
      icon: <FileSearch className="w-8 h-8 text-web3-primary" />,
      title: "Security Auditing",
      description: "Automated security vulnerability detection."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-web3-primary" />,
      title: "Code Generation",
      description: "Generate boilerplate code for common Web3 patterns."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    // Add user message
    const userMessage = {role: "user", content: prompt};
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setPrompt("");
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Simulate AI response (in a real app, this would be an API call)
      setTimeout(() => {
        // Generate response based on user prompt
        let response = generateResponse(prompt);
        
        // Add AI response
        setMessages(prev => [...prev, {role: "assistant", content: response}]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error processing request:", error);
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
      });
      setIsLoading(false);
    }
  };
  
  // Simple response generator function (this would be replaced by a real AI API call)
  const generateResponse = (userPrompt: string) => {
    const lowercasePrompt = userPrompt.toLowerCase();
    
    if (lowercasePrompt.includes("smart contract") || lowercasePrompt.includes("contract")) {
      return "Smart contracts are self-executing contracts with the terms directly written into code. For best practices, ensure your contracts are audited for security vulnerabilities and follow the principle of least privilege. Would you like me to analyze a specific smart contract or provide a simple example?";
    } else if (lowercasePrompt.includes("solidity") || lowercasePrompt.includes("ethereum")) {
      return "Solidity is the primary programming language for Ethereum smart contracts. It's a statically-typed language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM). Would you like to learn more about specific Solidity concepts or see some code examples?";
    } else if (lowercasePrompt.includes("security") || lowercasePrompt.includes("audit")) {
      return "Security is crucial in Web3 development. Common vulnerabilities include reentrancy attacks, integer overflow/underflow, and front-running. I recommend using tools like Slither, Mythril, or MythX for automated security analysis. Would you like more specific security recommendations for your project?";
    } else if (lowercasePrompt.includes("nft") || lowercasePrompt.includes("token")) {
      return "NFTs (Non-Fungible Tokens) are unique digital assets represented on a blockchain. The most common standard is ERC-721 on Ethereum. To create an NFT collection, you'll need a smart contract that implements this standard and metadata for your tokens. Would you like me to provide a simple ERC-721 contract example?";
    } else if (lowercasePrompt.includes("web3.js") || lowercasePrompt.includes("ethers.js")) {
      return "Web3.js and ethers.js are JavaScript libraries that allow you to interact with the Ethereum blockchain. They provide methods to send transactions, interact with smart contracts, and read blockchain data. Ethers.js has become more popular recently due to its smaller size and improved design. Would you like to see code examples for connecting to a wallet or interacting with a contract?";
    }
    
    return "I'm here to help with your Web3 development questions. Feel free to ask about smart contracts, blockchain technology, decentralized applications, or specific programming concepts!";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Development Assistant</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your intelligent companion for Web3 development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4 mb-4 max-h-[400px] overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="flex items-start gap-4">
                {message.role === "assistant" ? (
                  <Bot className="w-8 h-8 text-web3-primary mt-2" />
                ) : null}
                <div className={`flex-1 p-4 rounded-lg ${
                  message.role === "assistant" ? "bg-muted" : "bg-web3-light/20 ml-auto"
                }`}>
                  {message.content}
                </div>
                {message.role === "user" ? (
                  <div className="w-8 h-8 bg-web3-primary rounded-full flex items-center justify-center mt-2">
                    <span className="text-white font-bold">You</span>
                  </div>
                ) : null}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-4">
                <Bot className="w-8 h-8 text-web3-primary mt-2" />
                <div className="flex-1 bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Textarea 
              placeholder="Ask about smart contracts, security, or request code samples..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1"
              rows={3}
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="mt-auto"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistance;
