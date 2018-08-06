import Express from 'express';
import auth from '../../../middlewares/auth';

const router = Express.Router({});

router.get('/', auth, (req, res) => {
  res.json({
    status: 200,
    message: 'Congratulations!'
  });
});

export default app => {
  app.use('/api/v1/secure', router);
};
