import { createClient } from "redis";

const client = createClient();
client.connect().then(() => {
  console.log("data ok");
});
// client.subscribe("updateUser", (e) => {
//   console.log("hello");
// });
// client.publish("updateUser", "fuck you ");

async function setData({
  key = "root",
  path = "",
  data,
}: {
  key: any;
  path: any;
  data: any;
}): Promise<any> {
  const res = await client.exists(key, path);
  console.log("setData", key, path, res);

  if (res) {
    const value = await client.json.get(key, { path });
    return value;
  } else {
    await client.json.set(key, path, {});
    await client.json.set(key, path, data);
  }
  return;
}

async function getData({
  key = "root",
  path = ".",
}: {
  key: any;
  path: any;
}): Promise<any> {
  const res = await client.exists(key, path);
  console.log("getData", key, path, res);
  if (res) {
    const value = await client.json.get(key, { path });
    return value;
  } else {
    await client.json.set(key, path, {});
    const value = await client.json.get(key, { path });
    return value;
  }
}

export default (() => {
  return {
    setData,
    getData,
    client,
  };
})();
