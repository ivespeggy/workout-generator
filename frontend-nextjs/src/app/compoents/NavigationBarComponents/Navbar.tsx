'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import PopupWindow from './PopupWindow';
import NavbarUsers from './NavBarUsers';
import NavBarVistors from './NavBarVistors';

const handleOnClose = (data:{email?:string, purpose: 'signup' | 'login' | 'initialization'}) =>{
    console.log("On Handle Close revoked")
    if(data){
        console.log("EMAIL IN NAV BAR is "+data.email)
        console.log("Purpose in Nav BArIS "+data.purpose)
    }

    else{
        console.log("NOT PASSED")
    }
}

const Navbar = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [purpose, setPurpose] = useState<'signup' | 'login' | 'initialization'>('initialization');
    const [NavbarStates, setNavbarStates] = useState<'users' | 'vistors'>('users')
    
    return (
        <>
            <nav className='flex justify-between w-full items-center text-black' style={{height: '15vh'}}>
            {NavbarStates === 'users' ? <NavBarVistors/> : <NavbarUsers/>}
            </nav>



            <PopupWindow isOpen={isPopupOpen} onClose={({email:email, purpose:purpose}) => {
                setPopupOpen(false)
                handleOnClose({email:email, purpose:purpose})
                
            }} purpose={purpose} />
        </>
    );
};

export default Navbar;
