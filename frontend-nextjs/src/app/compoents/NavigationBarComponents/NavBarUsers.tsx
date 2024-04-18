'use client'
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck,faDumbbell, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useSharedLoginEmailInfoStore } from "../../store/useLoginStore";
const NavbarUsers = ()=> {
    let logout = useSharedLoginEmailInfoStore(state => state.logout)
    const handleLogout = () =>{
        console.log("Logout Handled...")
        localStorage.removeItem('jwtToken')
        logout()
    }

    return(
        <>
                <div className='flex items-center hover:border-gray-300 hover:bg-gray-100 ml-4 '>
                    <Link href={"/"} passHref>
                    <button className='pl-2 mr-2' onClick={() => console.log("Home Button Clicked")}>
                        Home
                    </button>
                    </Link>
                </div>

                <div className='flex items-center'>
                <Link href="/plans" passHref>
                        <div className='flex flex-col items-center'>
                            <FontAwesomeIcon icon={faListCheck} size="sm" style={{ width: '18px', height: '18px' }} />
                            <button className='pl-2' onClick={() => {
                            }}>
                                Plans
                            </button>
                        </div>
                    </Link>
                    <Link href="/muscles" passHref>

                        <div className='flex flex-col items-center cursor-pointer mr-4'>
                            <FontAwesomeIcon icon={faDumbbell} size="sm" style={{ width: '18px', height: '18px' }} />
                            <button className='pl-2' onClick={() => {
                            }}>
                                Muscles
                            </button>

                            {/* <i class="fa-solid fa-arrow-right-from-bracket"></i> */}
                        </div>
                    </Link>
                        <div className="flex flex-col items-center mr-4 cursor-pointer" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faArrowRight} size="sm" style={{ width: '18px', height: '18px' }} />
                                <span className="pl-2">
                                    Logout
                                </span>
                                
                            
                        </div>

                </div>
        </>
    )
}

export default NavbarUsers