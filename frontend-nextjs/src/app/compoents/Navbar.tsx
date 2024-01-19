'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import PopupWindow from './PopupWindow';

const Navbar = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [purpose, setPurpose] = useState<'signup' | 'login' | 'initialization'>('initialization');

    return (
        <>
            <nav className='flex justify-between w-full items-center text-black'>
                <div className='flex items-center'>
                    <button className='pl-2' onClick={() => console.log("Home Button Clicked")}>
                        Home1
                    </button>
                </div>

                <div className='flex items-center'>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faUserPlus} size="sm" style={{ width: '18px', height: '18px' }} />
                        <button className='pl-2' onClick={() => {
                            setPopupOpen(true);
                            setPurpose('login');
                        }}>
                            Login
                        </button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faRightToBracket} size="sm" style={{ width: '18px', height: '18px' }} />
                        <button className='pl-2' onClick={() => {
                            setPopupOpen(true);
                            setPurpose('signup');
                        }}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
            <PopupWindow isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} purpose={purpose} />
        </>
    );
};

export default Navbar;
