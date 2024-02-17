export interface DetailedPlan{
    selectedDaysOfWeek: string[]
    numberOfDays: number
    selectedMuscleIndex: number
    selectedMoveIndex: number[]
}
export interface CreatePlanProp{
    isOpen: boolean
    onClose: ()=> void
    purpose: DetailedPlan
}

const CreatePlan: React.FC<CreatePlanProp> = ({isOpen,onClose,purpose}) =>{
    if (!isOpen) return null;
    // console.log(purpose)
    // var displayPurpose:String = ""
    console.log(purpose)
    
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
          <button onClick={onClose} className="border p-2 rounded mt-2 bg-red-500">
            Close
          </button>
        </div>
      </div>


    )
}

 export default CreatePlan