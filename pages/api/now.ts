import type { NextApiRequest, NextApiResponse } from "next";
import { timeSnapshot } from "utils";

// prettier-ignore
export default function handler(_: NextApiRequest, res: NextApiResponse<{ now: INow }>) {

  res.status(200).json({ now: timeSnapshot() });
}
