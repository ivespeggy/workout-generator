'use client';
import React, { useState } from 'react';
import ColorSquare from '../ColorSquare';
import { daysOfWeekChar } from "../ColorSquare"

interface PopupWindowCreatePlanProp{
    isOpen: boolean;
    onClose: ()=> void;
}


// const Register:React.FC<RegisterProp> = ({isOpen,onClose})  => {


const PopupWindowCreatePlan:React.FC<PopupWindowCreatePlanProp> = ({isOpen,onClose}) => {
    const weekInitials = ['M','T','W','R','F','S','U']


    return (
        <div className="create-plan-wrapper">
                    <ColorSquare d={'d'}></ColorSquare>
                    <ColorSquare d={'g'}></ColorSquare>
                    <ColorSquare d={'x'}></ColorSquare>
                    <ColorSquare d={'z'}></ColorSquare>

            {/* {
                weekInitials.map((val, index) =>(
                    // <p key={index}>{val}</p>
                    <ColorSquare d={val}></ColorSquare>
                ))
            } */}

        </div>
    )
}
export default PopupWindowCreatePlan


