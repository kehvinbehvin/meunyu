// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

const healthCheck = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ status: 'Ok' });
};

export default healthCheck;
