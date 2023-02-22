import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import type { User } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<string>
): Promise<any> => {
  const { id, country } = req.body;
  console.log("sadfasdf", id, country);
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        country: country,
      }
    });
    console.log({ user });
    res.status(200).json("updated");
  } catch (error) {
    res.status(400).json("null");
  }
};

export default handler;
