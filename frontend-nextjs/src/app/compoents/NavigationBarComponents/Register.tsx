'use client'
import React, {useState} from "react"
import { useOtpCodeStore } from "../../store/useOtpCodeStore"
import { useOtpTextfieldStore, useEmailTextfieldStore, useSpinnerStore, useOtpCodeCountDownStore, useMessageStore, useRegisterBtnStore } from "../../store/registerStore"
import { requestOTP } from "../../service/requestOTP"
import { validateOTP } from "../../service/validateOTP"
import '../../../../public/css/spinner.css'
import * as EmailValidator from 'email-validator'

interface RegisterProp{
    isOpen: boolean;
    onClose: ()=> void;
}



const Register:React.FC<RegisterProp> = ({isOpen,onClose})  => {
    const otpBoxState = useOtpCodeStore(state => state.OtpInputBoxState)
    const toggleOtpBoxState = useOtpCodeStore(state => state.setOtpInputState)

    const email = useEmailTextfieldStore(state => state.email)
    const setEmail = useEmailTextfieldStore(state => state.setEmail)

    const otpCode = useOtpTextfieldStore(state => state.otpCode)
    const setOtpCode = useOtpTextfieldStore(state => state.setOtpInput)
    
    const spinnerStatus = useSpinnerStore(state => state.loadOn)
    const setSpinnerStatus = useSpinnerStore(state => state.setLoadOn)

    const message = useMessageStore(state => state.msg)
    const setMessage = useMessageStore(state => state.setMsg)

    const countDownSeconds = useOtpCodeCountDownStore(state =>state.countdownSeconds)
    const otpBtnStatus = useOtpCodeCountDownStore(state =>state.disabled)
    const setCountDown = useOtpCodeCountDownStore(state => state.setCountDown)

    const registerBtnStatus = useRegisterBtnStore(event => event.disabled)
    const setRegisterBtn = useRegisterBtnStore(event => event.setDisabled)



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
        if(validate_email(email)){
            setSpinnerStatus(true)
            try{
                setCountDown()
                const data = await requestOTP(email)
                console.log(data)
                toggleOtpBoxState()
                setTimeout(() => {
                    setSpinnerStatus(false)
                }, 3000);
                setMessage("You OTP code has been sent")
                setRegisterBtn(false)
            }
            catch (error){
            console.log("error request")
            console.log(error)
            setTimeout(() => {
                setSpinnerStatus(false)}, 3000);
                setMessage("Network error")
            }
        }
        else{
            setMessage("Please retry your email.")
        }

        //set false after request
    }
    const validate_email = (email:string): boolean =>{
        if(email.length == 0){
            return false
        }
        else if(EmailValidator.validate(email)){
            return true
        }
        else{
            return false
        }
    }
    const handleRegisterClick =  async (event: React.MouseEvent<HTMLButtonElement>)=>{

        event.preventDefault()
        console.log("register button clicked")
        
        try{
            const data = await validateOTP(email, otpCode)
            console.log(data)
            console.log("register btn status"+registerBtnStatus)
            console.log('Successed!')
            onClose()
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
                <button onClick={(event) => handleRegisterClick(event)} disabled={registerBtnStatus}className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-150 ease-in-out mr-auto w-32">
                    Register
                </button>
                {otpBtnStatus?
                        <button onClick={(event)=>handleRequestOTPClick(event)}disabled={otpBtnStatus} className="flex justify-center items-center px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-150 ease-in-out ml-auto w-32">
                            {countDownSeconds}
                        </button>
                        :
                        <button onClick={(event)=>handleRequestOTPClick(event)} className="flex justify-center items-center px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition duration-150 ease-in-out ml-auto w-32">
                            Rquest OTP
                        </button>
                }

                </div>
                {spinnerStatus?
                <div className="flex justify-center items-center">
                    <div className="loading-circle flex"></div>
                    <span className="self-center ml-2">Loading</span>
                </div>
                :
                <div className="flex justify-center items-center">
                    <div className=""></div>
                    <span className="self-center ml-2">{message}</span>
                 </div>
                }
                


            </form>
        </div>
    )
}

export default Register