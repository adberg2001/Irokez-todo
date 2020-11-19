
export default function request(method, url, data) {
  const endpoint = 'http://demo.irokez.online/web_temp/'

  return fetch(`${endpoint}${url}`, {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) throw response.status
    return response.json()
  })
};