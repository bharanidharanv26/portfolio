import { useLocation, useNavigate } from 'react-router-dom';
import Dock from './Dock.jsx';
import Logo from './Logo.jsx';

const Icon = ({ children }) => (
  <svg className="dock-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {children}
  </svg>
);

const icons = {
  home: <Icon><path d="m3.5 10.7 8.5-7 8.5 7" /><path d="M5.5 9.5v10h13v-10M9.5 19.5v-5h5v5" /></Icon>,
  about: <Icon><circle cx="12" cy="12" r="8.5" /><path d="M12 10.8v5M12 7.8h.01" /></Icon>,
  projects: <Icon><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></Icon>,
  connections: <Icon><circle cx="6.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="6.5" r="2.5" /><path d="m8.5 15.5 7-7M13 6.5h4.5V11" /></Icon>
};

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const items = [
    { label: 'Home', icon: icons.home, active: pathname === '/', onClick: () => navigate('/') },
    { label: 'About', icon: icons.about, active: pathname === '/about', onClick: () => navigate('/about') },
    { label: 'Projects', icon: icons.projects, active: pathname === '/projects', onClick: () => navigate('/projects') },
    { label: 'Connections', icon: icons.connections, active: pathname === '/connections', onClick: () => navigate('/connections') }
  ];

  return (
    <header className="nav">
      <Logo />
      <Dock
        items={items}
        baseItemSize={54}
        magnification={78}
        panelHeight={74}
        accentColor="#c49bff"
        position="bottom"
        distance={190}
        gap={9}
        roundness={0.55}
        bounce
        tiles
        showLabels
        showIndicators
        showBadges={false}
      />
    </header>
  );
};

export default Navbar;
