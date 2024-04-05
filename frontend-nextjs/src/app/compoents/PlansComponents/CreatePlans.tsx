import ColorSquare from "../ColorSquare"
import { daysOfWeekChar } from "../ColorSquare"
import React, { useState } from 'react'
import musclesData from "../../MuscleData/Muscles"
import { MuscleGroup, MuscleGroupUtils } from "../../MuscleData/Muscles"
import { usePopUpStore } from "../../store/usePlanStore"
export interface DetailedPlan{
    selectedDaysOfWeek: string[]
    numberOfDays: number
    selectedMuscleIndex: number
    selectedMoveIndex: number[]
}
export interface CreatePlanProp{
    isOpen: boolean
    onClose: (plan? : DetailedPlan)=> void
}

const CreatePlan: React.FC<CreatePlanProp> = ({isOpen,onClose}) =>{
    // if (!isOpen) return null;
    // console.log(purpose)
    // var displayPurpose:String = ""

    const toggleCreateOff = usePopUpStore(state => state.toggleOff)

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const findWeekdayChar = (s:string)=>{
      switch(s){
        case "Monday":
          return daysOfWeekChar.M
        case "Tuesday":
          return daysOfWeekChar.T
        case "Wednesday":
          return daysOfWeekChar.W
        case "Thursday":
          return daysOfWeekChar.R
        case "Friday":
          return daysOfWeekChar.F
        case "Saturday":
          return daysOfWeekChar.S
        case "Sunday":
          return daysOfWeekChar.U
        default:
          return daysOfWeekChar.M //error, should not happen though.
      }
    }
    

    const [selectedDays, setSelectedDays] = useState({
      M: true,
      T: true,
      W: true,
      R: true,
      F: true,
      S: true,
      U: true,
    })
    const [selectedOptions, setSelectedOptions] = useState({
      M: "",
      T: "",
      W: "",
      R: "",
      F: "",
      S: "",
      U: ""
    })

    const OptionSelectState = (): Map<string, boolean>=> {
      const opitonList = MuscleGroupUtils.retrieveName()

      var isMuscleSelectedMap = new Map<string, boolean>()
      for (const muscle of opitonList){
        isMuscleSelectedMap.set(muscle,true)
      }
      return isMuscleSelectedMap
    }

    const [option, setOption] = useState(OptionSelectState)



    const hardcodedPlan: DetailedPlan = {
      selectedDaysOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
      numberOfDays: 3,
      selectedMuscleIndex: 0, 
      selectedMoveIndex: [0, 2] 
    }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // // console.log("Submit button handled")
    
      // let checkFlg = true;
      // for (const [optionKey,optionValue] of Object.entries(selectedOptions)) {
      //   // console.log(option)

      //   // const isToggleOn = selectedDays[dayChr]
      //   if (optionValue === "" ) {
      //     // alert("Please Complete your selection")
      //     console.log("Incomplete selection")
      //     const dayChr = optionKey.toString() as keyof typeof selectedDays

      //     console.log("dayChr Select is "+ selectedDays[dayChr])
      //     if(!selectedDays[dayChr]){
      //       checkFlg = true
      //     }
      //     else{
      //       checkFlg = false
      //       alert("You have incomplete selections")
      //     }
      //     break
      //     // return
      //   }
      // }
      
    
      // if (checkFlg) {
      //   console.log("Window Closed!")
      //   console.log(selectedDays)
      //   console.log(selectedOptions)

      //   onClose()
      // }
    }    


    const handleOnClose = ()=> {
      toggleCreateOff()
      onClose()
    }
    const handleSelectOnChange = (isSelected: boolean, d:daysOfWeekChar) =>{
      // console.log(`New Selected State: ${isSelected} d is ${d}`)
      setSelectedDays(prev =>({
        ...prev,
        [d]: isSelected
      }))
    }

    const handleOptionOnChange = (dayChar: daysOfWeekChar, value: string) =>{
      if (value === "") {
        console.log("Default option selected, no action needed.");

        return;
      }
    
      setSelectedOptions(prev => ({
        ...prev,
        [dayChar]: value
      }));
    
      setOption(prev => {
        const newMap = new Map(prev);
        const muscleSelectBool = prev.get(value);
        newMap.set(value, !muscleSelectBool);
        // console.log("Bool is"+muscleSelectBool)
        return newMap;
      })
    }



    const dynamicWorkoutBodyparts = (index: number, dayChar: daysOfWeekChar) => {
      const currentSelectedValue = selectedOptions[dayChar as keyof typeof selectedOptions] || ""
    
      return (
        <select 
          id={`day-${index}`} 
          name={`day-${index}`} 
          value={currentSelectedValue || ""}
          className="mt-1 p-2 border rounded" 
          onChange={(e) => handleOptionOnChange(dayChar, e.target.value)}
        >
          <option value="">Please Select Muscle</option>
          {Array.from(option.keys()).map((muscleName, idx) => (
          (
              <option key={idx + muscleName} value={muscleName}>{muscleName}</option>
            ) 
          ))}
        </select>
      )
    }
    

    
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded"> 
        <form onSubmit={handleSubmit} className="space-y-4">
            Click the pixel to select your rest day
            <div>
              <div className="flex items-center space-x-4">
                <ColorSquare d={daysOfWeekChar.M} selectOnChange={handleSelectOnChange}/>
                <ColorSquare d={daysOfWeekChar.T} selectOnChange={handleSelectOnChange}/>
                <ColorSquare d={daysOfWeekChar.W} selectOnChange={handleSelectOnChange}/>
                <ColorSquare d={daysOfWeekChar.R} selectOnChange={handleSelectOnChange}/>
                <ColorSquare d={daysOfWeekChar.F} selectOnChange={handleSelectOnChange}/>
                <ColorSquare d={daysOfWeekChar.S} selectOnChange={handleSelectOnChange}/>
                <ColorSquare d={daysOfWeekChar.U} selectOnChange={handleSelectOnChange}/>
              </div>
              {weekDays.map((day, index) => {
              const dayChar = findWeekdayChar(day)
              // console.log(dayChar)

              return selectedDays[dayChar!] ? (
                <div key={index}>
                  <label htmlFor={`day-${index}`} className="block">{day}</label>
                  {dynamicWorkoutBodyparts(index, dayChar)}

                </div>
                ) 
                : null
          })}


            </div>
            <div className="flex justify-between">
            <button type="submit" className="border p-2 rounded bg-blue-500 text-white w-24 h-10">Submit</button>
            <button onClick={handleOnClose} className="border p-2 rounded bg-red-500 text-white w-24 h-10">Close</button>
            </div>

          </form>

        </div>
      </div>
    )
}

 export default CreatePlan