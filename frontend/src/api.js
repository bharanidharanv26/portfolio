import { useEffect, useState } from 'react';

const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export const useApi = path => {
  const [state, setState] = useState({ data: null, error: false, loading: true });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let cancelled = false;
    setState(s => ({ ...s, loading: true, error: false }));
    fetch(`${BASE}${path}`)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then(data => !cancelled && setState({ data, error: false, loading: false }))
      .catch(() => !cancelled && setState({ data: null, error: true, loading: false }));
    return () => {
      cancelled = true;
    };
  }, [path, attempt]);
  return { ...state, retry: () => setAttempt(n => n + 1) };
};
