import Button, { ButtonWrite } from "../Button";

export default function Sidebar() {
  return (

      <aside className="hidden md:flex flex-col gap-4 py-10">

        <ButtonWrite>Escrever</ButtonWrite>
        <Button active={true}>Caixa de Entrada</Button>
        <Button>Enviados</Button>
        <Button>Rascunhos</Button>
        <Button>Arquivados</Button>
        <Button>Spam</Button>
        <Button>Lixeira</Button>
      </aside>

  );
}
