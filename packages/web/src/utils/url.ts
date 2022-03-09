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
    let cur = params[i];
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

export const getQueryToObject = (): any => {
  var query = location.search.slice(1);
  var result = {};
  var arr = query.split('&');
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var target = arr[i];
    var key = target.split('=')[0];
    var val = target.split('=')[1];
    if (isNaN(Number(val))) {
      result[key] = val;
    } else {
      result[key] = Number(val);
    }
  }
  return result;
};

export const getObjectToQuery = (obj) => {
  var query = '?';
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    let val = obj[key];
    if (val) {
      let target = `${key}=${obj[key]}&`;
      query += target;
    }
  });

  return query.slice(0, query.length - 1);
};

export const addQuery = (data): any => {
  const queryObject = getQueryToObject() as any;
  const newQueryObject = { ...queryObject, ...data };
  const query = getObjectToQuery(newQueryObject);
  setUrl(location.origin + location.pathname + query);
};

export const setUrl = (url) => {
  history.pushState({ url }, document.title, url);
};
