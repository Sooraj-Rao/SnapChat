import { NextRequest, NextResponse } from "next/server";
import { MiddleWare } from "./middleware";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const result = await MiddleWare(req);
  return NextResponse.json(result);
};
