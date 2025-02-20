import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  isActive: boolean;
  onPlay: () => void;
  thumbnail: string;
}

export default function VideoPlayer({ videoId, title, isActive, onPlay, thumbnail }: VideoPlayerProps) {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      {isActive ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-lg"
        />
      ) : (
        <button
          onClick={onPlay}
          className="relative w-full aspect-video group cursor-pointer"
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}