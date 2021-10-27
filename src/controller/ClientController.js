export default class ClientController {
  //http://localhost:6001/api/user/login
  //http://localhost:6001/api/user/register

  static async signIn(username, password, navigation, setMessage) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch("http://localhost:6001/api/user/login", requestOptions)
      .then(res => {
        if (res.status == 200) {
          //response.json()
          console.warn('success')
        }
      })
      .then(data => navigation.navigate("HomeScreen"))
      .catch(error => setMessage(error.message))
  }

  static async signUp(username, email, password, navigation, setMessage) {
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    };

    fetch("http://localhost:6001/api/user/register", requestOptions)
      .then(res => { 
        if (res.status == 200) {
          //response.json()
          console.warn('success')
        }
      })
      .then(data => navigation.navigate("HomeScreen"))
      .catch(error => setMessage(error.message));
  }
}