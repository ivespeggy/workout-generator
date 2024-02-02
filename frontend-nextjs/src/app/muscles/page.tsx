'use client';

import React, { useEffect, useState } from 'react';
import musclesData from "../MuscleData/Muscles";
import { MuscleGroup } from '../MuscleData/Muscles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Muscles() {
  const router = useRouter()

  const [clickState, setClickState] = useState<Record<number, number>>(
    Object.fromEntries(Object.keys(musclesData).map(key => [parseInt(key), 0]))
  );

  

  const ClickAction = (clickId: number) => {
    setClickState(prevState => ({
      ...prevState,
      [clickId]: prevState[clickId] === 0 ? 1 : 0
    }));
  };
  const JumpAction = (selectedMuscle: string) =>{
    router.push(`/muscles/${encodeURIComponent(selectedMuscle)}`);

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
                  
                  <div className='flex flex-row items-center'>
                    <div className='cursor-pointer' onClick={() => ClickAction(id)}>
                      <strong className='mr-2 mt-2 py-1'>{name_cn}</strong>
                      <strong className='mr-4 mt-2 py-1'>{name_en}</strong>
                    </div>
                    <button className="rounded-lg bg-green-500 px-2 py-1 text-sm my-1 " onClick={()=> JumpAction(name_en)}>Click</button>

                  </div>

                  {clickState[id] === 1 && (
                    <ul>
                      {training_moves.map((move, index) => (
                        <li key={index} className='cursor-pointer'>
                            <strong>
                              {move}
                            </strong>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    </>
  )
}