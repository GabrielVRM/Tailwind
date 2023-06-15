import Button from "../ButtonBar/Button";
import CloseButton from "./ButtonClose";



export default function EmailContent({email, setOpenEmail}) {
    
    return(
        
        <div className={`p-2 md:p-4 absolute lg:relative h-full w-full bg-gray-700 text-gray-50 grow-[2] basis-96 `}>
<CloseButton onclick={() => setOpenEmail(null)} />
    <div className="text-lg bold" >{email.subject}</div>
<div className="text-gray-500">De: {`<${email.from}`}</div>
<div className="text-gray-500">Para: {`<gabriel.vieira2595@gmail.com>`}</div>
<div className="text-gray-500"> Em: {email.createdAt}</div>
<hr className="mt-5"/>
{email.body}
        </div>
    )
}