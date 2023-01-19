import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface Data {
  message: string;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<any> => {
  const { email_address } = req.body;

  if (!email_address) {
    res.status(400).json({ message: "Please provide an email address." });
  }
  try {
    const payload = {
      email_address,
      status: "subscribed",
    };
    const { data } = await axios.post(
      `https://us21.api.mailchimp.com/3.0/lists/${process.env.NEXT_MAILCHIMP_LIST_ID}/members/`,
      payload,
      {
        headers: {
          Authorization: `Basic ${process.env.NEXT_MAILCHIMP_API_KEY}`,
        },
      }
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

export default handler;
