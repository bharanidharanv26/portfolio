import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DomeGallery from '../components/DomeGallery.jsx';
import SkillIcon from '../components/SkillIcon.jsx';
import Status from '../components/Status.jsx';
import { useApi } from '../api.js';
import { memories } from '../data/memories.js';
import './About.css';

const AboutSkills = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <section className="about__section about__skills" aria-labelledby="about-skills" data-about-reveal>
      <h2 id="about-skills">My <em>diverse</em> set of skills</h2>
      <ul className="about__skills-list" role="list">
        {skills.map(skill => (
          <li key={skill} className="about__skill">
            <SkillIcon name={skill} className="about__skill-icon" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const AboutSection = ({ section }) => {
  const sentences = section.sentences || [];
  const [sentenceIndex, setSentenceIndex] = useState(() => (
    sentences.length ? Math.floor(Math.random() * sentences.length) : 0
  ));

  const showAnotherSentence = () => {
    if (sentences.length < 2) return;
    // A nonzero offset selects any other sentence without an immediate repeat.
    const offset = 1 + Math.floor(Math.random() * (sentences.length - 1));
    setSentenceIndex(current => (current + offset) % sentences.length);
  };

  return (
    <section
      className="about__section"
      aria-labelledby={`about-${section.id}`}
      data-about-reveal
    >
      <div className="about__section-heading">
        <h2 id={`about-${section.id}`}>{section.title}</h2>
        {sentences.length > 1 && (
          <button
            type="button"
            className="about__refresh"
            onClick={showAnotherSentence}
            aria-label="Show another sentence"
            aria-controls={`about-${section.id}-sentence`}
            title="Show another sentence"
          >
            <svg key={sentenceIndex} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 7v5h-5" />
              <path d="M20 12a8 8 0 1 0-2.34 5.66" />
            </svg>
          </button>
        )}
      </div>
      {sentences.length ? (
        <div
          id={`about-${section.id}-sentence`}
          className="about__sentence"
          aria-live="polite"
          aria-atomic="true"
        >
          <p key={sentenceIndex} className="about__sentence-text">{sentences[sentenceIndex]}</p>
        </div>
      ) : (
        <p>{section.body}</p>
      )}
    </section>
  );
};

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
            fetchpriority="high"
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
                <Fragment key={section.id}>
                  <AboutSection section={section} />
                  {section.id === 'coding' && <AboutSkills skills={data.skills} />}
                </Fragment>
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
