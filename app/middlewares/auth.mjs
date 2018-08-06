import jwt from 'jsonwebtoken';
import Unauthorized from '../errors/Unauthorized';

export default (req, res, next) => {
  const auth = req.header('Authorization');
  const token = auth && auth.split(' ')[1];

  try {
    jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    throw new Unauthorized();
  }
};
