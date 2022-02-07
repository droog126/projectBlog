import { createClient } from "redis";

const client = createClient();
client.connect().then(() => {
  console.log("data ok");
});

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
    const vlaue = await client.json.get(key, { path });
    return vlaue;
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
    const vlaue = await client.json.get(key, { path });
    return vlaue;
  } else {
    await client.json.set(key, path, {});
    const vlaue = await client.json.get(key, { path });
    return vlaue;
  }
}

export default (() => {
  return {
    setData,
    getData,
    client,
  };
})();
