import { useRouter } from 'next/router'
interface MuscleProp{
    move_name: string
}

const MusclePage: React.FC<MuscleProp> = ({move_name})=>{
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
    
}
export default MusclePage