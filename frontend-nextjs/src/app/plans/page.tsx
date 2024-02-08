import { MuscleGroupUtils } from "../MuscleData/Muscles";
const plans = ()=>{
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const n = MuscleGroupUtils.generateRandomMuscleMove(1)
    console.log(n)
    return(
        <>
        <strong>
            {daysOfWeek.map(
                day =>(
                    <li key={day}>{day}
                        <ul>
                            123
                        </ul>
                    </li>
                    
                )
            )}
        </strong>
        </>
    )
}
export default plans