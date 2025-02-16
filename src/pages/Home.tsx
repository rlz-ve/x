import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { HoverBorderGradient } from '../components/HoverBorderGradient';

interface FAQItem {
  q: string;
  a: string;
}

function FAQAccordion({ item, index, isOpen, onToggle }: { 
  item: FAQItem; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <button
        onClick={onToggle}
        className="relative w-full p-6 bg-white/5 rounded-lg backdrop-blur-sm text-left transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{item.q}</h3>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-400 mt-4">{item.a}</p>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function Home() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Is Xeno Safe?",
      a: 'Yes, Xeno is safe to use. Sometimes antivirus programs might flag it as a Trojan or malware, but that\'s usually just a false positive. To be safe, you can always do a quick search, like "Is Xeno legit? Reddit," to double-check. Also, make sure you\'re downloading exploits directly from their official sources.'
    },
    {
      q: "Can i get banned with Xeno?",
      a: "Using third-party software like Xeno does come with risks. Roblox typically conducts ban waves every three months, and the penalties progress as follows: 1-day ban → 3-day ban → 7-day ban → permanent ban. However, according to a Roblox Staff on Reddit, Bitdancer, the ban progression might reset to a 1-day ban if you avoid getting banned for a while."
    },
    {
      q: "How often does Xeno update?",
      a: "Xeno gets regular updates, usually within 24 hours, to keep everything running smoothly and stay compatible with the latest changes."
    }
  ];

  const handleFAQToggle = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative min-h-screen flex flex-col">
        {/* Main Content Section */}
        <div className="flex-1 flex items-center justify-center pt-12 sm:pt-24">
          <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            >
            </motion.h1>

            <HoverBorderGradient className="w-full max-w-[900px] mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />
                  
                  <img
                    src="https://github.com/Riz-ve/Xeno/blob/main/v1.0.1-Preview.png?raw=true"
                    alt="Xeno"
                    className="w-full h-full object-contain rounded-2xl transform transition-all duration-700 group-hover:scale-[1.02] relative z-30"
                  />
                  
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                </div>
              </motion.div>
            </HoverBorderGradient>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/download"
                className="group relative overflow-hidden rounded-xl w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white rounded-xl" />
                <div className="absolute inset-[1px] bg-black rounded-[11px] transition-colors group-hover:bg-black/95" />
                <div className="relative px-6 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors">
                    Download Now
                  </span>
                  <Download className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform" />
                </div>
              </Link>

              <Link
                to="/tutorial"
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-black rounded-[11px]" />
                <div className="relative px-8 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium">
                  <span className="text-white/90 group-hover:text-white transition-colors">
                    Help & Tutorial
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full px-4 py-12 sm:py-16"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-50 blur-3xl -z-10" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <FAQAccordion 
                  key={index} 
                  item={item} 
                  index={index}
                  isOpen={openFAQIndex === index}
                  onToggle={() => handleFAQToggle(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}