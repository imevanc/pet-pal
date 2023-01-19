import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import type { User } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<User | null>
): Promise<any> => {
  const { email } = req.query;
  const transformedEmail: string | undefined = email?.slice(1, -1).toString();

  try {
    const user: User | null = await prisma.user.findUnique({
      where: { email: transformedEmail },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(null);
  }
};

export default handler;
