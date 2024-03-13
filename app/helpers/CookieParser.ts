import jwt from "jsonwebtoken";

export const Decode = async (req) => {
  try {
    const token = req.cookies.get("_user")?.value || "";
    const Decoded: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return Decoded;
  } catch (error) {
    console.log("Fetching User Data Failed " + error);
  }
};
