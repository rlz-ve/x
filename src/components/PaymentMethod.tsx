import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface PaymentMethodProps {
  title: string;
  desc: string;
  value: string;
}

export default function PaymentMethod({ title, desc, value }: PaymentMethodProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-4">{desc}</p>
        <button
          onClick={handleCopy}
          className="w-full font-mono text-sm bg-white/5 p-3 rounded-lg break-all group-hover:bg-white/10 transition-colors relative flex items-center justify-between"
        >
          <span>{value}</span>
          <span className="flex items-center gap-2 text-gray-400">
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}