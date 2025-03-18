
import { useEffect, useState } from "react";
import Button from "./Button";
import AnimatedText from "./AnimatedText";
import { Zap, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-flashmeme-dark to-black z-0"></div>
      <div className="absolute inset-0 bg-gradient-spotlight from-flashmeme-green/20 via-transparent to-transparent opacity-30 z-0"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-flashmeme-green/10 animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-flashmeme-yellow/10 animate-float animate-delay-400 opacity-50"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-flashmeme-green/10 animate-float animate-delay-200 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/8c67f8b8-afe0-49cf-b511-4d74781b79a6.png"
                alt="FlashMeme Logo"
                className="h-24 sm:h-32 w-auto animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-flashmeme-yellow/30 blur-xl animate-pulse-slow rounded-full opacity-70"></div>
            </div>
          </div>

          <AnimatedText variant="slide-down" className="mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Create Solana Tokens with
              <span className="text-gradient block mt-2">Zero Code. Zero Hassle.</span>
            </h1>
          </AnimatedText>

          <AnimatedText variant="fade" delay={300} className="mb-8">
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              FlashMeme.fun is the fastest, easiest, and most affordable platform for creating
              tokens on Solana. No technical knowledge required.
            </p>
          </AnimatedText>

          <AnimatedText variant="slide-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
                icon={<Zap className="h-5 w-5" />}
                className="group"
              >
                <span className="group-hover:tracking-wider transition-all duration-300">Get Early Access</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Scroll down indicator */}
      {showScrollIndicator && (
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToFeatures}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 text-flashmeme-green" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
