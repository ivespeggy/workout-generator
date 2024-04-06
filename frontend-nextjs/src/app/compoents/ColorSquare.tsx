'use client'
import React from 'react';
import { useState } from 'react';
import { usePixelSquareStore,useDaysInWeekStore } from '../store/usePlanStore';

interface ColorSquareProp{
    d: string    
}
const ColorSquare:React.FC<ColorSquareProp> = ({d})=>{
    const toggleDay = useDaysInWeekStore(state => state.toggleDay)
    const everyday = useDaysInWeekStore(state => state.daysOfWeek[d])

    const handleClickAction = () =>{
        // console.log("D is "+d)
        // setSelected()
        toggleDay(d)
        console.log("Everyday is "+everyday)
    }

    return (
        <div>
        {d}
        {everyday?
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