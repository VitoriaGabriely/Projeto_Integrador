//gabarito
let corretas=[3, 1, 4, 2, 4];

//array para armazenar as opções marcadas
let opcao_marcada=[];


//variável para guardar a quantidade de respostas corretas
let quantidade_corretas=0;

//função que será iniciada quando o usuário selecionar uma resposta
function resposta(num_pergunta, selecionada){

    //armazena a resposta do usuário
    opcao_marcada[num_pergunta] = selecionada.value;

    //constroi o id da pergunta
    id="p" + num_pergunta;


    //defini o fundo das opções transparente para desmarca-las
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "transparent";
    labels[5].style.backgroundColor = "transparent";
    labels[7].style.backgroundColor = "transparent";

    //defini a cor de fundo da opção marcada
    selecionada.parentNode.style.backgroundColor = "#cec0fc";

}


//função que corrige as respostas e calcula a quantidade de acertos
function corrigir(){
    quantidade_corretas = 0;
    for(i=0; i < corretas.length; i++){
        // compara a resposta marcada com a resposta correta
        if(corretas[i] == opcao_marcada[i]){
            quantidade_corretas++;
    }

    //envia o resultado para o elemento com o ID "resultado"
    document.getElementById("resultado").innerHTML = quantidade_corretas;
}
}




