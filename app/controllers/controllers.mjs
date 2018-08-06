import signin from './api/v1/signin';
import secure from './api/v1/secure';

export default async app => {
  signin(app);
  secure(app);
};
