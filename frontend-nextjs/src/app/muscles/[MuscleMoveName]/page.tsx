

export default function MusclePage({params}:{
    params:{MuscleMoveName:string}
}){
    const displayedMoveName = decodeURIComponent(params.MuscleMoveName)

    return ( 
        <strong>
        Move ID: {displayedMoveName}
        </strong>
    )
}