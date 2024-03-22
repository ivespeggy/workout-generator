'use client'
import React, {useState} from "react"
import useOtpCodeStore from "../../store/otpCodeStore"
const Register = () => {
    const otpBoxState = useOtpCodeStore(state => state.OtpInputBoxState)
    const toggleOtpBoxState = useOtpCodeStore(state => state.setOtpInputState)
    const [registerState, setRegisterState] = useState({
        username: "",
        password: "",
    });
    const handleButtonClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        console.log("butotn Clicked")
        console.log(otpBoxState)
        toggleOtpBoxState()
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
                        // onChange={handleChange}
                    />
                </div>
                {
                    otpBoxState &&
                    <div className="input-group">
                    <input
                        type="text"
                        name="otp-code"
                        placeholder="enter your otp code"
                    />
                </div>
                }
                <button onClick={handleButtonClick} className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register