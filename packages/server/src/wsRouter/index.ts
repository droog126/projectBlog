import { Connect } from "../events";
import CountPv from "../events/count/pv";
import { ArticleCreate, ArticlesGet } from "../events/article/index";
import { UserCreate, UserLogin, UserAutoLogin } from "../events/user";

const route: any = {
  connect: {
    func: Connect,
  },
  user: {
    login: {
      func: UserLogin,
    },
    autoLogin: {
      func: UserAutoLogin,
    },
    create: {
      func: UserCreate,
    },
  },
  count: {
    pv: {
      func: CountPv,
    },
  },
  article: {
    create: {
      func: ArticleCreate,
    },
  },
  articles: {
    get: {
      func: ArticlesGet,
    },
  },
};

export const router = (data: any, socket: any) => {
  const { path } = data;
  try {
    const paths = path.split("/").slice(1);
    let target = route;
    let len = paths.length;
    let i;

    // console.log("入", target, paths, i);

    for (i = 0; i < len; i++) {
      let cur = paths[i];
      target = target[cur];
    }

    // console.log("出", target, paths, i);

    if (i == len) {
      target.func(data, socket);
    }
  } catch (e) {
    console.log("没找到路由", e);
  }
};
