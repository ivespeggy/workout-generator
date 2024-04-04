'use client';
import React, { useState } from 'react';
import { useLoginEmailStore, useRegisterMsgDisplayStatusStore, useRegisterMsgStore} from '../../store/useLoginStore';
import { loginRequest } from '../../service/loginService';
import { validate_email } from '../../Utils/validate_email';

interface LoginProp{
    isOpen: boolean;
    onClose: (data:{outboundEmail?:string, purpose: 'signup' | 'login' | 'initialization'})=> void;
}


// const Register:React.FC<RegisterProp> = ({isOpen,onClose})  => {


const Login:React.FC<LoginProp> = ({isOpen,onClose}) => {
    const email = useLoginEmailStore(state => state.email)
    const setEmail = useLoginEmailStore(state => state.setEmail)

    const onDisplay = useRegisterMsgDisplayStatusStore(state => state.status)
    const setOnDisplay = useRegisterMsgDisplayStatusStore(state => state.setStatus)

    const message = useRegisterMsgStore(state => state.msg)
    const setMessage = useRegisterMsgStore(state => state.setMsg)


    const [loginState, setLoginState] = useState({
        username: "",
        password: "",
    });

    const handleEmailOnChange = (event:React.ChangeEvent <HTMLInputElement>) =>{
        setEmail(event.target.value)
    }
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) =>{

        event.preventDefault()

        if(validate_email(email)){
            setOnDisplay(true)
            try {
                
                setMessage("We are processing...")
                const data = await loginRequest(email.toLowerCase())
                setTimeout(() => {
                    onClose({outboundEmail:email,purpose:'login'})              
                }, 1500);



                
            } 
            catch (error) {
                console.log(error)
                setMessage("Please double-check your email.")                
            }
        }
        else{
            setOnDisplay(true)
            setMessage('Please retry your email.')
        }
    }

    // const handleChange = (e) => {
    //     setLoginState({
    //         ...loginState,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <div className="login-wrapper">
            <form>
                <h1 className='text-center'>Login</h1>
                <div className="input-group">
                    <input
                        type="text"
                        name="email"

                        placeholder="Email"
                        onChange={handleEmailOnChange}
                        className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                        // onChange={handleChange}
                    />
                </div>
                {onDisplay&&<div className="flex justify-center items-center">
                    <div className=""></div>
                    <span className="self-center ml-2">{message}</span>
                 </div>}

                

                <button onClick={(event)=>{handleSubmit(event)}}type="submit" className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Login


