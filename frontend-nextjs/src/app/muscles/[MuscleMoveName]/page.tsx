import Image from 'next/image'
import { GetServerSideProps } from 'next';
import { notFound } from 'next/navigation';
import musclesData from '../../MuscleData/Muscles';
import { MuscleGroup } from '../../MuscleData/Muscles';
import { MuscleGroupUtils } from '../../MuscleData/Muscles';

export default function MusclePage({params}:{
    params:{MuscleMoveName:string}
}){
    var selectedMoveName = decodeURIComponent(params.MuscleMoveName).toLowerCase()
    
    console.log("Fetched Name is "+selectedMoveName)
    return (     
        <div className='flex flex-row'>
            <Image
            src={`/muscles/${selectedMoveName}.jpg`}
            width={200}
            height={350}
            alt="Picture of the author"
            />

            <strong className='p-4'>
                {selectedMoveName}
            </strong>

            
        </div>       

    )
}