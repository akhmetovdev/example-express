import dotenv from 'dotenv';
import http from 'http';
import app from './app';
import NotFound from './errors/NotFound';
import middlewares from './middlewares/middlewares';
import controllers from './controllers/controllers';
import error from './middlewares/error';

dotenv.config();

const bootstrap = async () => {
  await middlewares(app);
  await controllers(app);

  app.use((req, res) => {
    throw new NotFound();
  });

  app.use(error);

  http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Express server is listening at ${process.env.PORT} port...`);
  });
};

bootstrap().catch(console.error);
