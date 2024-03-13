import { ConnectDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.model";
import { useValidate } from "../signup/validate";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Set } from "@/app/actions/create";

ConnectDb();
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const isValid = useValidate(reqBody);
    if (isValid) {
      return NextResponse.json({ error: true, message: isValid });
    }
    const isExist = await User.findOne({ email });

    if (!isExist) {
      return NextResponse.json({
        error: true,
        message: "User doesn't exist",
      });
    }
    const IsPassValid = await bcrypt.compare(password, isExist?.password);
    if (!IsPassValid) {
      return NextResponse.json({ error: true, message: "Password is invalid" });
    }
    const tokenData = {
      id: isExist?._id,
      username: isExist?.username,
      email: isExist?.email,
    };

    const newRedis = await Set(tokenData);
    const Token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login Successful",
      error: false,
    });

    response.cookies.set("_user", Token, { httpOnly: true });

    return response;
  } catch (error) {
    console.log("Login Error -->", error);
    return NextResponse.json({
      error: true,
      message: "Login failed in Server",
    });
  }
};
