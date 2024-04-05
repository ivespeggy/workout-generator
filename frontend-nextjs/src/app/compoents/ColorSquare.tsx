'use client'
import React from 'react';
import { useState } from 'react';
import { usePixelSquareStore } from '../store/usePlanStore';
export enum daysOfWeekChar{
    M = "M",
    T = "T",
    W = "W",
    R = "R",
    F = "F",
    S = "S",
    U = "U",
    D = "Default"
}
interface ColorSquareProp{
    d: string    
}
const ColorSquare:React.FC<ColorSquareProp> = ({d})=>{
    const isSelected = usePixelSquareStore(state => state.OnSelectStatus)
    const setSelected = usePixelSquareStore(state => state.toggleSelect)
    const handleClickAction = () =>{
        setSelected()
    }

    return (
        <div>
        {d}
        {isSelected?
                <div className="w-4 h-4 bg-green-500" onClick={handleClickAction}>
                </div>
                :
                <div className="w-4 h-4 bg-red-500" onClick={handleClickAction}>
                </div>

                
            
        }
        

        </div>

    )
}

export default ColorSquare