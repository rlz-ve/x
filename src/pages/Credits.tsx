import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import { ExternalLink, Gift, Award, Coins } from 'lucide-react';

interface Contributor {
  name: string;
  role: string;
  link: string;
  avatar: string;
}

interface Donator {
  name: string;
  amount: string;
  platform: string;
}

interface RobuxDonator {
  name: string;
  amount: number;
}

export default function Credits() {
  const contributors: Contributor[] = [
    {
      name: 'Rizve',
      role: 'Owner of Xeno',
      link: 'https://github.com/Riz-ve',
      avatar: 'https://cdn.discordapp.com/avatars/924133673538830356/a_79874a41806eef4e1f7c0bdc162b97ab.gif?size=4096&format=webp'
    },
    {
      name: 'Nano',
      role: 'Discord Server Manager',
      link: 'https://discord.com/users/808779817977249832',
      avatar: 'https://cdn.discordapp.com/avatars/808779817977249832/a_ed4860a8413b7a57a4810a12e6129133.gif?size=1024&format=webp'
    },
    {
      name: 'Voxlis',
      role: 'Domain Contributor',
      link: 'https://voxlis.net',
      avatar: 'https://cdn.discordapp.com/avatars/1270744029168009258/22b4705d052d2a1e9bedb33bd6e70002.png?size=1024&format=webp'
    },
    {
      name: 'Mxx_xx3',
      role: 'Website Designer',
      link: 'https://www.youtube.com/@Script-Nova',
      avatar: 'https://cdn.discordapp.com/avatars/1239176576382271499/d310b5fb2999be315bfaf560ec517557.webp?size=1024&format=webp'
    },
    {
      name: 'Http2',
      role: 'Xeno Contributor',
      link: 'https://getluna.win',
      avatar: 'https://cdn.discordapp.com/avatars/1247924410510348340/ba11fee51e49d209fa41b236e5fe99c7.png?size=1024&format=webp'
    },
    {
      name: 'Quivings',
      role: 'Xeno Contributor',
      link: 'https://getsolara.dev',
      avatar: 'https://cdn.discordapp.com/avatars/1325378791308001280/5dbd57352cc47b27f5fd2e7d3cb61d0a.png?size=1024&format=webp'
    }
  ];

  const topDonators: Donator[] = [
    { name: '@xnegati', amount: '$200', platform: 'PayPal' },
    { name: '@doggysecretfree', amount: '$100', platform: 'Patreon' },
    { name: '@ajamu._.', amount: '$59.47', platform: 'PayPal' },
    { name: '@orangeado_', amount: '$50', platform: 'Cash App' },
    { name: '@larrrys.', amount: '$30', platform: 'PayPal' },
    { name: '@upio', amount: '$21', platform: 'Crypto' }
  ];

  const robuxDonators: RobuxDonator[] = [
    { name: '@ww00719', amount: 21000 },
    { name: '@doggysecretfree', amount: 8050 },
    { name: '@upio', amount: 4270 },
    { name: '@pand6a', amount: 3500 },
    { name: '@vunxa', amount: 1400 },
    { name: '@ryk_cbaool2025', amount: 1400 },
    { name: '@dostanhalat', amount: 1400 }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white pt-20">
      <AnimatedBackground />
      
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
            Credits
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Thank you to everyone who has contributed to making Xeno possible
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Contributors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow" />
            <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
              <div className="relative p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur animate-pulse" />
                    <Award className="w-6 h-6 relative" />
                  </div>
                  <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    Contributors
                  </span>
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Avatar</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Role</th>
                        <th className="text-right py-3 px-4 text-gray-400 font-medium">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contributors.map((contributor, index) => (
                        <motion.tr
                          key={contributor.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500"
                        >
                          <td className="py-3 px-4">
                            <div className="relative group/avatar">
                              <div className="absolute -inset-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full blur opacity-0 group-hover/avatar:opacity-100 transition-all duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse-slow opacity-0 group-hover/avatar:opacity-100" />
                              <img
                                src={contributor.avatar}
                                alt={contributor.name}
                                className="w-10 h-10 rounded-full object-cover relative transform group-hover/avatar:scale-105 transition-all duration-500 ring-2 ring-white/10 group-hover/avatar:ring-white/30"
                              />
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{contributor.name}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{contributor.role}</span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <a
                              href={contributor.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link relative"
                            >
                              <span className="relative">
                                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500" />
                                Visit
                              </span>
                              <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Donators */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Top Donators */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow" />
              <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
                <div className="relative p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur animate-pulse" />
                      <Gift className="w-6 h-6 relative" />
                    </div>
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                      Top Donators
                    </span>
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Username</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium">Amount</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium">Platform</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topDonators.map((donator, index) => (
                          <motion.tr
                            key={donator.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500"
                          >
                            <td className="py-3 px-4">
                              <span className="text-gray-300 group-hover:text-white transition-colors">{donator.name}</span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <span className="font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">{donator.amount}</span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{donator.platform}</span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Robux Donators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow" />
              <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
                <div className="relative p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur animate-pulse" />
                      <Coins className="w-6 h-6 relative" />
                    </div>
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                      Robux Donators
                    </span>
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Username</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {robuxDonators.map((donator, index) => (
                          <motion.tr
                            key={donator.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500"
                          >
                            <td className="py-3 px-4">
                              <span className="text-gray-300 group-hover:text-white transition-colors">{donator.name}</span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <span className="font-mono text-yellow-400 group-hover:text-yellow-300 transition-colors">
                                {donator.amount.toLocaleString()} Robux
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
