'use client'
import { MuscleGroupUtils } from "../../MuscleData/Muscles"
import { useEffect } from "react"
import { useDaysInWeekStore, useMuscleGroupStore } from "../../store/usePlanStore"
const Selector = () =>{
    const daysOfWeek = useDaysInWeekStore(state => state.daysOfWeek)


    const allMoves = useMuscleGroupStore(state=>state.muscles)
    const setMoveStatus = useMuscleGroupStore(state => state.toggleMuscle)

    const dayOnSelectMuscle = useMuscleGroupStore(state => state.dayOnSelectMuscle)
    const updateDayOnSelectItem = useMuscleGroupStore(state => state.updateDayOnSelectMuscle)
    const deleteDayOnSelectItem = useMuscleGroupStore(state => state.deleteCurrMuscleOnSelect)

/**
 * Converts the initial of a day to its full name.
 * 
 * @param initial - The initial of the day as a string. For example, "M" for Monday.
 * @returns The full name of the day as a string. Returns "Unknown" if the initial does not match any known day, which is unlikely to happen.
 */

    const convertInitialToDay = (initial:string):string=>{
        switch (initial){
            case "M":
                return "Monday"
            case "T":
                return "Tuesday"
            case "W":
                return "Wednesday"
            case "R":
                return "Thursday"
            case "F":
                return "Friday"
            case "S":
                return "Saturday"
            case "U":
                return "Sunday"
            default:
                return "ERROR"
        }
        
    }
    const handleOnSelect = (weekId:string, event:React.ChangeEvent<HTMLSelectElement>) =>{
        const selectedMuscle = event.target.value

        console.log("Week ID IS "+weekId + " moveNameKey " +selectedMuscle)

        if (event.target.value !== "default"){
            if (dayOnSelectMuscle[weekId] === ""){
                // If dayOnSelectMuscle['M'] === "" means they're empty, so we can just call update function here to update OnSelect Item.
                updateDayOnSelectItem(weekId,selectedMuscle)
                setMoveStatus(selectedMuscle)
            }
            else{
                // If dayOnSelectMuscle['M'] === "Some Muscles", then we have to delete current muscle.
                const currMuscle = dayOnSelectMuscle[weekId]
                deleteDayOnSelectItem(weekId,currMuscle)
                updateDayOnSelectItem(weekId,selectedMuscle)

                //Firstly, toggle current muscle state to false, means it is not longer selected.
                setMoveStatus(currMuscle)
                setMoveStatus(selectedMuscle)
                

            }

            console.log("All MOVES :")
            console.log(allMoves)
            console.log("END OF THE PRINT")

        }
        // update in React DEBUGER, not print out in console.



    }

// This renders all the moves option for each day */


    return (
        <div>
            {/* this for loop only works when v is true, v is the everyday pixel  */}
        {Object.entries(daysOfWeek).map(([key, v]) => (
            v === true?(
                <div key={key}>
                {convertInitialToDay(key)}
                <div>
                    <select name="workout-selection" value={dayOnSelectMuscle[key]} onChange={(event) => handleOnSelect(key, event)}>
                    <option value="default">--Please choose an option--</option>

                    {Object.entries(allMoves).map(([muscle,isSelected]) =>{
                        if (dayOnSelectMuscle[key] === muscle || !isSelected) {
                            return <option key={muscle} value={muscle}>{muscle}</option>
                        }
                        return null
                    })                            
                    }
                    </select>
                </div>
              </div>

            ):
            null

        ))}
      </div>

    )
}
export default Selector