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
  
    const handleOnClose = ()=>{
      // console.log("Create PLANS")
      // console.log(hardcodedPlan)
      onClose(hardcodedPlan)

    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
          <button onClick={handleOnClose} className="border p-2 rounded mt-2 bg-red-500">
            Close
          </button>
        </div>
      </div>


    )
}

 export default CreatePlan