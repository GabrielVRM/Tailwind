

export default function Button ({children, active }){
    
    return(
        <>
        <button className={`p-2 text-zinc-50 rounded-lg ${active ? "bg-zinc-900" : "hover:bg-zinc-900" }`}>
{children}
        </button>
        </>
    )
}

export function ButtonWrite ({children }){
    
    return(
        <>
        <button className="bg-emerald-400 hover:bg-emerald-500 text-zinc-50 border-gray-300 rounded-xl h-10 ">
{children}
        </button>
        </>
    )
}