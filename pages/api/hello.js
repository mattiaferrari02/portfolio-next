// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as dotenv from "dotenv";

dotenv.config();


export default (req, res) => {
  res.statusCode = 200
  res.json({ name: process.env.MAIL })
}
