import Image from 'next/image'
import { GetServerSideProps } from 'next';
import { notFound } from 'next/navigation';
import musclesData from '../../MuscleData/Muscles';
import { MuscleGroup } from '../../MuscleData/Muscles';
import { MuscleGroupUtils } from '../../MuscleData/Muscles';

export default function MusclePage({params}:{
    params:{MuscleMoveName:string}
}){
    const selectedMoveName = decodeURIComponent(params.MuscleMoveName)
    const result = MuscleGroupUtils.searchForMuscle(selectedMoveName)
    console.log(result)

    return (     
        <div className='flex flex-row'>
            <Image
            src="/muscles/deltoids.png"
            width={200}
            height={350}
            alt="Picture of the author"
            />

            <strong className='p-4'>
                Move ID: {selectedMoveName}
            </strong>

            
        </div>       

    )
}