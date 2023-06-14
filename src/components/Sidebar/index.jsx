import { FiAlertOctagon, FiArchive, FiTrash2 } from "react-icons/fi";
import Button, { ButtonWrite } from "../Button";

export default function Sidebar() {
  return (

      <aside className="hidden md:flex flex-col gap-4 py-10">

        <ButtonWrite>Escrever</ButtonWrite>
        <Button active={true}>Caixa de Entrada</Button>
        <Button>Enviados</Button>
        <Button>Rascunhos</Button>
        <Button><FiArchive /> Arquivados</Button>
        <Button><FiAlertOctagon/>Spam</Button>
        <Button><FiTrash2/>Lixeira</Button>
      </aside>

  );
}
