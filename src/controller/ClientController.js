export default class ClientController {
  //http://localhost:6001/api/user/hello

  static async signIn(username, password, navigation) {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch("http://localhost:6001/api/user/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.error) {
          console.warn(data)
        } else {
          console.warn(data)

          navigation.navigate("HomeScreen");
        }
      });
  }

  static async signUp(username, email, password, navigation) {
    console.warn('Sign Up');
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch("http://localhost:6001/api/user/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.error) {
          console.warn(data)
        } else {
          console.warn(data)
          
          navigation.navigate("HomeScreen");
        }
      });
  }
}