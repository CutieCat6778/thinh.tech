import { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "../../utils/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;

  const post = getPost(id as string); // argument will change

  res.status(200).json(post);
}
