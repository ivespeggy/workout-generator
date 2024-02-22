import ColorSquare from "../ColorSquare"
import { daysOfWeekChar } from "../ColorSquare"
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

    const hardcodedPlan: DetailedPlan = {
      selectedDaysOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
      numberOfDays: 3,
      selectedMuscleIndex: 0, 
      selectedMoveIndex: [0, 2] 
    };
  
    const handleSubmit = ()=>{
      console.log("Submit button handled")
    }
    const handleOnClose = ()=>{

      onClose(hardcodedPlan)

    }

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded"> 
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>

              <label htmlFor="week" className="block">Week</label>
              <input id="name" name="name" type="text" required className="mt-1 p-2 border rounded"/>
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