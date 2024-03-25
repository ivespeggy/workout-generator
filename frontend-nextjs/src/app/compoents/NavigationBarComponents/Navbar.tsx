'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import PopupWindow from './PopupWindow';
import NavbarUsers from './NavBarUsers';
import NavBarVistors from './NavBarVistors';

const Navbar = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [purpose, setPurpose] = useState<'signup' | 'login' | 'initialization'>('initialization');
    const [NavbarStates, setNavbarStates] = useState<'users' | 'vistors'>('users')
    
    return (
        <>
            <nav className='flex justify-between w-full items-center text-black'>
            {NavbarStates === 'vistors' ? <NavBarVistors/> : <NavbarUsers/>}
            </nav>
            <PopupWindow isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} purpose={purpose} />
        </>
    );
};

export default Navbar;
