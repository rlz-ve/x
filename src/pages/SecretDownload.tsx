import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SecretDownload() {
  const { folderId } = useParams();
  const navigate = useNavigate();
  const [isValidBrowser, setIsValidBrowser] = useState(false);
  const [bypassAttempted, setBypassAttempted] = useState(false);
  const rickrollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  useEffect(() => {
    const checkBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isChrome = userAgent.includes('chrome');
      const isFirefox = userAgent.includes('firefox');
      const isEdge = userAgent.includes('edg');
      const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');
      
      return isChrome || isFirefox || isEdge || isSafari;
    };

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

    if (!checkBrowser()) {
      window.location.href = rickrollUrl;
      return;
    }

    setIsValidBrowser(true);

    const handleKeyDown = (e: KeyboardEvent) => {
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
    };

    document.addEventListener('visibilitychange', checkBypass);
    window.addEventListener('blur', checkBypass);
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', handleKeyDown);

    const validFolders: Record<string, string> = {
      '24242412418545': 'https://mega.nz/file/VspS2SqK#hiDt91bxC_6o8bZHFLM7A5w_h061Jb9GStJpLhuWM-s',
    };

    if (folderId && validFolders[folderId]) {
      const downloadFile = async () => {
        try {
          const link = document.createElement('a');
          link.href = validFolders[folderId];
          link.click();
          setTimeout(() => {
            navigate('/');
          }, 1000);
        } catch (error) {
          console.error('Download error:', error);
          navigate('/');
        }
      };
      
      downloadFile();
    } else {
      navigate('/');
    }

    return () => {
      document.removeEventListener('visibilitychange', checkBypass);
      window.removeEventListener('blur', checkBypass);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [folderId, navigate, bypassAttempted]);

  if (!isValidBrowser) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white text-center"
      >
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-lg">Preparing your download...</p>
      </motion.div>
    </div>
  );
}