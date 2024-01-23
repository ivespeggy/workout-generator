'use client'
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck,faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
const NavbarUsers = ()=> {

    return(
        <>
                <div className='flex items-center'>
                    <Link href={"/"} passHref>
                    <button className='pl-2' onClick={() => console.log("Home Button Clicked")}>
                        Home1
                    </button>
                    </Link>
                </div>

                <div className='flex items-center'>
                <Link href="/plans" passHref>
                        <div className='flex flex-col items-center'>
                            <FontAwesomeIcon icon={faListCheck} size="sm" style={{ width: '18px', height: '18px' }} />
                            <button className='pl-2' onClick={() => {
                                console.log(110)
                            }}>
                                Plans
                            </button>
                        </div>
                    </Link>
                    <Link href="/muscles" passHref>

                        <div className='flex flex-col items-center cursor-pointer'>
                            <FontAwesomeIcon icon={faDumbbell} size="sm" style={{ width: '18px', height: '18px' }} />
                            <button className='pl-2' onClick={() => {
                                console.log(110)
                            }}>
                                Muscles
                            </button>
                        </div>
                    </Link>

                </div>
        </>
    )
}

export default NavbarUsers