import { ConnectDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { useValidate } from "./validate";
import { User } from "@/models/user.model";
import { GenerateUsername } from "./generator";
import bcrypt from "bcrypt";

ConnectDb();
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const isValid = useValidate(reqBody);
    if (isValid) {
      return NextResponse.json({ error: true, message: isValid });
    }
    const isExist = await User.findOne({ email });
    if (isExist) {
      return NextResponse.json({
        error: true,
        message: "Email already Registered",
      });
    }
    let username = GenerateUsername(email);

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = User.create({
      email: email,
      password: hashPass,
      username: username + new Date().getTime(),
      fullName: username,
    });
    (await newUser).save();
    return NextResponse.json({
      error: false,
      message: "Registration success!",
    });
  } catch (error) {
    console.log("Signup Error -->", error);
    return NextResponse.json({
      error: true,
      message: "Registration failed in Server",
    });
  }
};
