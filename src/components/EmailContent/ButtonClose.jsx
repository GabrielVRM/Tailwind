import { FiX } from "react-icons/fi";

export default function CloseButton({onclick}) {

    return(
        <button
        className=" absolute top-2 right-2 px-2 pb-1 rounded bg-red-500 hover:bg-red-700 transition-colors" 
        onClick={onclick}
        >
            <FiX className="inline sm-mr-1 mb-1" />
            <span className="hidden sm:inline"> Fechar</span>
        </button>
    )
    
}