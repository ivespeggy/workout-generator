'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import PopupWindow from './PopupWindow';
import NavbarUsers from './NavBarUsers';
import NavBarVistors from './NavBarVistors';
import { useSharedLoginEmailInfoStore } from '../../store/useLoginStore';

const Navbar = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [purpose, setPurpose] = useState<'signup' | 'login' | 'initialization'>('initialization');
    const [NavbarStates, setNavbarStates] = useState<'users' | 'vistors'>('users')

    const purposeOf = useSharedLoginEmailInfoStore(state => state.purpose)
    const email = useSharedLoginEmailInfoStore(state => state.email)
    const updatingNavbar = ()=>{
        if (purposeOf !== 'initialization' && purposeOf ==='login')
        {
            return <NavbarUsers/>
        }
        else{
            return <NavBarVistors/>

        }
    }
    return (
        <>
            <nav className='flex justify-between w-full items-center text-black' style={{height: '15vh'}}>
            {updatingNavbar()}

            </nav>
            <PopupWindow isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} purpose={purpose} />
        </>
    );
};

export default Navbar;
