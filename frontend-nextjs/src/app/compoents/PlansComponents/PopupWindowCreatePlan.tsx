'use client';
import React, { useState } from 'react';
import ColorSquare from '../ColorSquare';
import Selector from './Selector';
interface PopupWindowCreatePlanProp{
    isOpen: boolean;
    onClose: ()=> void;
}


// const Register:React.FC<RegisterProp> = ({isOpen,onClose})  => {


const PopupWindowCreatePlan:React.FC<PopupWindowCreatePlanProp> = ({isOpen,onClose}) => {
    return (
        <div className="create-plan-wrapper ">
            <div className='flex items-center space-x-4 mt-5 mb-2'>
                        <ColorSquare d={'M'}></ColorSquare>
                        <ColorSquare d={'T'}></ColorSquare>
                        <ColorSquare d={'W'}></ColorSquare>
                        <ColorSquare d={'R'}></ColorSquare>
                        <ColorSquare d={'F'}></ColorSquare>
                        <ColorSquare d={'S'}></ColorSquare>
                        <ColorSquare d={'U'}></ColorSquare>

            </div>
            <div>

                <Selector/>

            </div>

        </div>
    )
}
export default PopupWindowCreatePlan


