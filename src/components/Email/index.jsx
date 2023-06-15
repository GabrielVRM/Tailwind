import emails from "../../../Emails.json"
import EmailList from "./EmailList"
export default function Emaillist({setOpenEmail}) {

    return(
        <div className="relative overflow-y-scroll md:scrollbar-thin">
            {emails.map(email => (

<EmailList key={email.id} email={email} onClick={() => setOpenEmail(email)}/>
            ))}
        </div>
    )
}