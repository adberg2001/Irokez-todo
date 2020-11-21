export default function request(method, url, data) {
  const endpoint = 'http://demo.irokez.online/web_temp/'

  const myHeaders = new Headers();
  const token = localStorage.getItem("token");
  myHeaders.append("Content-Type",  `application/json`);
  token && myHeaders.append("Authorization",  `Bearer ${token}`);
  console.log(method)
  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  return fetch(`${endpoint}${url}`, requestOptions)
    .then(response => response.json())
    .catch(error => error);

  // return fetch(`${endpoint}${url}`, {
  //   method: method,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   },
  //   body: JSON.stringify(data),
  // }).then((response) => {
  //   if (!response.ok) throw response.status
  //   return response.json()
  // })
};