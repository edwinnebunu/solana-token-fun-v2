
import { Twitter, Github, Send } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12">
            <img
              src="/lovable-uploads/8c67f8b8-afe0-49cf-b511-4d74781b79a6.png"
              alt="FlashMeme Logo"
              className="h-10 w-auto mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-flashmeme-green mb-2">
                FlashMeme<span className="text-flashmeme-yellow">.fun</span>
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                The fastest, easiest, and most affordable way to create tokens on Solana.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 text-gray-400 hover:text-flashmeme-green hover:border-flashmeme-green transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 text-gray-400 hover:text-flashmeme-green hover:border-flashmeme-green transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 text-gray-400 hover:text-flashmeme-green hover:border-flashmeme-green transition-colors"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {currentYear} FlashMeme.fun. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-flashmeme-green text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-flashmeme-green text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-flashmeme-green text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
