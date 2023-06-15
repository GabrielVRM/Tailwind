import { FiAlertOctagon, FiArchive, FiTrash2, FiEdit3, FiInbox, FiSend,FiFileText } from "react-icons/fi";
import Button, { ButtonWrite } from "../Button";

export default function Sidebar() {
  return (

      <aside className="hidden md:flex flex-col gap-4 py-10">

        <ButtonWrite><FiEdit3/>Escrever</ButtonWrite>
        <Button  active={true}><FiInbox/>Caixa de Entrada</Button>
        <Button><FiSend/>Enviados</Button>
        <Button><FiFileText/>Rascunhos</Button>
        <Button><FiArchive /> Arquivados</Button>
        <Button><FiAlertOctagon/>Spam</Button>
        <Button><FiTrash2/>Lixeira</Button>
      </aside>

  );
}
