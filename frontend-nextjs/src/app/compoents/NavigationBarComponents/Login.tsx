'use client';
import React, { useState } from 'react';

const Login = () => {
    const [loginState, setLoginState] = useState({
        username: "",
        password: "",
    });

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
                        name="username"
                        placeholder="Username"
                        className="p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                        // onChange={handleChange}
                    />
                </div>

                <button type="submit" className="flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Login


