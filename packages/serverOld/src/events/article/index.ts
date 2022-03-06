import Data from "@/data";
const { client } = Data;
import { verifyUser, send } from "@/utils";
import { uid } from "uid";
export const ArticleCreate = async (req: any, socket) => {
  const { isValid, userKey, name } = await verifyUser(req, socket);
  if (isValid) {
    const { data: article, path } = req;
    console.log(userKey, "要创建的文章", article);
    const id = uid(24);
    const articleKey = `article:${name}:${id}`;
    article.author = name;
    article.time = Date.now();
    article.key = articleKey;

    try {
      await client.json.set(articleKey, ".", article);
      await client.json.arrInsert(userKey, ".articles", 0, articleKey);

      const res = { code: 0, msg: "文章创建成功", path, data: { articleKey } };
      send(socket, res);
    } catch (error) {
      console.log("文章创建失败", error);
    }
  }
};

export const ArticlesGet = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const {
      data: { user, page = 1, pageSize = 20 },
      path,
    } = req;
    const userKey = `user:${user}`;
    const isExist = await client.exists(userKey);
    if (isExist) {
      const AllArticleKeys: any = await client.json.get(userKey, {
        path: "$.articles",
      });
      const start = (page - 1) * pageSize;
      const end = page * pageSize - 1;
      const articleKeys = AllArticleKeys[0].slice(start, end);
      try {
        let articles: any = [];
        if (articleKeys.length) {
          articles = await client.json.mGet(articleKeys, ".");
        }
        const res = { code: 0, msg: "文章获取成功", path, data: { articles } };
        send(socket, res);
      } catch (e) {
        console.log("文章获取失败", e);
      }
    }
  }
};

export const ArticleGet = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const {
      data: { articleKey },
      path,
    } = req;
    const isExist = await client.exists(articleKey);
    console.log(isExist, "??", articleKey);
    if (isExist) {
      const article = await client.json.get(articleKey, ".");

      const res = { code: 0, msg: "文章获取成功", path, data: { article } };
      send(socket, res);
    } else {
      // 常驻bug
      const res = { code: 2, msg: "", path, data: {} };
      send(socket, res);
    }
  }
};

export const ArticleDelete = async (req: any, socket) => {
  const { isValid, userName, userKey } = await verifyUser(req, socket);
  if (isValid) {
    const { data, path } = req;
    try {
      console.log("article/delete", data);
      const { articleKey } = data;
      const articleAuthor = articleKey.split(":")[1];
      const isRight = articleAuthor === userName;
      const isExist = await client.exists(articleKey);
      console.log("ok?", isRight, isExist);
      if (isRight && isExist) {
        await client.del(articleKey);
        const articleIndex = (await client.json.arrIndex(
          userKey,
          ".articles",
          articleKey
        )) as number;
        if (articleIndex >= 0) {
          await client.json.arrPop(userKey, ".articles", articleIndex);
          const res = { code: 0, msg: "删除成功", path, data: {} };
          send(socket, res);
        }
      } else {
        new Error();
      }
    } catch (error) {
      console.log("article/delete", error);
      const res = { code: 2, msg: "", path, data: {} };
      send(socket, res);
    }
  }
};

export const ArticleEdit = async (req: any, socket) => {
  const { isValid, userName } = await verifyUser(req, socket);
  if (isValid) {
    const { path, data } = req;
    try {
      const {
        articleKey,
        new: { title, content },
      } = data;

      const articleAuthor = articleKey.split(":")[1];
      const isRight = articleAuthor === userName;
      const isExist = await client.exists(articleKey);
      if (isRight && isExist) {
        await client.json.set(articleKey, ".title", title);
        await client.json.set(articleKey, ".content", content);
        const res = { code: 0, msg: "更新成功", path, data: {} };
        send(socket, res);
      }
    } catch (error) {
      console.log("article/edit", error);
      const res = { code: 2, msg: "", path, data: {} };
      send(socket, res);
    }
  }
};
