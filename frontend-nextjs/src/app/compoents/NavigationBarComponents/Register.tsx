'use client'
import React, {useState} from "react"
import {useOtpCodeStore} from "../../store/otpCodeStore"
import { requestOTP } from "../../service/requestOTP"
import { validateOTP } from "../../service/validateOTP"
const Register = () => {
    const otpBoxState = useOtpCodeStore(state => state.OtpInputBoxState)
    const toggleOtpBoxState = useOtpCodeStore(state => state.setOtpInputState)
    const [registerState, setRegisterState] = useState({
        username: "",
        password: "",
    });
    const handleRequestOTPClick = async (event:React.MouseEvent<HTMLButtonElement>, email:string)=>{
        event.preventDefault()
        console.log("butotn Clicked")
        console.log(otpBoxState)
        try{
            const data = await requestOTP(email)
            console.log(data)
            toggleOtpBoxState()
        }
        catch (error){
            console.log(error)
        }
    }
    const handleRegisterClick = async(event: React.MouseEvent<HTMLButtonElement>, email:string)=>{

        event.preventDefault()
        console.log("register button clicked")
        try{
            const data = await validateOTP(email,"387686")
            console.log(data)

        }
        catch (error){
            console.log(error)
        }

    }
    return (
        <div className="register-wrapper">
            <form>
                <h1 className='text-center'>Register</h1>
                <div className="input-group">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                        // onChange={handleChange}
                    />
                </div>
                {
                    otpBoxState &&
                    <div className="input-group">
                    <input
                        type="text"
                        name="otp-code"
                        placeholder="Enter your otp code"
                        className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                    />
                </div>
                }
                <div className="flex">
                <button onClick={(event) => handleRegisterClick(event, "xxxxxx")} className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-150 ease-in-out mr-auto">
                    Register
                </button>
                <button onClick={(event)=>handleRequestOTPClick(event,"xxxxxxx")} className="flex justify-center items-center px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-150 ease-in-out ml-auto">
                    Rquest OTP
                </button>

                </div>

            </form>
        </div>
    )
}

export default Register