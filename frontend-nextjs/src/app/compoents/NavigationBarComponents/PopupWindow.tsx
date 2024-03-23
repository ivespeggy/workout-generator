import react from 'react'
import SignUp from './Register';
import Login from './Login';
interface PopupWindowProp{
    isOpen: boolean;
    onClose: ()=> void;
    purpose:'signup' | 'login' | 'initialization'
}

const PopupWindow: React.FC<PopupWindowProp> = ({isOpen,onClose,purpose}) =>{
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

    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-4 rounded" style={{ minWidth: "300px" }}>
        {purpose === 'signup' ? <SignUp/> : <Login />}
        <button onClick={onClose} className="absolute top-0 right-0 m-2 border rounded-full bg-red-500 text-white text-lg flex items-center justify-center w-8 h-8">
        &times;
        </button>

      </div>
    </div>



    )
}

 export default PopupWindow