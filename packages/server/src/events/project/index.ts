import Data from "@/data";
const { client } = Data;
import { verifyUser, send } from "@/utils";
import { uid } from "uid";
export const ProjectCreate = async (req: any, socket) => {
  const { isValid, userKey, name } = await verifyUser(req, socket);
  if (isValid) {
    const { path, data } = req;
    console.log("项目创建", data);
    const id = uid(24);
    const projectKey = `project:${name}:${id}`;
    data.time = Date.now();
    data.key = projectKey;
    data.author = name;
    data.jobs = [];
    try {
      await client.json.set(projectKey, ".", data);
      await client.json.arrInsert(userKey, ".projects", 0, projectKey);
      const res = { code: 0, msg: "项目创建成功", path, data: { projectKey } };
      send(socket, res);
    } catch (error) {
      console.log("项目创建失败", error);
    }
  }
};

export const ProjectGet = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const {
      data: { projectKey },
      path,
    } = req;
    const isExist = await client.exists(projectKey);
    if (isExist) {
      const project = await client.json.get(projectKey, ".");

      try {
        const res = { code: 0, msg: "项目获取成功", path, data: { project } };
        send(socket, res);
      } catch (e) {
        console.log("文章获取失败", e);
      }
    } else {
      const res = { code: 2, msg: "没有这个项目" };
      send(socket, res);
    }
  }
};

export const ProjectListGet = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const {
      data: { userName },
      path,
    } = req;
    const userKey = `user:${userName}`;
    const isExist = await client.exists(userKey);
    console.log("fuck", isExist, userKey);
    if (isExist) {
      const projectKeys = (await client.json.get(userKey, {
        path: ".projects",
      })) as string[];
      let projectList: any = [];
      if (projectKeys.length) {
        projectList = await client.json.mGet(projectKeys, ".");
      }
      console.log("here", projectList);
      const minList = projectList.map((item: any) => {
        return { name: item["名字"], key: item.key };
      });
      try {
        const res = {
          code: 0,
          msg: "项目列表获取成功",
          path,
          data: minList,
        };
        send(socket, res);
      } catch (e) {
        console.log("文章获取失败", e);
      }
    }
  }
};

export const ProjectAddJob = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const { path, data } = req;
    const { key: projectKey, content } = data;
    const isExist = await client.exists(projectKey);
    if (isExist) {
      try {
        const result = await client.json.arrInsert(projectKey, ".jobs", 0, {
          content,
          time: Date.now(),
        });
        console.log(result);
      } catch (error) {
        console.log("添加任务发生", error);
      }
    }
    console.log("项目添加任务", data);
  }
};
