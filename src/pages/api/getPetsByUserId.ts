import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import type { Pet } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Pet | null>
): Promise<any> => {
  const { userId } = req.query;
  console.log("-------------------");

  //   try {
  //     const pet: Pet | null = await prisma.pet.findMany({
  //       where: { userId },
  //     });
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(400).json(null);
  //   }
};

export default handler;
