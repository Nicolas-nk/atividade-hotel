function navegacao(x){
	
    // opção 1 -  aparecer pag home
    if (x===1){
        document.getElementById("home").style.display="block";
        document.getElementById("login").style.display="none";
        document.getElementById("criarConta").style.display="none";
        document.getElementById("reservas").style.display="none";
        document.getElementById("confirm").style.display="none";
    } 

     // opção 2 -  aparecer pag de login
     else	if (x===2){
        document.getElementById("home").style.display="none";
        document.getElementById("login").style.display="block";
        document.getElementById("criarConta").style.display="none";
        document.getElementById("reservas").style.display="none";
        document.getElementById("confirm").style.display="none";
    }

     // opção 3 -  aparecer pag de reservas
     else if (x===3){
        document.getElementById("home").style.display="none";
        document.getElementById("login").style.display="none";
        document.getElementById("criarConta").style.display="none";
        document.getElementById("reservas").style.display="block";
        document.getElementById("confirm").style.display="none";
    }

     // opção 4 -  aparecer pag de criar conta *pag atrelada com login
     else if (x===4){
        document.getElementById("home").style.display="none";
        document.getElementById("login").style.display="none";
        document.getElementById("criarConta").style.display="block";
        document.getElementById("reservas").style.display="none";
        document.getElementById("confirm").style.display="none";
    }

     // opção 5 -  aparecer pag de confirmação de dados *pag atrelada com reservas
     else{
        document.getElementById("home").style.display="none";
        document.getElementById("login").style.display="none";
        document.getElementById("criarConta").style.display="none";
        document.getElementById("reservas").style.display="none";
        document.getElementById("confirm").style.display="block";
    }
}

function hideMenu(){
    document.getElementById('check').checked = false;
}