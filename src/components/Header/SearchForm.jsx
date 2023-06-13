import {FiSearch} from 'react-icons/fi'

export default function SearchForm (){
    return(
        <>
      <form className='min-w-0  flex-grow flex xl:'
      onSubmit={(eve) => { eve.preventDefault()}}
      >
        <input className=' min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent bg-zinc-700 focus:outline-none focus:border-zinc-50 transition-colors' type="text" placeholder="Pesquisar..."/>
        <button className='min-w-0 py-2  rounded-r-lg px-4 bg-zinc-700  border-2 border-transparent  hover:outline-none hover:border-zinc-50 transition-colors'> 
            <FiSearch color='white'/>
            </button>        
        
      </form>
        </>
    )
}