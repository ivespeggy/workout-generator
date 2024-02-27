import ColorSquare from "../ColorSquare"
import { daysOfWeekChar } from "../ColorSquare"
import React, { useState } from 'react';

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
    if (!isOpen) return null;
    // console.log(purpose)
    // var displayPurpose:String = ""
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
  
      const hardcodedPlan: DetailedPlan = {
      selectedDaysOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
      numberOfDays: 3,
      selectedMuscleIndex: 0, 
      selectedMoveIndex: [0, 2] 
    };
  
    const handleSubmit = ()=> {
      console.log("Submit button handled")
    }
    const handleOnClose = ()=> {

      onClose(hardcodedPlan)

    }
    const handleSelectOnChange = (isSelected: boolean,d:daysOfWeekChar) =>{
      console.log(`New Selected State: ${isSelected} d is ${d}`)
      setSelectedDays(prev =>({
        ...prev,
        [d]: isSelected
      }))
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
            const dayChar = findWeekdayChar(day);
            return selectedDays[dayChar!] ? (
              <div key={index}>
                <label htmlFor={`day-${index}`} className="block">{day}</label>
                <input 
                  id={`day-${index}`} 
                  name={`day-${index}`} 
                  type="text" 
                  required 
                  className="mt-1 p-2 border rounded" />
              </div>
            ) : null
          })}


            </div>
            <div className="flex justify-between">
            <button onClick={handleSubmit} type="submit" className="border p-2 rounded bg-blue-500 text-white w-24 h-10">Submit</button>
            <button onClick={handleOnClose} className="border p-2 rounded bg-red-500 text-white w-24 h-10">Close</button>
            </div>

          </form>

        </div>
      </div>
    )
}

 export default CreatePlan