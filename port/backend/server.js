import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { profile, projects, connections } from './data/profile.js';

const app = express();
const PORT = process.env.PORT || 5001;
const origins = (process.env.CORS_ORIGIN || 'http://localhost:5175')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.disable('x-powered-by');
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(compression());
app.use(cors({ origin: origins.includes('*') ? true : origins }));

app.get('/', (_req, res) => res.json({ status: 'ok', service: 'port-backend' }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/profile', (_req, res) => res.json(profile));
app.get('/api/projects', (_req, res) => res.json(projects));
app.get('/api/connections', (_req, res) => res.json(connections));

app.use((_req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
