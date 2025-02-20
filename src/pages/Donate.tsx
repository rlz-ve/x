import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

interface PaymentMethod {
  title: string;
  desc: string;
  value: string;
  icon: string;
}

export default function Donate() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const methods: PaymentMethod[] = [
    { 
      title: 'CashApp', 
      desc: 'Quick and easy payment', 
      value: '$RizveA',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/2048px-Square_Cash_app_logo.svg.png'
    },
    { 
      title: 'PayPal', 
      desc: 'Send as friends & family', 
      value: 'ARizve',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png'
    },
    { 
      title: 'Bitcoin', 
      desc: 'Cryptocurrency payment', 
      value: 'bc1qvlds5l57ehkjlnrpzzrqq9j9mecml6xq6ztqy3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
    },
    { 
      title: 'Ethereum', 
      desc: 'Cryptocurrency payment', 
      value: '0x2c8fbe2030941a4f5d3147Ed7F6D5eeC5187661a',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png'
    },
    { 
      title: 'Litecoin', 
      desc: 'Cryptocurrency payment', 
      value: 'LRXYK5s8ATvdCt2KkxH9w2patns4rxyoFp',
      icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png'
    }
  ];

  const handleCopy = async (value: string, title: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(title);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-full blur-xl animate-pulse-slow" />
            <h1 className="relative text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
              Support Xeno
            </h1>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your support helps me continue developing and improving Xeno
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-2xl max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-50" />
          <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-6 px-8 text-left text-sm font-medium text-gray-400">Method</th>
                    <th className="py-6 px-8 text-left text-sm font-medium text-gray-400">Description</th>
                    <th className="py-6 px-8 text-left text-sm font-medium text-gray-400">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((method, index) => (
                    <motion.tr
                      key={method.title}
                      variants={itemVariants}
                      className="group hover:bg-white/5 transition-all duration-300"
                    >
                      <td className="py-6 px-8">
                        <div className="flex items-center space-x-4">
                          <div className="relative w-14 h-14 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <img
                              src={method.icon}
                              alt={method.title}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="font-medium text-lg bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                              {method.title}
                            </span>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                              {method.desc}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <div className="relative overflow-hidden rounded-xl bg-white/5 px-4 py-2 group-hover:bg-white/10 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="relative text-gray-400 group-hover:text-gray-300 transition-colors">
                            {method.desc}
                          </span>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <motion.button
                          onClick={() => handleCopy(method.value, method.title)}
                          className="group/btn relative flex items-center justify-between w-full max-w-xs bg-white/5 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                          <span className="relative text-sm font-mono text-gray-300 truncate group-hover/btn:text-white transition-colors">
                            {method.value}
                          </span>
                          <AnimatePresence mode="wait">
                            {copiedId === method.title ? (
                              <motion.div
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="relative text-green-400"
                              >
                                <Check className="w-4 h-4" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="copy"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="relative text-gray-400 group-hover/btn:text-white transition-colors"
                              >
                                <Copy className="w-4 h-4" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}