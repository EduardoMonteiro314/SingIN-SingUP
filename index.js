let caixa = document.getElementById("caixa")
let form = document.getElementById("form")

let btnMudarForm = document.getElementById("mudarTela")
let btnMostrarSenha = document.getElementById("mostrarSenha")
let btnForm = document.getElementById("btnForm")
let senha = document.getElementById("password")
let inputName = document.getElementById("nome")

let formTituloTela = document.getElementById("tipoTela")
let caixaTituloTela = document.getElementById("tituloMudar")

let esqueceuSenha = document.getElementById("esqueceuSenha")
let textoLogo = document.getElementById("textoLogo")
let textoCaixa = document.getElementById("mensagem")

btnMostrarSenha.addEventListener("click", () =>{
    if(senha.type == "password"){
        senha.type = "text"
        btnMostrarSenha.style.backgroundImage = "url(images/olhoRisco.png)"
    }else{
        senha.type = "password"
        btnMostrarSenha.style.backgroundImage = "url(images/olho.png)"
    }
})

let animation
let clique
btnMudarForm.addEventListener("click", () =>{
    if(clique == null){clique = false}
    if(clique != false){return}
    clique = true

    animationTexto("texto 1s")

    if(caixa.style.animation == animation){
        caixa.style.animation = "moverContrario 1s  ease-in-out forwards"
        form.style.animation = "moverContrario2 1s  ease-in-out forwards"
    }else{
        caixa.style.animation = "mover 1s ease-in-out forwards"
        form.style.animation = "mover2 1s  ease-in-out forwards"
        animation = caixa.style.animation
    }

    setTimeout(() => {
        if(caixa.style.animation == animation){
            definirCampos("none","block","Sign In","or use your email account",
            "SING IN","Hello, Friend!",
            "Enter your personal details <br> and start journey with us",
            "SING UP")
        }else{
            definirCampos("block","none","Create Account",
            "or use your email for registration",
            "SING UP","Welcome Back!",
            "To keep connected with us <br> please login with your personal info",
            "SING IN")

        }
        setTimeout(()=>{clique = false ; animationTexto("") },500)
    },500)
})

function definirCampos(inName,esSenha,foTiTela,teLogo,btForm,caTiTela,teCaixa,btMuForm){
    inputName.style.display = inName
    esqueceuSenha.style.display = esSenha
    formTituloTela.innerHTML = foTiTela
    textoLogo.innerHTML = teLogo
    btnForm.innerHTML = btForm

    caixaTituloTela.innerHTML = caTiTela
    textoCaixa.innerHTML = teCaixa
    btnMudarForm.innerHTML = btMuForm
}

function animationTexto(animacao){
    caixaTituloTela.style.animation = animacao
    textoCaixa.style.animation = animacao
    btnMudarForm.style.animation = animacao
}