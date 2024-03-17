'use client'
import { MuscleGroup, MuscleGroupUtils } from "../MuscleData/Muscles"
import CreatePlan from "../compoents/PlansComponents/CreatePlans"
import { useEffect, useState } from "react"
import { CreatePlanProp, DetailedPlan } from "../compoents/PlansComponents/CreatePlans"
import jsPreviewPdf from "@js-preview/pdf";
const plans = ()=>{
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [randomMuscles, setRandomMuscles] = useState<MuscleGroup[]>([]);
    const [detailedPlan, setDetailedPlan] = useState<DetailedPlan | null>(null) //preset to null
    
    useEffect(()=>{
        const muscles = MuscleGroupUtils.generateRandomMuscleMove(7)
        setRandomMuscles(muscles)
    },[])
    

    const handleClose = (plan?: DetailedPlan)=>{
        setPopupOpen(false)
        console.log("1111")
        setDetailedPlan(plan !== undefined ? plan : null)
        console.log(detailedPlan)

        console.log("22")

    }
    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:5000/generate_pdf', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          }),
        })
      
        if (response.ok) {
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a')
            link.href = downloadUrl;
            link.setAttribute('download', 'file.pdf')
            document.body.appendChild(link);
            link.click()
            link.parentNode.removeChild(link)
          } else {
            console.error('Server responded with ', response.status)
          }
      }

      


    return(
        <>
        <h1 className="text-xl mb-4"><strong>Example Work Plans</strong></h1>
        <strong>
            {randomMuscles.length > 0 && daysOfWeek.map(
                (day,index) =>(
                    <li key={day} className="text-base">{day} {randomMuscles[index].name_en}
                            <ul className="text-sm text-violet-800">
                            {randomMuscles[index].training_moves.map((move, moveIndex) =>(
                                <li key={`${move}-${moveIndex}`}>
                                    {move}
                                </li>
                            ))}
                            </ul>
                    </li>
                    
                )
            )}
        </strong>
        <button className="border p-2 rounded mt-2 bg-green-500" onClick={()=>{
            setPopupOpen(true)
        }}>
            Create Your Plan
          </button>
          <button onClick={fetchData}>Download PDF</button>
        <CreatePlan isOpen={isPopupOpen} onClose={handleClose}/>
        </>
    )
}
export default plans