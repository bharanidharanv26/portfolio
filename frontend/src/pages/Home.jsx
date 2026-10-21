import { lazy, Suspense } from 'react';
import Status from '../components/Status.jsx';
import { useApi } from '../api.js';
import './Home.css';

const Lanyard = lazy(() => import('../components/Lanyard.jsx'));
const PORTRAIT = '/images/memories/Bharanidharan%20coat.png';

const Home = () => {
  const { data, loading, error, retry } = useApi('/api/profile');

  return (
    <main className="page page--home">
      <section className="hero">
        <figure className="hero__portrait">
          <div className="hero__lanyard">
            <Suspense fallback={
              <div className="hero__photo-loading">
                <img src={PORTRAIT} alt="Portrait of Bharanidharan V" />
              </div>
            }>
              <Lanyard
                frontImage={PORTRAIT}
                backImage={PORTRAIT}
                alt={`Portrait of ${data?.name || 'Bharanidharan V'}`}
                strapColor="#343b60"
                strapWidth={0.8}
                strapLength={0.4}
                size={0.58}
                damping={0.65}
                breeze={0.15}
              />
            </Suspense>
          </div>
          <figcaption className="hero__portrait-hint">Drag to swing · Click to flip</figcaption>
        </figure>
        <div className="hero__copy">
          {data ? (
            <>
              <h1 className="hero__name">{data.name}</h1>
              <p className="hero__title">{data.title}</p>
              <p className="hero__tagline">{data.tagline}</p>
            </>
          ) : (
            <Status loading={loading} error={error} retry={retry} />
          )}
        </div>
      </section>

      {data && (
        <div className="marquee" aria-label="Skills">
          <div className="marquee__track">
            {[0, 1].map(copy => (
              <ul key={copy} aria-hidden={copy === 1}>
                {data.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
