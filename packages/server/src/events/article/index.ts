import Data from "../../data/inedx";
const { setData, getData, client } = Data;

export const ArticleCreate = (req: any, socket) => {
  const { data, token } = req;
  console.log("要创建的文章", data);
  try {
    // client.json.set({ key: token, path: "$.article", data });
    client.json.set(token, "$.article", data);
  } catch (e: any) {
    console.log(e, "hello", e.message);
  }
};
