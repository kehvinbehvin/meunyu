import type { NextApiRequest } from 'next';

import { jwtAuthentication } from '../auth/Authentication';

export const checkUser = async (
  req: NextApiRequest & { user: User },
  event: any,
  next: any
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new Error('No valid token provided in headers');
  const user = jwtAuthentication.decodeToken(token) as User;
  req.user = user;
  await next(); // call next in chain
};
