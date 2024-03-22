export const validateOTP =  async (email: string, otp_code:string) => {
    const url = new URL('http://127.0.0.1:5000/validate_otp')
    url.searchParams.append('otp', otp_code);
    url.searchParams.append('email', email);
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok){
      const data = await response.json()
      console.log(data)
      return data
    }
    else{
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }
    
  }   