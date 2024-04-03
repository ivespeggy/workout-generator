import react from 'react'
import Register from './Register';
import Login from './Login';
import { useSharedLoginEmailInfoStore } from '../../store/useLoginStore';
interface PopupWindowProp{
    isOpen: boolean;
    onClose: (data:{email?:string, purpose: 'signup' | 'login' | 'initialization'})=> void;
    purpose:'signup' | 'login' | 'initialization'
}



const PopupWindow: React.FC<PopupWindowProp> = ({isOpen,onClose,purpose}) =>{

    // const outboundEmail = useSharedLoginEmailInfoStore(state => state.email)
    // const outboundPurpose = useSharedLoginEmailInfoStore(state => state.purpose)
    const setOutboundEmail = useSharedLoginEmailInfoStore(state => state.setEmail)
    const setOutboundPurpose = useSharedLoginEmailInfoStore(state =>state.setPurpose)


    const handleOnClose = (data:{email?:string, purpose: 'signup' | 'login' | 'initialization'}) =>{
        console.log("On Handle Close revoked IN popup")
        if(data){
            console.log(data.email)
            console.log("Purpose IS in popup"+data.purpose)
            console.log("--------------------------------")
            if (data.email !== undefined){
                setOutboundEmail(data.email)
                setOutboundPurpose(data.purpose)
            }
            onClose(data)

    
        }
    
        else{
            console.log("NOT PASSED")
        }
    }

    if (!isOpen) return null;
    console.log(purpose)
    var displayPurpose:String = ""
    switch (purpose){
        case 'signup':
            displayPurpose = 'Sign UP'
            break
        case 'login':
            displayPurpose = 'Login'
            break
        default:
            displayPurpose = 'Initialization'
            break
            //theoretically should not happen though
    }

    return (

    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" style={{zIndex:10000}}>
        {/* Register and login should be on top of every component, hence z-index is 100000*/}
      <div className="relative bg-white p-4 rounded" style={{ minWidth: "300px" }}>
        {purpose === 'signup' ? 
        <Register isOpen={true} onClose={
            ({outboundEmail:email, purpose:purpose}) => handleOnClose({email:email,purpose:purpose})
        } />
        : 

        // <Login isOpen={isOpen} onClose={(data) => onClose(data)} />
        <Login isOpen={true} onClose={
            ({outboundEmail:email, purpose:purpose}) => handleOnClose({email:email,purpose:purpose})
            } />
        }

        <button onClick={()=>handleOnClose({purpose:'initialization'})} className="absolute top-0 right-0 m-2 border rounded-full bg-red-500 text-white text-lg flex items-center justify-center w-8 h-8">
        &times;
        </button>

      </div>
    </div>



    )
}

 export default PopupWindow