import { useRef } from 'react';
import './ProfileCard.css';

const ProfileCard = ({
  name,
  title,
  handle,
  status,
  contactText = 'Contact',
  avatarUrl,
  iconUrl,
  holo = 0.8,
  glare = 0.5,
  tiltStrength = 12,
  parallax = 8,
  radius = 16,
  enableTilt = true,
  showUserInfo = true,
  theme = 'dark',
  onContactClick
}) => {
  const cardRef = useRef(null);

  const handlePointerMove = event => {
    if (!enableTilt || !cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    const rotateY = ((x - 50) / 50) * tiltStrength;
    const rotateX = ((50 - y) / 50) * tiltStrength;
    const shiftX = ((x - 50) / 50) * parallax;
    const shiftY = ((y - 50) / 50) * parallax;
    cardRef.current.style.setProperty('--pc-pointer-x', `${x}%`);
    cardRef.current.style.setProperty('--pc-pointer-y', `${y}%`);
    cardRef.current.style.setProperty('--pc-rotate-x', `${rotateX}deg`);
    cardRef.current.style.setProperty('--pc-rotate-y', `${rotateY}deg`);
    cardRef.current.style.setProperty('--pc-shift-x', `${shiftX}px`);
    cardRef.current.style.setProperty('--pc-shift-y', `${shiftY}px`);
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--pc-rotate-x', '0deg');
    cardRef.current.style.setProperty('--pc-rotate-y', '0deg');
    cardRef.current.style.setProperty('--pc-shift-x', '0px');
    cardRef.current.style.setProperty('--pc-shift-y', '0px');
  };

  return (
    <article
      ref={cardRef}
      className={`profile-card profile-card--${theme}`}
      style={{ '--pc-radius': `${radius}px`, '--pc-holo': holo, '--pc-glare': glare }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="profile-card__body">
        <div className="profile-card__tile">
          <img className="profile-card__photo" src={avatarUrl} alt="" draggable="false" />
          <div className="profile-card__holo" style={{ backgroundImage: `url(${iconUrl})` }} />
          <div className="profile-card__glare" />
          <div className="profile-card__rim" />
        </div>
        {showUserInfo && (
          <footer className="profile-card__footer">
            <img className="profile-card__avatar" src={avatarUrl} alt="" />
            <div className="profile-card__meta">
              <span className="profile-card__handle">@{handle}</span>
              <span className="profile-card__status">{status}</span>
            </div>
            <button type="button" className="profile-card__contact" onClick={onContactClick}>
              {contactText}
            </button>
          </footer>
        )}
      </div>
    </article>
  );
};

export default ProfileCard;
