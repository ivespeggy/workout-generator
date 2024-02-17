'use client'
import { MuscleGroup, MuscleGroupUtils } from "../MuscleData/Muscles";
import CreatePlan from "../compoents/PlansComponents/CreatePlans";
import { useEffect, useState } from "react";
import { CreatePlanProp, DetailedPlan } from "../compoents/PlansComponents/CreatePlans";
const plans = ()=>{
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [randomMuscles, setRandomMuscles] = useState<MuscleGroup[]>([]);
    useEffect(()=>{
        const muscles = MuscleGroupUtils.generateRandomMuscleMove(7)
        setRandomMuscles(muscles)
    },[])
    

    const hardcodedPlan: DetailedPlan = {
        selectedDaysOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
        numberOfDays: 3,
        selectedMuscleIndex: 0, 
        selectedMoveIndex: [0, 2] 
    };
    

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
        <CreatePlan isOpen={isPopupOpen} onClose={()=> setPopupOpen(false)} purpose={hardcodedPlan}/>
        </>
    )
}
export default plans