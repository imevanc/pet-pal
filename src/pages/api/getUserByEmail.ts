import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import type { User } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<User | null>
): Promise<any> => {
  const { email } = req.body;
  try {
    const user: User | null = await prisma.user.findUnique({
      where: { email: email },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(null);
  }
};

export default handler;
