import { API_PATH } from "../const";

type AdditionalParams = {
  params?: object;
  cb?: (data: object) => void;
};

/**
 *
 * @param path API path start with slash. Expample: /core/prefix
 * @param params Optional object with body params
 */
export default function ApiRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  additional?: AdditionalParams
) {
  const query: RequestInit = {
    method,
    // mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: undefined,
  };
  if (additional && additional.params) {
    query.body = JSON.stringify(additional.params);
  }
  fetch(API_PATH + path, query)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (additional && additional.cb) {
        additional.cb(data || {});
      }
    })
    .catch((err) => {
      console.error(err); // add handler
    });
}
