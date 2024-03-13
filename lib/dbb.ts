import { createClient } from "redis";

export const client = createClient({
  password: "8gtv4Qv9yIE81fU6fVv6GPn8L0foozTD",
  socket: {
    host: "redis-14180.c10.us-east-1-4.ec2.cloud.redislabs.com",
    port: 14180,
  },
});

client.on("error", (err) => console.log("Redis DB error", err));

if (!client.isOpen) client.connect();
