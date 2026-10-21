import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DomeGallery from '../components/DomeGallery.jsx';
import Status from '../components/Status.jsx';
import { useApi } from '../api.js';
import { memories } from '../data/memories.js';
import './About.css';

const About = () => {
  const { data, loading, error, retry } = useApi('/api/profile');
  const about = data?.about;
  const pageRef = useRef(null);

  useEffect(() => {
    const elements = [...pageRef.current.querySelectorAll('[data-about-reveal]')];
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.revealState = 'visible';
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    // Only hide content below the viewport; the page stays readable without the observer.
    elements.forEach(element => {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.dataset.revealState = 'pending';
        observer.observe(element);
      }
    });

    const revealAll = () => {
      if (!motion.matches) return;
      observer.disconnect();
      elements.forEach(element => element.removeAttribute('data-reveal-state'));
    };
    motion.addEventListener('change', revealAll);

    return () => {
      observer.disconnect();
      motion.removeEventListener('change', revealAll);
      elements.forEach(element => element.removeAttribute('data-reveal-state'));
    };
  }, [about]);

  return (
    <main ref={pageRef} className="page page--about" aria-labelledby="about-title">
      <div className="about">
        <header className="about__heading">
          <h1 id="about-title" className="page-title about__title">About <span>Me</span></h1>
        </header>
        <figure className="about__portrait">
          <img
            className="about__photo"
            src="/images/memories/about%20photo.jpg"
            alt={`Portrait of ${data?.name || 'Bharanidharan V'}`}
            width="2000"
            height="1254"
            fetchPriority="high"
            decoding="async"
          />
        </figure>
        <div className="about__introduction">
          {about ? (
            <p className="about__intro">{about.intro}</p>
          ) : (
            <Status loading={loading} error={error} retry={retry} />
          )}
        </div>
        {about && (
          <>
            <div className="about__story">
              {about.sections.map(section => (
                <section
                  key={section.id}
                  className="about__section"
                  aria-labelledby={`about-${section.id}`}
                  data-about-reveal
                >
                  <h2 id={`about-${section.id}`}>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
            <section className="memories about__memories" aria-labelledby="about-memories" data-about-reveal>
              <h2 id="about-memories" className="section-title">Memories</h2>
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
            <footer className="about__outro" data-about-reveal>
              <p><strong>{about.closing}</strong></p>
              <Link className="about__connect" to="/connections">
                Connect
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 19 19 5M5 5h14v14" />
                </svg>
              </Link>
            </footer>
          </>
        )}
      </div>
    </main>
  );
};

export default About;
