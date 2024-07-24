import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const response = await fetch("https://formspree.io/f/mzbyknbd", {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.error) {
        throw Error(data.error);
      }

      res.status(200).json({ message: "message was recieved" });
    } catch (error: any) {
      console.log(error.message);
      res
        .status(500)
        .json({ message: error.message ?? "Failed to send message" });
    }
  }
}
