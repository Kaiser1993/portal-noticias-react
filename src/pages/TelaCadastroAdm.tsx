import MenuAdm from "../components/MenuAdm"

function TelaCadastroAdm(){
    return(
        <>
        <MenuAdm/>
        <h1 >
            Tela de cadastro de administrador
            </h1>

            <main id="conteudoPrincipal">
<div id="divMensagem" role="alert"></div>
<form id="formCadastroAdm">

<div>
    <label htmlFor="txtNome">
Nome
    </label>
    <br/>
    <input type="text" id="txtNome" required/>
</div>
    
    <div>
                <label htmlFor="txtEmail">
                    E-mail
                </label>
                <br/>
            <input type="email" id="txtEmail" required/>
             </div>
            <div>
                <label htmlFor="txtSenha">
                Senha 
                </label>
                <br/>
            <input type="password" id="txtSenha" required/>
 
</div>

 <div>
                <button type="submit">
                    Enviar
                </button>       
            </div>
        </form>
</main>
        </>
    )
}
export default TelaCadastroAdm