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
    selectOnChange?: (isSelected: boolean,d:daysOfWeekChar)=> void
    
}
const ColorSquare:React.FC<ColorSquareProp> = ({d,selectOnChange})=>{
    const [isSelected, setSelected] = useState(true)

    const handleClickAction = ()=>{
        const newSelectState = !isSelected
        setSelected(newSelectState)
        selectOnChange?.(newSelectState,d)
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