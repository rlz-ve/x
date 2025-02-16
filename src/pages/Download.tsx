import { useEffect, useState } from 'react';
import { Download as DownloadIcon, Sparkles, Zap, Users, Code, ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Users,
    title: 'Good Community',
    description: 'Join our growing community'
  },
  {
    icon: Code,
    title: 'Multi Attach',
    description: 'Attach to multiple Clients at once'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Run scripts with high speed'
  }
];

export default function DownloadPage() {
  const [version, setVersion] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [changelog, setChangelog] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const versionResponse = await fetch('https://raw.githubusercontent.com/rlz-ve/x/refs/heads/main/xv');
        if (!versionResponse.ok) throw new Error('Failed to fetch version');
        const displayVersion = await versionResponse.text();
        setVersion(displayVersion.trim());

        const changelogResponse = await fetch('https://raw.githubusercontent.com/rlz-ve/x/refs/heads/main/cl');
        if (!changelogResponse.ok) throw new Error('Failed to fetch changelog');
        const changelogText = await changelogResponse.text();
        setChangelog(changelogText.split('\n').filter(line => line.trim()));

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch information');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white pt-24">
      {/* blur background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20" />
      </div>

      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
            Download Xeno
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the next generation of scripting
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow" />
          <div className="relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
            <div className="relative p-8 sm:p-10">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Download Section */}
                <div className="lg:col-span-2">
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-6 mb-10"
                    variants={itemVariants}
                  >
                    <div className="relative group animate-float">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                        src="https://i.ibb.co/k0Y4yB1/xeno.png"
                        alt="Xeno"
                        className="relative w-20 h-20 rounded-full transform transition-transform duration-500 unselectable shimmer"
                      />
                    </div>
                    {!loading && !error && (
                      <div className="text-center sm:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">
                          Xeno {version}
                        </h2>
                        <div className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                          <Sparkles className="w-4 h-4" />
                          <span>Latest Release</span>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
                  >
                    {features.map(({ icon: Icon, title, description }, index) => (
                      <motion.div
                        key={title}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20">
                          <div className="flex flex-col gap-4">
                            <motion.div 
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                              <Icon className="relative w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="font-medium text-lg mb-1">{title}</h3>
                              <p className="text-sm text-gray-400">{description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      to="/download/step1"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-[1px] bg-black rounded-[11px] transition-colors" />
                      <div className="relative flex items-center gap-3">
                        <DownloadIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform text-white" />
                        <span className="font-medium text-white group-hover:text-gray-200 transition-colors">
                          Download Now
                        </span>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-white" />
                      </div>
                    </Link>
                  </motion.div>
                </div>

                {/* Changelog Section */}
                <motion.div
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl" />
                  <div className="relative bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Latest Updates</span>
                    </h3>
                    
                    {loading ? (
                      <div className="space-y-3">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="animate-pulse">
                            <div className="h-4 bg-white/10 rounded w-3/4" />
                          </div>
                        ))}
                      </div>
                    ) : error ? (
                      <p className="text-red-400">Failed to load changelog</p>
                    ) : (
                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                        {changelog.map((log, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20">
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-white to-gray-500 group-hover:h-full transition-all duration-300 rounded-r-full" />
                              <p className="pl-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{log}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}