import Status from '../components/Status.jsx';
import { useApi } from '../api.js';

const Row = ({ c }) => {
  const external = c.href && /^https?:/.test(c.href);
  const inner = (
    <>
      <span className="conn__label">{c.label}</span>
      <span className="conn__value">{c.value}</span>
    </>
  );
  if (c.id === 'resume')
    return (
      <li className="conn conn--static">
        <span className="conn__label">{c.label}</span>
        <span className="conn__value conn__actions">
          <a href={c.href} target="_blank" rel="noreferrer">
            View
          </a>
          <a href={c.href} download="Bharanidharan-Resume.pdf">
            Download
          </a>
        </span>
      </li>
    );
  if (!c.href) return <li className="conn conn--static conn--muted">{inner}</li>;
  return (
    <li>
      <a className="conn" href={c.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {inner}
      </a>
    </li>
  );
};

const Connections = () => {
  const { data, loading, error, retry } = useApi('/api/connections');
  return (
    <main className="page page--narrow">
      <h1 className="page-title">Connections</h1>
      <Status loading={loading} error={error} retry={retry} />
      <ul className="conns">{data?.map(c => <Row key={c.id} c={c} />)}</ul>
    </main>
  );
};

export default Connections;
