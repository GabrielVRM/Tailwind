export default function Container({children}) {
    return(
       
        <div className="bg-zinc-800 px-2 pb-2 xl:px-6 xl:pb-4 h-[calc(100vh_-_4rem)] lg:h-[calc(100vh_-_4rem)]">

{children}
        </div>
       
    )
    
}