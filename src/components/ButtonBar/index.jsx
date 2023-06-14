import { useState } from "react";
import { FiEdit3, FiFileText, FiInbox, FiMenu, FiX, FiArchive, FiAlertOctagon, FiTrash2 } from "react-icons/fi";
import Button from "./Button";

const inlineIcon = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className=" w-full flex gap-2 md:hidden items-center relative">
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      <Button >
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      <Button>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      <Button onClick={() => setIsMenuOpen(state => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>
      <div className={`${isMenuOpen ? "absolute" : "hidden"}
      right-0 bottom-12 flex flex-col
      `}>
 <Button><FiArchive className="inline mr-2 mb-1"/>Arquivados</Button>
        <Button><FiAlertOctagon className="inline mr-2 mb-1"/>Span</Button>
        <Button><FiTrash2 className="inline mr-2 mb-1"/>Lixeira</Button>
      </div>
    </div>
  )
}

export default Bottombar