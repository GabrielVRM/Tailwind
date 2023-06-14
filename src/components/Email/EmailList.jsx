export default function EmailList({email, onClick}) {
    return(
        <>
        <article className=""
        onClick={onClick}
        >
<div>
    <strong >{email.subject}</strong>
    <p>{email.body.length > 64 ? email.body.slice(0, 64) + '...' : email.body}</p>
</div>      
  </article>
        </>
    )   
}