import axios from "axios";

/**
 * 将对象添加当作参数拼接到URL上面
 * @param baseUrl 需要拼接的url
 * @param obj 参数对象
 * @returns {string} 拼接后的对象
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = "";
  let url = "";
  for (const key in obj) {
    if (obj[key] != void 0) {
      parameters += key + "=" + encodeURIComponent(obj[key]) + "&";
    }
  }
  parameters = parameters.replace(/&$/, "");
  if (/\?$/.test(baseUrl)) {
    url = baseUrl + parameters;
  } else {
    url = baseUrl.replace(/\/?$/, "?") + parameters;
  }
  return url;
}

/**
 * url转化成对象
 * @param url url
 * @returns
 */
export function urlToObj(url = "") {
  return Object.fromEntries(new URLSearchParams(url) as any);
}

export const baseUrl = "./";

export const http = axios.create({
  baseURL: baseUrl,
});

http.defaults.withCredentials = true;

// 请求拦截器
http.interceptors.request.use((request) => {
  return request;
});

// 响应拦截器
http.interceptors.response.use(
  (response: any) => {
    if (response.data.status !== true) {
      // $message.error(
      //   response.data.displayMsg ||
      //     response.data.error ||
      //     response.message ||
      //     response.data.message ||
      //     response.data
      // );
    }

    return response;
  },
  (error) => {
    return error;
  }
);

export interface IBaseResponse<T> {
  data: T;
  message: string;
  resultCode: string;
  status: boolean;
  code: number;
}

export function get<T>(url: string, data = {}) {
  return http
    .get<IBaseResponse<T>>(setObjToUrlParams(url, data))
    .then((res) => res.data);
}

export function post<T>(url: string, data: any, option = {}) {
  return http.post<IBaseResponse<T>>(url, data, option).then((res) => res.data);
}
export function put<T>(url: string, data: any) {
  return http.post<IBaseResponse<T>>(url, data).then((res) => res.data);
}

export function del<T>(url: string) {
  return http.delete<IBaseResponse<T>>(url).then((res) => res.data);
}
