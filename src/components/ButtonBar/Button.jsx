
export default function Button ({children, active, onClick }){
    
    return(
        <>
        <button onClick={onClick} className={`flex-1 bg-zinc-900 p-2 mb-0.5 rounded-lg shadow text-zinc-50  ${active ? "bg-emerald-600" : "hover:bg-emerald-600" }`}>
{children} 
        </button>
        </>
    )
}