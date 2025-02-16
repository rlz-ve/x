import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Donate from './pages/Donate';
import Download from './pages/Download';
import DownloadStep1 from './pages/DownloadStep1';
import SecretDownload from './pages/SecretDownload';
import Credits from './pages/Credits';
import Error404 from './pages/Error404';

function AppContent() {
  const location = useLocation();
  const showNavAndFooter = !location.pathname.includes('94195512955915412414');

  return (
    <div className="min-h-screen bg-black">
      {showNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/download" element={<Download />} />
        <Route path="/download/step1" element={<DownloadStep1 />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/94195512955915412414/:folderId" element={<SecretDownload />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {showNavAndFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}