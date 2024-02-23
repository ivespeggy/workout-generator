'use client'
import React from 'react';
import { useState } from 'react';
export enum daysOfWeekChar{
    M = "M",
    T = "T",
    W = "W",
    R = "R",
    F = "F",
    S = "S",
    U = "U"

}
interface ColorSquareProp{
    d: daysOfWeekChar
    
}
const ColorSquare:React.FC<ColorSquareProp> = ({d})=>{
    const [isSelected, setSelected] = useState(true)

    const handleClickAction = ()=>{
        setSelected(!isSelected)
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