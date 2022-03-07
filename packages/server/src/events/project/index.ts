import Data from '@/data';
const { client } = Data;
import { verifyUser, send } from '@/utils';
import { uid } from 'uid';
export const ProjectCreate = async (req: any, socket) => {
  const { isValid, userKey, name } = await verifyUser(req, socket);
  if (isValid) {
    const { path, data } = req;
    console.log('项目创建', data);
    const id = uid(24);
    const projectKey = `project:${name}:${id}`;
    data.time = Date.now();
    data.key = projectKey;
    data.author = name;

    const jobsKey = `${projectKey}:jobs`;
    await client.json.set(jobsKey, '.', []);
    try {
      await client.json.set(projectKey, '.', data);
      await client.json.arrInsert(userKey, '.projects', 0, projectKey);
      const res = { code: 0, msg: '项目创建成功', path, data: { projectKey } };
      send(socket, res);
    } catch (error) {
      console.log('项目创建失败', error);
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
      const project = await client.json.get(projectKey, '.');

      try {
        const res = { code: 0, msg: '项目获取成功', path, data: { project } };
        send(socket, res);
      } catch (e) {
        console.log('文章获取失败', e);
      }
    } else {
      const res = { code: 2, msg: '没有这个项目' };
      send(socket, res);
    }
  }
};

export const ProjectDelete = async (req: any, socket) => {
  const { isValid, userName, userKey } = await verifyUser(req, socket);
  if (isValid) {
    const { data, path } = req;
    try {
      console.log(userName, 'projectDelete', data);
      const { projectKey } = data;
      const isExist = await client.exists(projectKey);
      if (isExist) {
        const projectAuthor = await client.json.get(projectKey, {
          path: '.author',
        });
        const isRight = projectAuthor === userName;
        if (isRight) {
          let result = await client.del(projectKey);

          const projectIndex = (await client.json.arrIndex(
            userKey,
            '.projects',
            projectKey,
          )) as number;

          if (projectIndex >= 0) {
            let result = await client.json.arrPop(
              userKey,
              '.projects',
              projectIndex,
            );
            if (result) {
              const res = { code: 0, msg: '删除成功', path, data: {} };
              send(socket, res);
            }
          }
        }
      }
    } catch (error) {
      console.log('任务编发生错误', error);
      const res = {
        code: 2,
        msg: '添加任务错误',
        path,
      };
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
    console.log('fuck', isExist, userKey);
    if (isExist) {
      const projectKeys = (await client.json.get(userKey, {
        path: '.projects',
      })) as string[];
      let projectList: any = [];
      if (projectKeys.length) {
        projectList = await client.json.mGet(projectKeys, '.');
      }
      console.log('here', projectList);
      const minList = projectList.map((item: any) => {
        return { name: item['名字'], key: item.key };
      });
      try {
        const res = {
          code: 0,
          msg: '项目列表获取成功',
          path,
          data: minList,
        };
        send(socket, res);
      } catch (e) {
        console.log('文章获取失败', e);
      }
    }
  }
};

export const ProjectJobGet = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    try {
      const { path, data } = req;
      const { projectKey, content, jobsIndex = 0 } = data;
      const jobsKey = `${projectKey}:jobs`;
      const isExist = await client.exists(jobsKey);
      if (isExist) {
        const jobLen = await client.json.arrLen(jobsKey, '.');
        const jobList: any[] = [];
        for (let i = jobsIndex; i < jobLen; i++) {
          if (i == jobsIndex + 10) {
            break;
          }
          let curJob = await client.json.get(jobsKey, {
            path: `.[${i}]`,
          });
          jobList.push(curJob);
        }

        const res = {
          code: 0,
          msg: '获取成功',
          path,
          data: { total: jobLen, arr: jobList },
        };
        send(socket, res);
      }
    } catch (error) {
      console.log('发生错误', error);
    }
  }
};

export const ProjectAddJob = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const { path, data } = req;
    const { projectKey, content, index = 0 } = data;
    const jobsKey = `${projectKey}:jobs`;

    const isExist = await client.exists(jobsKey);

    if (isExist) {
      try {
        const firstJob = (await client.json.get(jobsKey, {
          path: '.[0]',
        })) as any;

        const isSameDay =
          new Date(firstJob.time).toDateString() === new Date().toDateString();
        console.log(
          'time',
          firstJob,
          new Date(firstJob.time).toDateString(),
          new Date().toDateString(),
        );
        if (isSameDay) {
          const res = { code: 1, msg: '一天只能记一次', path };
          send(socket, res);
          return;
        } else {
          await client.json.arrInsert(jobsKey, '.', 0, {
            content,
            time: Date.now(),
          });
          const jobLen = await client.json.arrLen(jobsKey, '.');
          const jobList: any[] = [];
          for (let i = index; i < jobLen; i++) {
            if (i == index + 10) {
              break;
            }
            let curJob = await client.json.get(jobsKey, {
              path: `.[${i}]`,
            });
            jobList.push(curJob);
          }

          const res = {
            code: 0,
            msg: '记录添加成功',
            path,
            data: {
              total: jobLen,
              jobs: jobList,
            },
          };
          send(socket, res);
          return;
        }
      } catch (error) {
        console.log('添加任务发生', error);
        const res = {
          code: 2,
          msg: '添加任务错误',
          path,
        };
        send(socket, res);
      }
    }
  }
};

export const ProjectJobEdit = async (req: any, socket) => {
  const { isValid } = await verifyUser(req, socket);
  if (isValid) {
    const { path, data } = req;
    try {
      console.log('任务编辑', data);
      const { projectKey, jobIndex, content } = data;
      const jobsKey = `${projectKey}:jobs`;
      const isExist = await client.exists(jobsKey);
      if (isExist) {
        await client.json.set(jobsKey, `.[${jobIndex}].content`, content);
        const jobLen = await client.json.arrLen(jobsKey, '.');
        const jobList: any[] = [];
        const index = 0;
        for (let i = index; i < jobLen; i++) {
          if (i == index + 10) {
            break;
          }
          let curJob = await client.json.get(jobsKey, {
            path: `.[${i}]`,
          });
          jobList.push(curJob);
        }

        const res = {
          code: 0,
          msg: '记录编辑成功',
          path,
          data: {
            total: jobLen,
            jobs: jobList,
          },
        };
        send(socket, res);
      } else {
        const res = {
          code: 2,
          msg: '记录不存在',
          path,
        };
        send(socket, res);
      }
    } catch (error) {
      console.log('任务编发生错误', error);
      const res = {
        code: 2,
        msg: '添加任务错误',
        path,
      };
      send(socket, res);
    }
  }
};
