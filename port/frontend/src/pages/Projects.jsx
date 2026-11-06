import Status from '../components/Status.jsx';
import { useApi } from '../api.js';

const Projects = () => {
  const { data, loading, error, retry } = useApi('/api/projects');
  return (
    <main className="page">
      <h1 className="page-title">Projects</h1>
      <Status loading={loading} error={error} retry={retry} />
      <div className="projects">
        {data?.map(p => (
          <article key={p.id} className="project">
            <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
            <div className="project__body">
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <ul className="chips">
                {p.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Projects;
