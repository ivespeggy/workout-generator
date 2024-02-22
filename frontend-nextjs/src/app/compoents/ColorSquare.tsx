import React from 'react';

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

    return (
        <div>
        {d}
        <div className="w-4 h-4 bg-green-500">
        </div>
        

        </div>

    )
}

export default ColorSquare