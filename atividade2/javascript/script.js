function validar (){

    const idade = document.getElementById('idade').value;
    const nivel = document.getElementById('nivel').value;
    const msg = document.getElementById('mensagem');

    if(idade >= 16 && nivel > 5){
        msg.innerText = "Inscrição aceita: categoria PRO!";
        msg.style.color = "green";
    } else if (idade >= 16 && nivel <= 5){
        msg.innerText = "Inscrição aceita: Categoria Iniciante";
        msg.style.color = "blue";
    } else {
        msg.innerText = "Inscrição recusada: Idade mínima 16 anos";
        msg.style.color = "red";
    }
}

function validarSenha(){

    const senha1 = document.getElementById('senha1').value;
    const senha2 = document.getElementById('senha2').value;
    const msg = document.getElementById('mensagem');

    if(senha1 === senha2 && senha1.length >= 8){
        msg.innerText = "Senha válida!";
        msg.style.color = "green";
    } else {
        msg.innerText = "Erro: Senhas diferentes ou menos de 8 caracteres.";
        msg.style.color = "red";
    }
}

function validarPromocao(){

    const idade = Number(document.getElementById('idade').value);
    const estudante = document.getElementById('estudante').checked;
    const msg = document.getElementById('mensagem');

    if(idade > 60 || estudante){
        msg.innerText = "Parabéns! Você ganhou desconto especial!";
        msg.style.color = "green";
    } else {
        msg.innerText = "Sem desconto disponível.";
        msg.style.color = "blue";
    }
}

function validarBouncer(){
    const nome = document.getElementById('nome').value;
    const idade = Number(document.getElementById('idade').value);
    const msg = document.getElementById('mensagem');

    if(nome === "" || idade < 0){
        msg.innerText = "Erro: Nome vazio ou idade negativa.";
        msg.style.color = "red";
    } else {
        msg.innerText = "Dados válidos!";
        msg.style.color = "green";
    }
}