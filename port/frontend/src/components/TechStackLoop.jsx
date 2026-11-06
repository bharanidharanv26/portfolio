import './TechStackLoop.css';

const MarkDiamonds = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 9 15 12 12 15 9 12Z" />
    <path d="M12 3.2 13.4 6.6 12 8 10.6 6.6Z" />
    <path d="M12 16 13.4 17.4 12 20.8 10.6 17.4Z" />
    <path d="M3.2 12 6.6 10.6 8 12 6.6 13.4Z" />
    <path d="M16 12 17.4 10.6 20.8 12 17.4 13.4Z" />
  </svg>
);

const TechStackLoop = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <section className="tech-loop" aria-label="Skills">
      <div className="tech-loop__cylinder" tabIndex={0} role="group" aria-label="Scrolling skills; focus to pause">
        <div className="tech-loop__track">
          {[0, 1].map(copy => (
            <ul key={copy} className="tech-loop__group" aria-hidden={copy === 1 ? true : undefined}>
              {skills.map(skill => (
                <li key={skill} className="tech-loop__item">
                  <span className="tech-loop__mark"><MarkDiamonds /></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackLoop;
