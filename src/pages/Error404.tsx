import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Error404 = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      <div className="relative z-10 text-center space-y-8">
        <div className="relative overflow-hidden">
          <div className="text-8xl font-black tracking-tighter animate-fade-in">
            <span className="bg-gradient-to-b from-white via-gray-200 to-transparent bg-clip-text text-transparent">
              404
            </span>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <p className="text-gray-400 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium">Go back home</span>
        </a>
      </div>

      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>
    </div>
  );
};

export default Error404;