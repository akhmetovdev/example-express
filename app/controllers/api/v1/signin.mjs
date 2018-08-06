import Express from 'express';
import jwt from 'jsonwebtoken';
import v8n from 'v8n';
import BadRequest from '../../../errors/BadRequest';

const router = Express.Router({});

router.post('/', (req, res) => {
  try {
    const { email, password } = req.body;

    v8n()
      .string()
      .not.null()
      .equal(process.env.EMAIL)
      .check(email);

    v8n()
      .string()
      .not.null()
      .minLength(8)
      .maxLength(16)
      .equal(process.env.PASSWORD)
      .check(password);

    const token = jwt.sign({ email }, process.env.SECRET);

    res.json({ email, token });
  } catch (err) {
    throw new BadRequest();
  }
});

export default app => {
  app.use('/api/v1/signin', router);
};
