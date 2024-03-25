'use client'
import React, {useState} from "react"
import { useOtpCodeStore } from "../../store/useOtpCodeStore"
import { useOtpTextfieldStore, useEmailTextfieldStore } from "../../store/registerStore"
import { requestOTP } from "../../service/requestOTP"
import { validateOTP } from "../../service/validateOTP"
const Register = () => {
    const otpBoxState = useOtpCodeStore(state => state.OtpInputBoxState)
    const toggleOtpBoxState = useOtpCodeStore(state => state.setOtpInputState)

    const email = useEmailTextfieldStore(state => state.email)
    const setEmail = useEmailTextfieldStore(state => state.setEmail)

    const otpCode = useOtpTextfieldStore(state => state.otpCode)
    const setOtpCode = useOtpTextfieldStore(state => state.setOtpInput)
    
    
    const handleEmailOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
    }
    const handleOtpCodeOnChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setOtpCode(event.target.value)
    }
    const [registerState, setRegisterState] = useState({
        username: "",
        password: "",
    });

    const handleRequestOTPClick = async (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        console.log("Request OTP butotn Clicked")
        console.log(email)
        try{
            const data = await requestOTP(email)
            console.log(data)
            toggleOtpBoxState()
        }
        catch (error){
            console.log(error)
        }
    }
    const handleRegisterClick = async (event: React.MouseEvent<HTMLButtonElement>)=>{

        event.preventDefault()
        console.log("register button clicked")
        try{
            const data = await validateOTP(email, otpCode)
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
                        name="email"
                        placeholder="Email"
                        onChange={handleEmailOnChange}
                        className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                    />
                </div>
                {
                    otpBoxState &&
                    <div className="input-group">
                    <input
                        type="text"
                        name="otp-code"
                        value={otpCode}
                        onChange={handleOtpCodeOnChange}
                        placeholder="Enter your otp code"
                        className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                    />
                </div>
                }
                <div className="flex">
                <button onClick={(event) => handleRegisterClick(event)} className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-150 ease-in-out mr-auto">
                    Register
                </button>
                <button onClick={(event)=>handleRequestOTPClick(event)} className="flex justify-center items-center px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-150 ease-in-out ml-auto">
                    Rquest OTP
                </button>

                </div>
                {/* <div className="flex justify-center items-center h-screen">
  <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  </svg>
</div> */}


            </form>
        </div>
    )
}

export default Register