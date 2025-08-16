//O principal objetivo deste desafio é 
// fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.



let resultado = document.querySelector('result-list ul');
const meuBotao = document.getElementsByClassName('button-add');

//meuBotao.addEventListener('click', adicionarAmigo()); 






// FUNCTIONS

function mostrarNomes(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampos(){

    campoDigitado = document.querySelector('amigo');
    campoDigitado.value = "";

}

function adicionarAmigo() {
   
    let meuArray = []; //array para receber as posições advindas do input

    //obtendo o elemento do campo imput para capturar os dados digitados
    let textoDigitado = document.getElementById('amigo'); 

    //obter o elemento onde será inserido os input dentro da lista não ordenada
    let tabelaAmigos = document.getElementById('lista-amigos');
    
    textoDigitado






    
    for(var i=0; i< meuArray.length; i++){
        meuArray.push(textoDigitado.value);
        console.log(meuArray); 
}
    
    //meuArray.push(meuInput.value);
    //console.log(meuArray); 

    
   
 /**/

    /*
    let listaNomes = [];
    let campoDigitado = document.querySelector('amigo');

    let campo = campoDigitado.value;
    //let tabelaAmigos = document.querySelector('.name-list ul');

    if (campoDigitado.value == " ") {

        alert('Não foi digitado nenhum nome. Por favor, insira um nome!');

    } else {
        
        listaNomes.push(campo);
        console.log(listaNomes);
        limparCampos();
    }

    */
}

function sortearAmigo() {
    
}





















