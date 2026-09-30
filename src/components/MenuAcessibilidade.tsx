import "../styles/menuAcessibilidade.css"
import useAcessibilidade from "../hooks/useAcessibilidade"

function MenuAcessibilidade(){

const {menuAberto, abrirMenu, aumentarFonte, diminuirFonte, alterarContraste} = useAcessibilidade()

    return(
        <>
<div>

<span aria-label="Início da página">&nbsp;</span>

<a href="#conteudoPrincipal" className="skipLink">
    Ir para o conteúdo principal
</a>

<button id="btnAcessibilidade" aria-expanded={menuAberto} onClick={abrirMenu}>
    <img src="./acessibilidade.png" width="25" alt="ícone de acessibilidade"></img>
</button>
<div id="menuAcessibilidade" hidden={!menuAberto}>
<button id="btnAumentarFonte" aria-label="aumentarFonte" onClick={aumentarFonte}>
Aumentar fonte
</button>
<button id="btnDiminuirFonte" aria-label="diminuirFonte" onClick={diminuirFonte}>
Diminuir fonte
</button>
<button id="btnAlterarContraste" aria-label="alterarContraste" onClick={alterarContraste}>
Alterar contraste
</button>
</div>
    </div>
    
        </>
    )
}

export default MenuAcessibilidade