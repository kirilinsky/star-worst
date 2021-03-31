export function api() {
  return axios.create({
    baseURL: 'http://192.168.1.2:8097/',
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
}