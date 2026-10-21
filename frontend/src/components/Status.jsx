const Status = ({ loading, error, retry }) => {
  if (loading) return <p className="status">Loading…</p>;
  if (error)
    return (
      <p className="status">
        Could not reach the server. Check that the backend is running, then{' '}
        <button className="linkish" onClick={retry}>
          try again
        </button>
        .
      </p>
    );
  return null;
};

export default Status;
