import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../utils/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = getPosts(2); // argument will change
  res.status(200).json(post);
}
