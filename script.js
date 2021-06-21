function gerarCor(){

    var hexadecimais = "0123456789ABCDEF";
    var cor = "#";

    for (var i = 0; i < 6; i++ ) {

        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function consultar(){

    var elem_msg = document.getElementById("div_msg");
    var elem_img = document.getElementById("img_sexo");
    var cksex = document.getElementsByName("ckSexo");   
    var botao = document.getElementById("btn_consulta");
    var anoInformado = document.getElementById("ano_informado");
    var data = new Date();
    var anoAtual = data.getFullYear();
    var idade = anoAtual - Number(anoInformado.value);

    if (cksex[0].checked){    
        elem_img.src = "img/homem.png";  
        elem_msg.innerHTML =  "<br> A idade da pessoa do sexo masculino é de " + idade + " anos.";
        document.body.style.background = gerarCor();      
    } 
        
    else if (cksex[1].checked) {
        elem_img.src = "img/mulher.png";
        elem_msg.innerHTML =  "<br>A idade da pessoa do sexo feminino é de " + idade + " anos.";
        document.body.style.background = gerarCor();
    }

    else{
        alert("Informe o ano de nascimento");
    }
}  
