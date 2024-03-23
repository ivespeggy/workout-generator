export const requestOTP =  async (email: string) => {
  const response = await fetch('http://127.0.0.1:5000/register', {
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
    console.log(data)
    return data
  }
  else{
    throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
  }
  
}   