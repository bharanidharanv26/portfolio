import DomeGallery from '../components/DomeGallery.jsx';
import Status from '../components/Status.jsx';
import { useApi } from '../api.js';
import { memories } from '../data/memories.js';

const Home = () => {
  const { data, loading, error, retry } = useApi('/api/profile');

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
          <DomeGallery
            images={memories}
            fit={0.75}
            minRadius={350}
            autoRotateSpeed={10}
            segments={32}
            dragSensitivity={20}
            dragDampening={5}
            grayscale
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
