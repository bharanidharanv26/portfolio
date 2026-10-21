import Status from '../components/Status.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import { useApi } from '../api.js';

const About = () => {
  const { data, loading, error, retry } = useApi('/api/profile');
  const about = data?.about;
  return (
    <main className="page page--about">
      <div className="about">
        <ProfileCard
          name={data?.name || 'Bharanidharan V'}
          title={data?.title || 'Developer & Student'}
          handle="bharanidharan"
          status="Available"
          contactText="Connect"
          avatarUrl="/images/about.jpg"
          iconUrl="/favicon.svg"
          holo={0.8}
          glare={0.55}
          tiltStrength={10}
          parallax={8}
          radius={18}
          enableTilt
          showUserInfo
          theme="dark"
          onContactClick={() => window.location.href = '/connections'}
        />
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
