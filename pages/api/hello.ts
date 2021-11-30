// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import svgCaptcha from 'svg-captcha';
import { Colors } from '../../components/styled';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  var captcha = svgCaptcha.create({
    size: 6,
    noise: 3,
    background: Colors.Papaya
  });
  res.status(200);
  res.json({ data: captcha.data });
}
