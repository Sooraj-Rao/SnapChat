"use server";

import { client } from "@/lib/dbb";

export const Set = async ({ id, username, email }) => {
  const stringKey = JSON.stringify(id);
  const slicedId = stringKey.substring(1, stringKey.length - 1);
  const res = await client.set(
    `user:${slicedId}`,
    JSON.stringify({ id: slicedId, username: username, email: email })
  );
  console.log(res);
};

export const Get = async (key) => {
  const data = await client.get(`user:${key}`);
  if (data) {
    const jsonData = JSON.parse(data);
    console.log("Retrieved data:", jsonData);
    return jsonData;
  } else {
    console.log("No data found for key:", key);
    return null;
  }
};
