import { useEffect, useState } from 'react';
import CircularCarousel from '../components/CircularCarousel.jsx';
import Status from '../components/Status.jsx';
import { memories } from '../data/memories.js';
import { useApi } from '../api.js';

const Home = () => {
  const { data, loading, error, retry } = useApi('/api/profile');
  const [cardWidth, setCardWidth] = useState(220);
  useEffect(() => {
    const set = () => setCardWidth(window.innerWidth < 600 ? 140 : window.innerWidth < 1000 ? 180 : 220);
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return (
    <main className="page">
      <section className="hero">
        {data ? (
          <>
            <h1 className="hero__name">{data.name}</h1>
            <p className="hero__title">{data.title}</p>
            <p className="hero__tagline">{data.tagline}</p>
          </>
        ) : (
          <Status loading={loading} error={error} retry={retry} />
        )}
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

      <section className="memories">
        <h2 className="section-title">Memories</h2>
        <div className="memories__stage">
          <CircularCarousel
            items={memories}
            preset="cylinder"
            intro="rise"
            cardWidth={cardWidth}
            aspectRatio={1}
            speed={14}
            captions={false}
            gap={25}
            tilt={-5}
            curve={1}
            perspective={2500}
            autoplay="drift"
            direction="left"
            momentum={0.6}
            snap
            pauseOnHover
            focusOnClick
            draggable
            parallax={0.3}
            stretch={0.5}
            fadeColor="#000000"
            depthFade={0.55}
            innerShade={0.6}
            cornerRadius={12}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
