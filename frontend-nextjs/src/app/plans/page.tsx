'use client'
import { MuscleGroup, MuscleGroupUtils } from "../MuscleData/Muscles"
import CreatePlan from "../compoents/PlansComponents/CreatePlans"
import { useEffect, useState } from "react"
import { CreatePlanProp, DetailedPlan } from "../compoents/PlansComponents/CreatePlans"
import { usePopUpStore } from "../store/usePlanStore"
import PopupWindowCreatePlan from "../compoents/PlansComponents/PopupWindowCreatePlan"
import jsPreviewPdf from "@js-preview/pdf";
const Plans = ()=>{
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [randomMuscles, setRandomMuscles] = useState<MuscleGroup[]>([]);
    const [detailedPlan, setDetailedPlan] = useState<DetailedPlan | null>(null) //preset to null
    
    const onCreate = usePopUpStore(state => state.OnSelectStatus)
    const toggleCreate = usePopUpStore(state => state.toggleOn)
    const toggleCreateOff = usePopUpStore(state => state.toggleOff)

    useEffect(()=>{
        const muscles = MuscleGroupUtils.generateRandomMuscleMove(7)
        setRandomMuscles(muscles)
    },[])
    
    const handleOnClickCreatePlans = () =>{
        // setPopupOpen(true)
        toggleCreate()
        console.log("Create Plan Pop UP is :"+ onCreate)
    }
    const handleClickActionX = () =>{
        toggleCreateOff()
        console.log("X pressed")
    }
    
    const handleClose = (plan?: DetailedPlan)=>{
        console.log("1111")
        // setDetailedPlan(plan !== undefined ? plan : null)
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
            if(link.parentNode){
                link.parentNode.removeChild(link)
            }
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
        <button className="border p-2 rounded mt-2 bg-green-500" onClick={handleOnClickCreatePlans
        }>
            Create Your Plan
          </button>
          <button onClick={fetchData}>Download PDF</button>
          {onCreate && 
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 10000 }}>
                    <div className="relative bg-white p-4 rounded" style={{ minWidth: "300px" }}>
                        <PopupWindowCreatePlan isOpen={isPopupOpen} onClose={handleClose} />
                        <button onClick={()=> handleClickActionX()} className="absolute top-0 right-0 m-2 border rounded-full bg-red-500 text-white text-lg flex items-center justify-center w-8 h-8">
                            &times;
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
export default Plans


// import React, { useEffect, useState } from 'react';
// import { MuscleGroup, MuscleGroupUtils } from "../MuscleData/Muscles";
// import PopupWindowCreatePlan from "../compoents/PlansComponents/PopupWindowCreatePlan";
// import { usePopUpStore } from "../store/usePlanStore";

// const Plans = () => {
//     const [isPopupOpen, setPopupOpen] = useState(false);
//     const [randomMuscles, setRandomMuscles] = useState<MuscleGroup[]>([]);

//     useEffect(() => {
//         const muscles = MuscleGroupUtils.generateRandomMuscleMove(7);
//         setRandomMuscles(muscles);
//     }, []);

//     const handleOnClickCreatePlans = () => {
//         setPopupOpen(true); // 显示 PopupWindowCreatePlan
//     };

//     const handleClose = () => {
//         setPopupOpen(false); // 关闭 PopupWindowCreatePlan
//     };

//     return (
//         <>
//             {/* 其他组件和逻辑 */}
//             <button className="border p-2 rounded mt-2 bg-green-500" onClick={handleOnClickCreatePlans}>
//                 Create Your Plan
//             </button>
            // {isPopupOpen && 
            //     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 10000 }}>
            //         <div className="relative bg-white p-4 rounded" style={{ minWidth: "300px" }}>
            //             <PopupWindowCreatePlan isOpen={isPopupOpen} onClose={handleClose} />
            //             <button onClick={handleClose} className="absolute top-0 right-0 m-2 border rounded-full bg-red-500 text-white text-lg flex items-center justify-center w-8 h-8">
            //                 &times;
            //             </button>
            //         </div>
            //     </div>
            // }
//         </>
//     );
// };

// export default Plans;
