
export default function Button ({children, active, onClick }){
    
    return(
        <>
        <button onClick={onClick} className={`flex 1 p-2 mb-0.5 rounded-lg text-zinc-50  ${active ? "bg-zinc-900" : "hover:bg-zinc-900" }`}>
{children} 
        </button>
        </>
    )
}