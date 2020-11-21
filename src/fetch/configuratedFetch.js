export default function request(method, url, data) {
  const endpoint = 'http://demo.irokez.online/web_temp/'

  const myHeaders = new Headers();
  const token = localStorage.getItem("token");
  myHeaders.append("Content-Type",  `application/json`);
  token && myHeaders.append("Authorization",  `Bearer ${token}`);

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  return fetch(`${endpoint}${url}`, requestOptions)
    .then(response => response.json())
    .catch(error => error);
};