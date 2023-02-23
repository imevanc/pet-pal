import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): Promise<any> => {
  const { id, country, status, name, email, addressLineOne, city, postcode } =
    req.body;
  console.log("sdfsdafsa", id, country);
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        addressLineOne,
      },
    });
    console.log({ user });
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

export default handler;
