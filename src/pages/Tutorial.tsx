import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, HelpCircle, Play } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Tutorial() {
  const videoId = 'NhaR47EeJOY';
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  
  const issues = [
    {
      title: 'Xeno not opening',
      description: 'You do not have the required dependencies downloaded. Download Microsoft Visual C++ Redistributable and .NET Runtime 8.0.0',
      links: [
        {
          text: 'Microsoft Visual C++ Redistributable',
          url: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170'
        },
        {
          text: '.NET Runtime 8.0.0',
          url: 'https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.100-windows-x64-installer'
        }
      ]
    },
    {
      title: 'Script not executing',
      description: 'There was an interference attaching to Roblox and restarting Xeno would resume everything'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white pt-24">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
            Help & Tutorial
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn how to use Xeno and troubleshoot common issues
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
              <div className="relative p-6">
                <div className="aspect-video w-full rounded-lg overflow-hidden relative">
                  {!isPlaying ? (
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={thumbnailUrl}
                        alt="Tutorial thumbnail"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/play:bg-black/30 transition-colors" />
                      <motion.div
                        className="relative bg-white/90 rounded-full p-4 transform group-hover/play:scale-110 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 text-black" />
                      </motion.div>
                    </motion.button>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title="Xeno Tutorial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Issues Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-white/80" />
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Common Issues
              </span>
            </h2>
            
            {issues.map((issue, index) => (
              <motion.div
                key={issue.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
                  <div className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-white/10 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                          {issue.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {issue.description}
                        </p>
                        {issue.links && (
                          <div className="space-y-3">
                            {issue.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                              >
                                <span className="transform group-hover/link:translate-x-1 transition-transform">
                                  →
                                </span>
                                <span className="border-b border-white/0 group-hover/link:border-white/100 transition-colors">
                                  {link.text}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
