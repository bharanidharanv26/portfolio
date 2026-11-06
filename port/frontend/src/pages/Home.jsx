import { lazy, Suspense, useEffect, useState } from 'react';
import Status from '../components/Status.jsx';
import TechStackLoop from '../components/TechStackLoop.jsx';
import ParticleName from '../components/ParticleName.jsx';
import { useApi } from '../api.js';
import './Home.css';

const Lanyard = lazy(() => import('../components/Lanyard.jsx'));
const PORTRAIT = '/images/memories/Bharanidharan%20coat.png';

const Home = () => {
  const { data, loading, error, retry } = useApi('/api/profile');
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 900px)').matches);
  const name = data?.name || 'Bharanidharan V';
  const nameLines = name.replace('Bharanidharan', 'Bharani\ndharan').split('\n');

  useEffect(() => {
    const query = window.matchMedia('(max-width: 900px)');
    const update = () => setCompact(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <main className="page page--home">
      <section className="hero">
        <div className="hero__copy">
          {data ? (
            <h1 className="hero__name" aria-label={name}>
              <ParticleName text={nameLines.join('\n')} />
            </h1>
          ) : (
            <Status loading={loading} error={error} retry={retry} />
          )}
        </div>
        {data && <TechStackLoop skills={data.featuredSkills || data.skills} />}
      </section>

      <Suspense fallback={null}>
        <Lanyard
          className="lanyard--overlay"
          frontImage={PORTRAIT}
          backImage={PORTRAIT}
          alt={`Portrait of ${data?.name || 'Bharanidharan V'}`}
          cardColor="#0c0c10"
          strapColor="#0a0a0e"
          strapWidth={0.8}
          strapLength={0.42}
          size={0.5}
          anchor={compact ? 0.5 : 0.2}
          free
          damping={0.65}
          breeze={0.18}
        />
      </Suspense>
    </main>
  );
};

export default Home;
