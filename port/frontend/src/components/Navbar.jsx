import { useLocation, useNavigate } from 'react-router-dom';
import Dock from './Dock.jsx';
import Logo from './Logo.jsx';
import './Navbar.css';

const Icon = ({ children, className }) => (
  <svg className={`dock-icon dock-icon--${className}`} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {children}
  </svg>
);

const icons = {
  home: (
    <Icon className="home">
      <path d="M3 15 16 3l13 12" />
      <path d="M6 13v15h7v-9h6v9h7V13" />
    </Icon>
  ),
  about: (
    <Icon className="about">
      <circle cx="16" cy="8" r="5" />
      <path d="M6 27c0-6 4.5-10 10-10s10 4 10 10c-5 3-15 3-20 0Z" />
    </Icon>
  ),
  projects: (
    <Icon className="projects">
      <path d="m9 8-7 8 7 8m14-16 7 8-7 8M20 4l-8 24" />
    </Icon>
  ),
  connections: (
    <Icon className="connections">
      <path d="M13 22H9l-5 5v-7a4 4 0 0 1-2-3V7a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v3" />
      <path d="M15 10h11a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4v5l-5-5h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Z" />
    </Icon>
  )
};

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const items = [
    { label: 'Home', icon: icons.home, className: 'dock-item--home', active: pathname === '/', onClick: () => navigate('/') },
    { label: 'About', icon: icons.about, className: 'dock-item--about', active: pathname === '/about', onClick: () => navigate('/about') },
    { label: 'Projects', icon: icons.projects, className: 'dock-item--projects', active: pathname === '/projects', onClick: () => navigate('/projects') },
    { label: 'Connections', icon: icons.connections, className: 'dock-item--connections', active: pathname === '/connections', onClick: () => navigate('/connections') }
  ];

  return (
    <header className={`nav${pathname !== '/' ? ' nav--branded' : ''}`}>
      {pathname !== '/' && <Logo />}
      <Dock
        className="site-dock"
        items={items}
        baseItemSize={50}
        magnification={50}
        panelHeight={70}
        accentColor="#00aab3"
        position="bottom"
        gap={12}
        roundness={0.4}
        bounce={false}
        tiles
        showLabels
        showIndicators={false}
        showBadges={false}
      />
    </header>
  );
};

export default Navbar;
