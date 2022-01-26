import Login from "../events/user/login";
import CountPv from "../events/count/pv";
import GetProduct from "../events/user/get/product/inedx";

const route: any = {
  user: {
    login: {
      func: Login,
    },
    get: {
      product: {
        func: GetProduct,
      },
    },
  },
  count: {
    pv: {
      func: CountPv,
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
