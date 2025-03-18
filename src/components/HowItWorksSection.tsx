
import { Check } from "lucide-react";
import AnimatedText from "./AnimatedText";

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Simply connect your Solana wallet to get started. We support Phantom, Solflare, and other popular wallets.",
  },
  {
    number: "02",
    title: "Configure Your Token",
    description: "Name your token, set the supply, decimals, and add other customizations through our simple interface.",
  },
  {
    number: "03",
    title: "Add Special Features",
    description: "Optionally add functionality like burn, freeze, or minting capabilities to your token.",
  },
  {
    number: "04",
    title: "Review & Launch",
    description: "Preview all settings, pay the minimal fee, and launch your token on the Solana blockchain.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-gradient-to-b from-flashmeme-dark to-black">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-flashmeme-green/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-flashmeme-yellow/5 blur-3xl animate-pulse-slow animate-delay-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedText variant="slide-up" className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-flashmeme-green/20 text-flashmeme-green mb-3">
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
            <span className="text-gradient block mt-2">Simple. Fast. Secure.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Creating your own Solana token has never been easier. Follow these simple steps and launch your token in minutes.
          </p>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <AnimatedText key={step.number} variant="slide-up" delay={index * 100}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-flashmeme-green text-flashmeme-green font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <AnimatedText variant="zoom">
              <div className="glass-card rounded-2xl p-8 border border-flashmeme-green/30 relative">
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-medium text-white mb-6">Create Your Token</h4>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Token Name</label>
                      <div className="h-10 bg-white/10 rounded-md border border-gray-700 px-3"></div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Token Symbol</label>
                      <div className="h-10 bg-white/10 rounded-md border border-gray-700 px-3"></div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Total Supply</label>
                      <div className="h-10 bg-white/10 rounded-md border border-gray-700 px-3"></div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Decimals</label>
                      <div className="h-10 bg-white/10 rounded-md border border-gray-700 px-3"></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-white mb-3">Special Features</h5>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded border border-flashmeme-green flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-flashmeme-green" />
                        </div>
                        <span className="text-sm text-gray-300">Burnable</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded border border-flashmeme-green flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-flashmeme-green" />
                        </div>
                        <span className="text-sm text-gray-300">Mintable</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-5 w-5 rounded border border-gray-700 mr-2"></div>
                        <span className="text-sm text-gray-300">Transferable</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-10 bg-flashmeme-green rounded-md w-full"></div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
