import { useDaysInWeekStore, useMuscleGroupStore } from "../../store/usePlanStore"
import { useDisplayErrorMsg, useSubmitStatusStore } from "../../store/useSubmitButtonStore"

interface SubmitButtonProp{
    isOpen: boolean;
    onClose: ()=> void;
}
const SubmitButton:React.FC <SubmitButtonProp>= ({onClose,isOpen}) =>{
    const OnDisplay = useDisplayErrorMsg(state =>state.OnDisplay)
    const setOndisplay = useDisplayErrorMsg(state => state.SetOnDisplay)

    const msg = useDisplayErrorMsg(state => state.msg)
    const setMsg = useDisplayErrorMsg(state => state.setMsg)


    const daysOfWeek = useDaysInWeekStore(state => state.daysOfWeek)
    const dayOnSelectMuscle = useMuscleGroupStore(state => state.dayOnSelectMuscle)

    const setReadyToSendRequest = useSubmitStatusStore(state =>state.setRreadyToSend)

    const validateSubmit = ()=>{
        const validate = Object.entries(daysOfWeek).map(([initial, bo])=>{
            // console.log("dayOnSelectMuscle "+dayOnSelectMuscle[initial]+" Bool is "+bo)

            // console.log("Initial is: "+initial+" Bool is "+bo)

            if (bo && dayOnSelectMuscle[initial] ===""){
                // this means, if the user select one day as their workout day, but they did not select any muscle yet. then this validation test may not pass.
                // but it's okay if they select muscle and then toggle off the day.
                return false
            }
            else{
                return true
            }

        })
        //if every validation check passes, then there should be 7 true,true,true,true,true,true,true.
        //else WRONG!
        // console.log(validate.filter((everyCheck) => everyCheck === true).length === 7)
        return validate.filter((everyCheck) => everyCheck === true).length === 7

    }
    
    const handleSubmitBtn = ()=>{

        console.log("Days of week:")
        console.log(daysOfWeek)
        console.log("dayOnSelectMuscle:")
        if (validateSubmit()){
            //send request
            //call onclose here
            console.log("ON-CLOSE")
            setOndisplay()
            setReadyToSendRequest()
            setTimeout(() => {
                setMsg("Processing...")
                onClose()

            }, 1500);
        }
        else{
            setOndisplay()
            setMsg("re-check your selection.")
        }


    }
    return(
        <div>
            <div>
                <button onClick={handleSubmitBtn}className="flex justify-center items-center px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-150 ease-in-out ml-auto w-32 mt-4 mb-4">
                    Submit
                </button>
            </div>
            <div className="flex justify-center items center">
                {OnDisplay && <h1>{msg}</h1>}
            </div>


        </div>


        
    )
}

export default SubmitButton