export const pdfRequest =  async (daysSelected:{[key: string]: boolean},dayWorkouts:{[key: string]: string}) => {


    const response = await fetch(`${process.env.host}/generate_pdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "daysSelected": daysSelected,
          "dayWorkouts": dayWorkouts
      }),
    })
    if (response.ok){
      const data = await response.blob()
      const downloadUrl = window.URL.createObjectURL(data)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.setAttribute('download', 'workout.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      

    }
    else{
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }
    
  }   