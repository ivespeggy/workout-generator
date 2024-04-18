'use client'
import { MuscleGroup, MuscleGroupUtils } from "../MuscleData/Muscles"
import { useEffect, useState } from "react"
import { useDaysInWeekStore, useMuscleGroupStore, usePopUpStore } from "../store/usePlanStore"
import PopupWindowCreatePlan from "../compoents/PlansComponents/PopupWindowCreatePlan"
import jsPreviewPdf from "@js-preview/pdf";
import { pdfRequest } from "../service/requestPdf"

interface DetailedPlan{
    selectedDaysOfWeek: string[]
    numberOfDays: number
    selectedMuscleIndex: number
    selectedMoveIndex: number[]
}
const Plans = ()=>{
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [randomMuscles, setRandomMuscles] = useState<MuscleGroup[]>([]);
    const [detailedPlan, setDetailedPlan] = useState<DetailedPlan | null>(null) //preset to null
    
    const onCreate = usePopUpStore(state => state.OnSelectStatus)
    const toggleCreate = usePopUpStore(state => state.toggleOn)
    const toggleCreateOff = usePopUpStore(state => state.toggleOff)

    const daysOfWeekAttr = useDaysInWeekStore(state => state.daysOfWeek)
    const dayOnSelectMuscle = useMuscleGroupStore(state => state.dayOnSelectMuscle)

    const resetDaysOfWeekAttr = useDaysInWeekStore(state => state.reset)
    const resetDayOnSelectMuscle = useMuscleGroupStore(state => state.reset)


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
        resetDaysOfWeekAttr()
        resetDayOnSelectMuscle()
        console.log("X pressed")

    }
    
    const handleClose = async ()=>{
        console.log("1111")
        // setDetailedPlan(plan !== undefined ? plan : null)
        toggleCreateOff()
        console.log("22")
        await pdfRequest(daysOfWeekAttr,dayOnSelectMuscle)

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
          {onCreate && 
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 10000 }}>
                    <div className="relative bg-white p-4 rounded" style={{ minWidth: "300px" }}>
                        <PopupWindowCreatePlan isOpen={onCreate} onClose={handleClose} />
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