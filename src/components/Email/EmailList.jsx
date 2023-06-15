import {FiUser} from 'react-icons/fi'
import AvatarList from './Avatar'

export default function EmailList({email, onClick}) {
    return(
        <>
        <article className="mt-10 flex items-center gap-4 [&+article]:mt-4 p-2 hover:cursor-pointer hover:bg-zinc-600 transition-colors"
        onClick={onClick}
        >
<AvatarList letter={email.from[0].toUpperCase()} />
<div className=' grow shrink basis-40' >
<strong className='flex gap-4 text-zinc-100' >  {email.subject}</strong>

   <p className='text-zinc-100'>{email.body.length > 64 ? email.body.slice(0, 64) + '...' : email.body}</p>
</div>      
  </article>

        </>
    )   
}