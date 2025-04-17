
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Bot, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("career");
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const generateResponse = (userPrompt: string, activeAssistant: any) => {
    const lowercasePrompt = userPrompt.toLowerCase();
    
    // Career guidance responses
    if (activeAssistant.id === "career") {
      if (lowercasePrompt.includes("skill") || lowercasePrompt.includes("learn")) {
        return `Based on current Web3 market trends, I recommend focusing on these skills:

1. **Smart Contract Development** - Learn Solidity and security best practices
2. **Frontend Integration** - Master ethers.js or web3.js libraries
3. **Backend Infrastructure** - Study node.js with web3 libraries
4. **Blockchain Architecture** - Understand consensus mechanisms and network types

The most in-demand skills right now are Solidity development and React/ethers.js integration. Would you like me to help you create a personalized learning roadmap?`;
      } else if (lowercasePrompt.includes("portfolio") || lowercasePrompt.includes("showcase")) {
        return `To showcase your Web3 development portfolio effectively:

1. **Build 3-5 focused projects** - Include at least one DeFi app, one NFT project, and one DAO or governance example
2. **Open-source your work** - Push code to GitHub with clear documentation
3. **Deploy live demos** - Use services like Vercel, Netlify, or IPFS
4. **Include technical write-ups** - Explain your architectural decisions and security considerations
5. **Contribute to existing projects** - Show you can work with established codebases

Would you like specific project ideas for your portfolio that would appeal to potential clients?`;
      } else if (lowercasePrompt.includes("certification") || lowercasePrompt.includes("course")) {
        return `For Web3 certifications and courses, I recommend:

1. **Chainlink Bootcamp** - Practical smart contract development with real-world integrations
2. **ConsenSys Academy** - Comprehensive Ethereum developer program
3. **Buildspace Projects** - Hands-on Web3 app building with community support
4. **LearnWeb3.io** - Progressive learning path from basics to advanced topics
5. **Encode Club** - Hackathons and specialized workshops

Certifications are less important than demonstrable skills in Web3, but they can help you structure your learning. Would you like me to suggest a specific learning path based on your current experience level?`;
      }
    }
    
    // Proposal helper responses
    else if (activeAssistant.id === "proposal") {
      if (lowercasePrompt.includes("proposal") || lowercasePrompt.includes("write")) {
        return `Here's a structure for your website redesign proposal:

**1. Project Understanding**
- Mention specific pain points from the client's current site
- Show you've researched their business and competitors

**2. Solution Overview**
- Propose a Web3-enabled site with specific technologies
- Highlight user experience improvements and conversion optimizations

**3. Technical Approach**
- Frontend: React with Tailwind CSS for responsive design
- Backend: Smart contract integration for [specific functionality]
- Authentication: Connect wallet options with traditional login fallback

**4. Timeline and Milestones**
- Discovery Phase: 1 week
- Design and Approval: 2 weeks
- Development: 3-4 weeks
- Testing and Revisions: 1 week

**5. Investment**
- Clear pricing breakdown by feature
- Payment schedule tied to milestones
- Optional additional services

Would you like me to help you customize this template for your specific client?`;
      } else if (lowercasePrompt.includes("rate") || lowercasePrompt.includes("charge")) {
        return `For 3D modeling work in Web3 projects, current market rates are:

**Junior Level (0-2 years experience)**
- $30-50 per hour
- $250-400 per basic model
- $1,500-3,000 for complete NFT collections (10 base models with variations)

**Mid Level (2-5 years experience)**
- $50-80 per hour
- $400-800 per detailed model
- $3,000-6,000 for complete NFT collections with custom rigging

**Senior Level (5+ years experience)**
- $80-150+ per hour
- $800-2,000+ for complex models with animations
- $6,000-15,000+ for premium collections with unique attributes

When setting your rate, also consider:
1. Project complexity and technical requirements
2. Rights transfer (exclusive vs. non-exclusive)
3. Timeline (rush jobs command premium rates)
4. Revisions included

What's your current experience level with 3D modeling specifically for Web3 projects?`;
      } else if (lowercasePrompt.includes("stand out") || lowercasePrompt.includes("application")) {
        return `To stand out when applying for this coding project:

1. **Demonstrate relevant experience** - Create a custom code sample addressing the project's specific challenges

2. **Show technical alignment** - Mention exactly which technologies from their stack you've mastered with examples

3. **Prove quick understanding** - Reference specific parts of their project brief and how you'd approach them

4. **Add unexpected value** - Suggest one improvement or feature they haven't mentioned but would benefit them

5. **Address potential concerns** - If you have a skill gap, acknowledge it and explain your plan to overcome it

6. **Personalize communication** - Research the client's previous work and reference it to show genuine interest

Remember that clients look for communication skills as much as technical ability. Would you like me to help craft a specific response for this project?`;
      }
    }
    
    // Skill coach responses
    else if (activeAssistant.id === "skill") {
      if (lowercasePrompt.includes("website") || lowercasePrompt.includes("portfolio site")) {
        return `Based on current Web3 portfolio website trends, here are improvement suggestions:

1. **Web3 Wallet Integration** - Add MetaMask or WalletConnect login to showcase your technical skills

2. **Performance Optimization** - Improve loading times and Lighthouse scores; I recommend lazy loading for project images

3. **Case Studies Format** - Restructure projects as problem-solution-result narratives rather than just descriptions

4. **Interactive Demos** - Add live interactive elements for your projects rather than just screenshots

5. **Technical Writing Section** - Include a blog with 2-3 technical articles to demonstrate knowledge depth

6. **Accessibility** - Ensure proper contrast ratios and keyboard navigation support

7. **Mobile Responsiveness** - Test and optimize for devices under 375px width

Would you like specific feedback about a particular aspect of your portfolio site?`;
      } else if (lowercasePrompt.includes("logo") || lowercasePrompt.includes("design")) {
        return `For your logo design, I can offer these improvement suggestions:

1. **Scalability** - Your current design loses detail at smaller sizes; simplify key elements to maintain recognition

2. **Color Psychology** - The current blue shade conveys trust but lacks energy; consider adding a secondary accent color with higher vibrancy

3. **Versatility** - Create variations for different backgrounds and use cases (light/dark modes, social media)

4. **Distinctiveness** - The geometric shape is similar to several competitors; add a unique element while maintaining the core concept

5. **Typography** - The current font weight appears too light for small digital applications; consider a medium weight alternative

6. **Negative Space** - There's an opportunity to incorporate meaningful negative space in the icon portion

Would you like to share a specific aspect of your logo design that you'd like more detailed feedback on?`;
      } else if (lowercasePrompt.includes("writing") || lowercasePrompt.includes("content")) {
        return `To improve your writing style for Web3 content:

1. **Technical Accuracy with Accessibility** - You explain complex concepts well, but try using more analogies to make them relatable to newcomers

2. **Structure** - Add more subheadings and bullet points to break up dense paragraphs

3. **Active Voice** - Replace phrases like "smart contracts are utilized to" with "smart contracts enable"

4. **Specificity** - Replace general statements like "many benefits" with specific, quantifiable advantages

5. **Audience Awareness** - Your content assumes too much prior knowledge; define key terms or link to explanations

6. **Call to Action** - End sections with thought-provoking questions or next steps for the reader

Would you like me to review a specific paragraph and suggest direct edits?`;
      }
    }
    
    // Default response
    return `Thank you for your question about "${userPrompt}". 

As your Web3Thrive Assistant, I can help with:

1. Career guidance and skill development pathways
2. Proposal writing and rate setting for freelance projects
3. Feedback on your work and portfolio improvement

Could you provide more details about what specific information you're looking for? For example, are you interested in blockchain development skills, NFT creation, or finding Web3 clients?`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Get current active assistant
    const activeAssistant = getActiveAssistant();
    
    // Clear input
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);
    
    // Generate AI response with a slight delay to simulate thinking
    setTimeout(() => {
      const responseContent = generateResponse(input, activeAssistant);
      setMessages(prev => [...prev, { role: "assistant", content: responseContent }]);
      setIsTyping(false);
      
      toast({
        title: "Response generated",
        description: "Web3Thrive Assistant has answered your question.",
      });
    }, 1000);
  };

  const assistantTypes = [
    {
      id: "career",
      name: "Web3Thrive Guide",
      icon: <Bot className="text-white" size={20} />,
      description: "Career guidance and skill development pathways",
      examples: [
        "What skills should I learn for blockchain development?",
        "How can I showcase my design portfolio effectively?",
        "What certifications are most valuable for data analysis?"
      ]
    },
    {
      id: "proposal",
      name: "Proposal Helper",
      icon: <FileText className="text-white" size={20} />,
      description: "Help writing winning proposals and setting fair rates",
      examples: [
        "Help me write a proposal for a website redesign project",
        "What rate should I charge for 3D modeling work?",
        "How can I stand out when applying for this coding project?"
      ]
    },
    {
      id: "skill",
      name: "Skill Coach",
      icon: <Sparkles className="text-white" size={20} />,
      description: "Feedback on your work and improvement suggestions",
      examples: [
        "Review my portfolio website and suggest improvements",
        "Give me feedback on this logo design",
        "What can I improve in my writing style?"
      ]
    }
  ];

  const getActiveAssistant = () => {
    return assistantTypes.find(type => type.id === activeTab) || assistantTypes[0];
  };

  const activeAssistant = getActiveAssistant();

  return (
    <div className="py-16 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center">
              <Bot className="text-white" size={24} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Web3Thrive Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get 24/7 assistance with proposals, skill development, and career guidance
            to maximize your earning potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="career" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8">
              {assistantTypes.map(type => (
                <TabsTrigger 
                  key={type.id} 
                  value={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className="flex flex-col md:flex-row gap-2 items-center py-3"
                >
                  <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                    {type.icon}
                  </div>
                  <span>{type.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {assistantTypes.map(type => (
              <TabsContent key={type.id} value={type.id}>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="p-6 shadow-lg border-border/50">
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
              {messages.length === 0 ? (
                <div className="bg-web3-light/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center">
                      <Bot className="text-white" size={12} />
                    </div>
                    <p className="text-sm font-medium">{activeAssistant.name}</p>
                  </div>
                  <p>
                    Hello! I'm your {activeAssistant.name}. How can I help you today?
                  </p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div key={index} className={`${message.role === "user" ? "bg-muted" : "bg-web3-light/20"} p-4 rounded-lg`}>
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === "assistant" ? (
                        <>
                          <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center">
                            <Bot className="text-white" size={12} />
                          </div>
                          <p className="text-sm font-medium">{activeAssistant.name}</p>
                        </>
                      ) : (
                        <p className="text-sm font-medium">You</p>
                      )}
                    </div>
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                ))
              )}
              
              {isTyping && (
                <div className="bg-web3-light/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center">
                      <Bot className="text-white" size={12} />
                    </div>
                    <p className="text-sm font-medium">{activeAssistant.name}</p>
                  </div>
                  <p>Typing...</p>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                className="w-full rounded-lg border border-input bg-white dark:bg-gray-800 px-4 py-3 pr-16 text-sm"
                placeholder={`Ask ${activeAssistant.name} anything...`}
                value={input}
                onChange={handleInputChange}
              />
              <Button 
                type="submit" 
                className="absolute right-1 top-1 h-8 w-8 rounded-md p-0 gradient-bg"
                disabled={isTyping}
              >
                <ArrowRight size={16} className="text-white" />
              </Button>
            </form>

            <div className="mt-5">
              <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {activeAssistant.examples.map((example, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    className="text-xs h-auto py-1"
                    onClick={() => setInput(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
