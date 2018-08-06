import cors from './cors';
import body from './body';
import logger from './logger';

export default async app => {
  app.use(cors());
  app.use(body());
  app.use(logger(process.env.NODE_ENV !== 'production' ? 'dev' : 'tiny'));
};
