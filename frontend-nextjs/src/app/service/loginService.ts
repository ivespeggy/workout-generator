import { jwtDecode } from "jwt-decode";

export const loginRequest =  async (email: string) => {
    const response = await fetch(`${process.env.host}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email
      }),
    })
    if (response.ok){
      const data = await response.json()
      console.log(data.token)

      localStorage.setItem('jwtToken', data.token);

    }
    else{
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }
    
  }   