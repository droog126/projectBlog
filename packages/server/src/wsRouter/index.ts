import { Connect } from '../events';
import CountPv from '../events/count/pv';
import {
  ArticleCreate,
  ArticlesGet,
  ArticleGet,
  ArticleDelete,
  ArticleEdit,
} from '../events/article/index';
import {
  UserCreate,
  UserLogin,
  UserAutoLogin,
  UserSetFirst,
} from '@/events/user';
import {
  ProjectAddJob,
  ProjectCreate,
  ProjectGet,
  ProjectJobGet,
  ProjectListGet,
  ProjectJobEdit,
  ProjectDelete,
} from '@/events/project';

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
    setFirst: {
      func: UserSetFirst,
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
    get: {
      func: ArticleGet,
    },
    delete: {
      func: ArticleDelete,
    },
    edit: {
      func: ArticleEdit,
    },
  },
  articles: {
    get: {
      func: ArticlesGet,
    },
  },
  project: {
    get: {
      func: ProjectGet,
    },
    delete: {
      func: ProjectDelete,
    },
    create: {
      func: ProjectCreate,
    },
    list: {
      get: {
        func: ProjectListGet,
      },
    },
    job: {
      add: {
        func: ProjectAddJob,
      },
      get: {
        func: ProjectJobGet,
      },
      edit: {
        func: ProjectJobEdit,
      },
    },
  },
};

export const router = (data: any, socket: any) => {
  const { path } = data;
  try {
    const paths = path.split('/').slice(1);
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
    console.log('没找到路由', e);
  }
};
