import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({ msg: "Hiii" });
  } catch (error) {}
};
