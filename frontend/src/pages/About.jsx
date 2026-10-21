import { Link } from 'react-router-dom';
import Status from '../components/Status.jsx';
import Lanyard from '../components/Lanyard.jsx';
import { useApi } from '../api.js';

const About = () => {
  const { data, loading, error, retry } = useApi('/api/profile');
  const about = data?.about;
  return (
    <main className="page page--about">
      <div className="about">
        <figure className="about__portrait">
          <div className="about__lanyard">
            <Lanyard
              frontImage="/images/about.jpg"
              backImage="/images/about.jpg"
              alt={`Portrait of ${data?.name || 'Bharanidharan V'}`}
              strapColor="#504365"
              strapWidth={0.8}
              strapLength={0.4}
              size={0.58}
              damping={0.65}
              breeze={0.15}
            />
          </div>
          <figcaption className="about__caption">
            <p className="about__hint">Drag to swing · Click to flip</p>
            <div className="about__profile">
              <div className="about__identity">
                <span className="about__handle">@bharanidharan</span>
                <span className="about__availability">Available</span>
              </div>
              <Link className="about__connect" to="/connections">Connect</Link>
            </div>
          </figcaption>
        </figure>
        <div className="about__text">
          <h1 className="page-title">About</h1>
          {about ? (
            <>
              <p className="about__intro">{about.intro}</p>
              <dl className="facts">
                <div>
                  <dt>Education</dt>
                  <dd>{about.education}</dd>
                </div>
                <div>
                  <dt>Interests</dt>
                  <dd>{about.interests.join(', ')}</dd>
                </div>
                <div>
                  <dt>What I enjoy</dt>
                  <dd>{about.enjoy}</dd>
                </div>
              </dl>
            </>
          ) : (
            <Status loading={loading} error={error} retry={retry} />
          )}
        </div>
      </div>
    </main>
  );
};

export default About;
