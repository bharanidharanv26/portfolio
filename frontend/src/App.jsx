import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import FluxLines from './components/FluxLines.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Connections from './pages/Connections.jsx';

const SCENES = { '/': 'home', '/about': 'about', '/projects': 'projects', '/connections': 'connections' };

const App = () => {
  const { pathname } = useLocation();
  const scene = SCENES[pathname] || 'home';

  useEffect(() => {
    document.body.dataset.scene = scene;
    window.scrollTo(0, 0);
  }, [scene]);

  return (
    <>
      <FluxLines className="flux-lines--global" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
