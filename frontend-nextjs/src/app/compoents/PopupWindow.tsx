import react from 'react'

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
            //should not happen though
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
          <h2 className="text-lg">{displayPurpose}</h2>
          <button onClick={onClose} className="border p-2 rounded mt-2">
            Close
          </button>
        </div>
      </div>


    )
}

 export default PopupWindow