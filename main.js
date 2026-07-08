function entrar(){

    let email= document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem =document.getElementById("mensagem")

    for(let i = 0; i < usuarios.length; i++){

        if(usuarios[i].email === email && usuarios[i].senha === senha){
            mensagem.style.opacity = "1";
            mensagem.innerHTML = "Login efetuado com sucesso";
            esconderElemento(mensagem);
            esconderElemento(mensagemAviso);
        
            return
        }  mensagem.innerHTML = "Login efetuado com sucesso";
            esconderElemento(mensagem);
            esconderElemento(mensagemAviso);
    }
 
}


        let usuarios = []
function cadastrar(){

    let emailCadastro = document.getElementById("emailCadastro").value;
    let senhaCadastro = document.getElementById("senhaCadastro").value;
    let nomeCadastro = document.getElementById ("nomeCadastro").value;
    let mensagemCadastro = document.getElementById("mensagemCadastro")
    let mensagemAviso = document.getElementById("mensagemAviso"

   )
    if(nomeCadastro ==="" || senhaCadastro ==="" || emailCadastro===""){
        mensagemCadastro.style.opacity = "1"; 
        mensagemAviso.innerHTML="Preencha os campos"
        esconderElemento(mensagemAviso);
        
    }else{
        mensagemCadastro.style.opacity = "1"; 
        mensagemCadastro.innerHTML="Usuario cadastrado com sucesso"
                 esconderElemento(mensagemCadastro);

          
        usuarios.push({
        nome:nomeCadastro,
        senha:senhaCadastro,
        email:emailCadastro
    });


  document.getElementById("emailCadastro").value=""
    document.getElementById("senhaCadastro").value=""
   document.getElementById ("nomeCadastro").value=""

    mostrarLogin();
                return
    
    }

  
    
}

function mostrarCadastro(){
   let painel = document.getElementById("painel")
    painel.style.transform= "translateX(-50%)";

}

function mostrarLogin(){
   let painel = document.getElementById("painel")
    painel.style.transform= "translateX(0%)";
}


function esconderElemento (mensagem,mensagemCadastro,mensagemAviso){

     mensagem.style.opacity = "1";
     setTimeout(() => {
        mensagem.style.opacity = "0";

        setTimeout(() => {
            mensagem.innerHTML = "";
        }, 500);

    }, 3000);

     mensagemCadastro.style.opacity = "1";
     setTimeout(() => {
         mensagemCadastro.style.opacity = "0";

        setTimeout(() => {
             mensagemCadastro.innerHTML = "";
        }, 500);

    }, 3000);
     mensagemAviso.style.opacity = "1";
     setTimeout(() => {
         mensagemAviso.style.opacity = "0";

        setTimeout(() => {
             mensagemAviso.innerHTML = "";
        }, 500);

    }, 3000);
}

