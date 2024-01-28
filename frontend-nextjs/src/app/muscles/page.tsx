'use client';

import React, { useEffect, useState } from 'react';
import musclesData from "../MuscleData/Muscles";
import { MuscleGroup } from '../MuscleData/Muscles';

export default function Muscles() {
  const [clickState, setClickState] = useState<Record<number, number>>(
    Object.fromEntries(Object.keys(musclesData).map(key => [parseInt(key), 0]))
  );

  const ClickAction = (clickId: number) => {
    setClickState(prevState => ({
      ...prevState,
      [clickId]: prevState[clickId] === 0 ? 1 : 0
    }));
  };
  const JumpAction = (selectedMove: string) =>()=>{
    const JumpAction = (selectedMove: string) => () => {

    };
    
  }

  return (
    <>
      <div>
        <header className="text-center p-4 bg-gray-200">
          <h1 className="text-xl font-bold">title!!!</h1>
          <ul>
            {Object.values(musclesData).map((muscle: MuscleGroup) => {
              const { id, name_cn, name_en, training_moves } = muscle;

              return (
                <li key={id}>
                    <div onClick={()=>{
                        ClickAction(id)
                    }}>
                        <strong>
                            {name_cn}
                        </strong>
                        <strong>
                            {name_en}
                        </strong>
                        
                    </div>
                    {
                        clickState[id] ===1 &&(
                            <ul>
                                {training_moves.map((move,index)=>(
                                      
                                      <li key={index} onClick={JumpAction(move)}>{move}</li>

                                ))}
                            </ul>
                        )
                    }
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    </>
  );
}