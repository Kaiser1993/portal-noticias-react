import "../styles/menuAcessibilidade.css"

function MenuAcessibilidade(){
    return(
        <>
<div>

<span aria-label="Início da página">&nbsp;</span>

<a href="#conteudoPrincipal" className="skipLink">
    Ir para o conteúdo principal
</a>

<button id="btnAcessibilidade" aria-expanded="false">
    <img src="./acessibilidade.png" width="25" alt="ícone de acessibilidade"></img>
</button>
<div id="menuAcessibilidade" hidden>
<button id="btnAumentarFonte" aria-label="aumentarFonte">
Aumentar fonte
</button>
<button id="btnDiminuirFonte" aria-label="diminuirFonte">
Diminuir fonte
</button>
<button id="btnAlterarContraste" aria-label="alterarContraste">
Alterar contraste
</button>
</div>
    </div>
    
        </>
    )
}

export default MenuAcessibilidade