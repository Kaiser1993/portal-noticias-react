import { Link } from "react-router";

function MenuAdm(){
    return(
<>
<h1 className="destaque">
        Área administrativa
    </h1>
    
<nav className="menu">
    <p>
        <Link to="/telacadastroadm" className="botao-menu">
        Cadastro de Administrador
        </Link>
        <Link to="/telaListaAdm" className="botao-menu">
        Listagem de Administradores
        </Link>
        
        </p>
</nav>
</>
)
}
export default MenuAdm;