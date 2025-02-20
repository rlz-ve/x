import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(45deg, transparent 95%, rgba(255,255,255,0.3) 95%), linear-gradient(-45deg, transparent 95%, rgba(255,255,255,0.3) 95%)",
              backgroundSize: "60px 60px"
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: ["0%", "100%"],
                x: i % 2 === 0 ? ["-10%", "10%"] : ["10%", "-10%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
    </>
  );
};

export default AnimatedBackground;
