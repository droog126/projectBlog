export const getSearch = (target = ''): any => {
  if (!location.search && !target) {
    return {};
  }

  if (!target) {
    target = location.search.split('?')[1];
  } else {
    target = target.split('?')[1];
  }
  let params = target ? target.split('&') : [];
  let obj = {};
  let len = params.length;
  for (let i = 0; i < len; i++) {
    let cur = params[0];
    let key = cur.split('=')[0];
    let val = cur.split('=')[1];
    obj[key] = val;
  }
  return obj;
};

export const setSearch = (obj) => {
  let search = '?';
  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    let val = obj[key];
    let str = `${key}=${val}`;
    if (index < keys.length - 1) {
      str += '&';
    }
    search += str;
  });
  history.replaceState(null, null, location.pathname + search);
  return search;
};
