'use client'
import React, {useState} from "react";
const Register = () => {
    const [registerState, setRegisterState] = useState({
        username: "",
        password: "",
    });
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
                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        // onChange={handleChange}
                    />
                </div>
                <button type="submit" className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register