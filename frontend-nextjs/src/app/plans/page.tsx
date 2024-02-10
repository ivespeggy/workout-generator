import { MuscleGroupUtils } from "../MuscleData/Muscles";
const plans = ()=>{
    const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const randomMuscles = MuscleGroupUtils.generateRandomMuscleMove(7)
    // console.log(randomMuscles)
    return(
        <>
        <h1 className="text-xl mb-4"><strong>Example Work Plans</strong></h1>
        <strong>
            {daysOfWeek.map(
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
        </>
    )
}
export default plans