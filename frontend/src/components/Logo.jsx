import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="logo" aria-label="BD — home">
    <svg viewBox="0 0 64 64" width="44" height="44" role="img" aria-hidden="true">
      <rect x="1.5" y="1.5" width="61" height="61" rx="17" fill="rgba(10,11,22,.7)" stroke="currentColor" strokeOpacity=".5" strokeWidth="2" />
      <text x="32" y="43" textAnchor="middle" fontFamily="Syne, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="27" letterSpacing="-2" fill="currentColor">
        BD
      </text>
    </svg>
  </Link>
);

export default Logo;
