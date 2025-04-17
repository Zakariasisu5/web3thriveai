
import { useState, useRef, useEffect } from "react";
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate more comprehensive responses
  const generateResponse = (userPrompt: string) => {
    const lowercasePrompt = userPrompt.toLowerCase();
    
    if (lowercasePrompt.includes("smart contract") || lowercasePrompt.includes("contract")) {
      return `Smart contracts are self-executing contracts with the terms directly written into code. They run on blockchain networks and execute automatically when predefined conditions are met.

Key points about smart contracts:

1. **Immutability**: Once deployed, they cannot be modified, ensuring transparency and trust.
2. **Security Best Practices**:
   - Always use the latest Solidity version
   - Follow checked-effects-interactions pattern to prevent reentrancy attacks
   - Use OpenZeppelin's audited contracts when possible
   - Implement comprehensive testing with coverage > 95%

3. **Auditing**: Always have your contracts audited by reputable security firms before deployment.

Would you like me to provide a simple ERC-20 token contract example or discuss specific security concerns?`;
    } else if (lowercasePrompt.includes("solidity") || lowercasePrompt.includes("ethereum")) {
      return `Solidity is Ethereum's primary smart contract language. It's statically typed and designed for the Ethereum Virtual Machine (EVM).

Key Solidity concepts:

1. **Data Types**: 
   - Value types: bool, int/uint, address, bytes
   - Reference types: arrays, structs, mappings

2. **Gas Optimization**:
   - Use uint256 instead of smaller sizes when possible
   - Pack variables to save storage space
   - Use calldata instead of memory for read-only function parameters

3. **Design Patterns**:
   - Factory pattern for creating contract instances
   - Proxy pattern for upgradeable contracts
   - Access control for permission management

Would you like to see code examples for any specific Solidity concept?`;
    } else if (lowercasePrompt.includes("security") || lowercasePrompt.includes("audit")) {
      return `Security is paramount in Web3 development. Common vulnerabilities include:

1. **Reentrancy Attacks**: 
   - Prevention: Use the checks-effects-interactions pattern
   - Tools: OpenZeppelin's ReentrancyGuard

2. **Integer Overflow/Underflow**: 
   - Prevention: Use SafeMath or Solidity 0.8.0+ with automatic checks
   - Always validate inputs and handle edge cases

3. **Front-Running**: 
   - Prevention: Use commitment schemes or transaction ordering protection
   - Consider the MEV impact on your protocols

4. **Authorization Issues**:
   - Use role-based access control (RBAC)
   - Implement multi-signature mechanisms for high-value operations

For automated analysis, I recommend tools like Slither, Mythril, or MythX. Would you like more specific security recommendations?`;
    } else if (lowercasePrompt.includes("nft") || lowercasePrompt.includes("token")) {
      return `NFTs (Non-Fungible Tokens) represent unique digital assets on the blockchain.

Key NFT concepts:

1. **Standards**:
   - ERC-721: The basic NFT standard
   - ERC-1155: Multi-token standard with batch operations
   - ERC-4907: NFT rental standard

2. **Metadata**:
   - On-chain vs. off-chain storage tradeoffs
   - IPFS for decentralized metadata storage
   - Tokenbound accounts for NFT-owned assets

3. **Marketplace Integration**:
   - Royalty enforcement (ERC-2981)
   - Consideration for marketplace fees
   - Listing and auction mechanisms

Here's a simple ERC-721 example:

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter;
    string private _baseTokenURI;
    
    constructor(string memory name, string memory symbol, string memory baseURI) 
        ERC721(name, symbol)
        Ownable(msg.sender)
    {
        _baseTokenURI = baseURI;
    }
    
    function mint(address to) external onlyOwner {
        _tokenIdCounter++;
        _safeMint(to, _tokenIdCounter);
    }
    
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}
\`\`\`

Would you like more specific information about implementing an NFT collection?`;
    } else if (lowercasePrompt.includes("web3.js") || lowercasePrompt.includes("ethers.js")) {
      return `Web3.js and ethers.js are JavaScript libraries for interacting with Ethereum. Ethers.js has gained popularity due to its smaller size and improved design.

Key functionality:

1. **Provider Connection**:
   - Connect to RPC endpoints like Infura, Alchemy, or your own node
   - Handle network switching and chain detection

2. **Contract Interaction**:
   - Read contract state with call methods
   - Write to contracts by sending transactions
   - Listen for events using filters

3. **Account Management**:
   - Connect to wallets like MetaMask, WalletConnect
   - Sign messages and transactions
   - Handle ENS resolution

Example using ethers.js v6:

\`\`\`javascript
import { ethers } from "ethers";

// Connect to provider (browser or node)
const provider = new ethers.BrowserProvider(window.ethereum);

// Get signer (for transactions)
const getSigner = async () => {
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
};

// Connect to contract
const connectToContract = async (contractAddress, contractABI) => {
  const signer = await getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};

// Read from contract
const getTokenBalance = async (contract, address) => {
  return await contract.balanceOf(address);
};

// Write to contract
const transferTokens = async (contract, to, amount) => {
  const tx = await contract.transfer(to, amount);
  await tx.wait();
  return tx.hash;
};
\`\`\`

Would you like to see more specific examples?`;
    } else if (lowercasePrompt.includes("defi") || lowercasePrompt.includes("finance")) {
      return `DeFi (Decentralized Finance) encompasses financial applications built on blockchain technology.

Key DeFi concepts:

1. **Liquidity Pools**:
   - Automated Market Makers (AMMs) like Uniswap
   - Constant product formula (x*y=k)
   - Impermanent loss considerations
   
2. **Lending & Borrowing**:
   - Overcollateralized loans
   - Interest rate models
   - Liquidation mechanisms

3. **Yield Farming**:
   - Staking rewards
   - Liquidity mining
   - Protocol incentives

4. **Security Considerations**:
   - Oracle manipulation risks
   - Flash loan attack vectors
   - Economic attack scenarios

Popular DeFi protocols to study include Aave, Compound, Uniswap, and MakerDAO. Each provides excellent documentation and open-source code to learn from.

Would you like more information on any specific DeFi concept?`;
    } else if (lowercasePrompt.includes("gas") || lowercasePrompt.includes("fees")) {
      return `Gas fees in Ethereum represent the computational cost of executing operations.

Key gas concepts:

1. **Gas Price Types (EIP-1559)**:
   - Base Fee: Algorithmically determined, burned
   - Priority Fee: Tip to miners/validators
   - Max Fee: Maximum willing to pay
   
2. **Gas Optimization Techniques**:
   - Batch transactions when possible
   - Use calldata instead of memory for read-only function parameters
   - Minimize storage operations
   - Avoid unnecessary loops and computations
   
3. **Layer 2 Solutions**:
   - Optimistic Rollups (Optimism, Arbitrum)
   - ZK-Rollups (zkSync, StarkNet)
   - Sidechains (Polygon)
   
Gas costs vary by network congestion. For production applications, always implement gas estimation and allow users to adjust their gas settings.

Would you like to discuss specific gas optimization strategies for your project?`;
    } else if (lowercasePrompt.includes("dao") || lowercasePrompt.includes("governance")) {
      return `DAOs (Decentralized Autonomous Organizations) enable community governance of protocols and treasuries.

Key DAO concepts:

1. **Governance Models**:
   - Token-weighted voting
   - Quadratic voting
   - Reputation-based systems
   - Delegation mechanisms
   
2. **Proposal Systems**:
   - On-chain execution
   - Off-chain signaling
   - Timelock controllers
   - Execution frameworks
   
3. **Treasury Management**:
   - Multi-signature wallets
   - Automated investment strategies
   - Diversification approaches
   
4. **Implementation Options**:
   - Governor contracts (OpenZeppelin)
   - Snapshot for off-chain voting
   - Aragon or Colony frameworks
   - Custom solutions

Notable examples include Uniswap, MakerDAO, and ENS DAOs.

Would you like more information on implementing governance for your project?`;
    }
    
    // Default response for other queries
    return `I'm your Web3 development assistant. I can help with:

1. Smart contract development and security best practices
2. Blockchain architecture and design patterns
3. DeFi protocols and mechanism design
4. NFT development and marketplace integration
5. Web3 frontend integration (ethers.js, web3.js)
6. DAO governance structures

Feel free to ask specific questions about any Web3 development topic. For code examples, let me know your preferred language or framework, and I'll tailor my response accordingly.`;
  };

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
      // Simulate AI response with improved generation
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
          <div className="flex flex-col gap-4 mb-4 max-h-[500px] overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="flex items-start gap-4">
                {message.role === "assistant" ? (
                  <Bot className="w-8 h-8 text-web3-primary mt-2 shrink-0" />
                ) : null}
                <div className={`flex-1 p-4 rounded-lg ${
                  message.role === "assistant" ? "bg-muted" : "bg-web3-light/20 ml-auto"
                }`}>
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
                {message.role === "user" ? (
                  <div className="w-8 h-8 bg-web3-primary rounded-full flex items-center justify-center mt-2 shrink-0">
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
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
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
              className="md:mt-auto md:self-end"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
              Send
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistance;
