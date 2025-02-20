import { ExternalLink, Download, ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DownloadStep1() {
  const navigate = useNavigate();
  const [bypassAttempted, setBypassAttempted] = useState(false);
  const rickrollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const downloadFolder = 'https://drive.google.com/drive/folders/your-folder-id';

  useEffect(() => {
    const bypassCheck = () => {
      if (!bypassAttempted) {
        setBypassAttempted(true);
        window.location.href = rickrollUrl;
      }
    };

    const checkBypass = () => {
      if (document.hidden || !document.hasFocus()) {
        bypassCheck();
      }
    };

    document.addEventListener('visibilitychange', checkBypass);
    window.addEventListener('blur', checkBypass);
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'c') ||
        (e.ctrlKey && e.key === 'v')
      ) {
        e.preventDefault();
        bypassCheck();
      }
    });

    const handleDownload = async () => {
      try {
        const response = await fetch(downloadFolder);
        if (response.ok) {
          window.location.href = '/';
        }
      } catch (error) {
        console.error('Download error:', error);
      }
    };

    return () => {
      document.removeEventListener('visibilitychange', checkBypass);
      window.removeEventListener('blur', checkBypass);
    };
  }, [bypassAttempted, navigate]);

  const downloadOptions = [
    {
      title: 'Linkvertise',
      image: 'https://www.stepstone.de/upload_de/logo/E/logoLinkvertise-Inh-Marc-Winter-255864DE-2101131647.gif',
      description: 'Quick and easy download through Linkvertise',
      url: 'https://direct-link.net/1210123/xeno-v114',
      features: ['Fast Download', 'Secure Link', 'Easy Process']
    },
    {
      title: 'Lootlabs',
      image: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/65786726ba1241d21ae5bdd3/0x0.png',
      description: 'Alternative download through Lootlabs',
      url: 'https://loot-link.com/s?nFz9CwEd',
      features: ['Alternative Method', 'Reliable Service', 'Quick Access']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white pt-20">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose Your Download Method
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Select your preferred way to download Xeno
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {downloadOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
                <div className="relative p-8">
                  <div className="flex flex-col items-center space-y-6">
                    <motion.div 
                      className="relative w-32 h-32"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl animate-pulse-slow" />
                      <img
                        src={option.image}
                        alt={option.title}
                        className="relative w-full h-full object-contain rounded-xl"
                      />
                    </motion.div>

                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        {option.title}
                      </h3>
                      <p className="text-gray-400">{option.description}</p>

                      <div className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            variants={featureVariants}
                            className="flex items-center justify-center space-x-2 text-sm text-gray-400"
                          >
                            <ArrowRight className="w-4 h-4" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.a
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 mt-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        <span className="font-medium">Download Now</span>
                        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}