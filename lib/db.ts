import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export const ConnectDb = async () => {
  if (cachedConnection) {
    console.log("Using Cached DB connection");
    return cachedConnection;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL! as string);
    cachedConnection = conn.connection;
    console.log("Database connected");
    return cachedConnection;
  } catch (error) {
    console.log("Database connection failed -->", error);
  }
};
