'use client'
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck,faDumbbell } from '@fortawesome/free-solid-svg-icons';

const NavbarUsers = ()=> {

    return(
        <>
                <div className='flex items-center'>
                    <button className='pl-2' onClick={() => console.log("Home Button Clicked")}>
                        Home1
                    </button>
                </div>

                <div className='flex items-center'>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faListCheck} size="sm" style={{ width: '18px', height: '18px' }} />
                        <button className='pl-2' onClick={() => {
                            console.log(110)
                        }}>
                            Plans
                        </button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FontAwesomeIcon icon={faDumbbell} size="sm" style={{ width: '18px', height: '18px' }} />
                        <button className='pl-2' onClick={() => {
                            console.log(110)
                        }}>
                            Muscles
                        </button>
                    </div>
                </div>
        </>
    )
}

export default NavbarUsers