import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import type { Pet } from "@prisma/client";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): Promise<any> => {
  const { petId } = req.query;

  try {
    const deletePet: Pet = await prisma.pet.delete({
      where: {
        id: petId?.toString(),
      },
    });
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(400).json({ message: "was not able to delete the pet" });
  }
};

export default handler;
