export default function authRequest(data){
  const endpoint = 'http://demo.irokez.online/web_temp/'

  fetch(`${endpoint}token/login/`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) throw response.status
    return response.json()
  }).then((json) => {
    localStorage.setItem('token', json.token)
  })
    .catch((error) => {
      console.log(error)
    })
}