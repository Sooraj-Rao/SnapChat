import { NextResponse } from "next/server";
import { Decode } from "../helpers/CookieParser";
import { Get } from "../actions/create";

export const MiddleWare = async (req) => {
  try {
    const isValid = await Decode(req);
    console.log(isValid);
    const isValidinServer = await Get(isValid?.id);
    console.log(isValidinServer);
    if (
      isValid?.id === isValidinServer?.id ||
      isValid?.email === isValidinServer?.email
    ) {
      return { error: false, message: "Valid User" };
    }
    return { error: true, message: "Un-Authorized" };
  } catch (error) {
    console.log(error);
    return { error: true, message: "Error" };
  }
};
