//arquivo .json
const api_url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
//declarando container: document=meu html, #allCards=classe onde quero que container seja inserido
const cardBox = document.querySelector('#allCards');
//inicializando uma array
let info = []; 

async function getInfoJson(){ 
    //aguarda o resultado de fetch, o fetch transforma o documento(que está como array) em .json 
    let response = await fetch(api_url);
    return await response.json();
        //essa função tem como trabalho retornar o seu arquivo .json
}

async function main(){
    info = await getInfoJson();
    //Se tiver info, vai aparecer um card
    if (info[0]){
        showCard(info);
    }
}

function showCard(cards){
    //primeiro precisamos que ela zere toda a info que ela poderia conter previamente
    cardBox.innerHTML = "";
    //o .map executa uma função em cada item de uma lista
    cards.map(insideCard);
}

function insideCard(card){
    //vou criar uma <div> no meu html e add o estilo que quero
const div = document.createElement("div");
div.style.width = "300";
div.style.margin = "2";
div.className = "card";
//agora vou injetar a info que quero nessa div dentro do template `` que faz você inserir variáveis dentro de um texto de forma mais fácil
//1. Parametro vai assumir o valor de photo
div.innerHTML = `
<img src="${card.photo}" class = "cardImg" />
<div class = "cardTxt">
<h4 class="type"> ${card.property_type} </h4>
<h3 class="name"> ${card.name} </h3>
<p class="price"> R$ ${card.price},00 </p>
</div>
<div> <a class="button" href="#new1"> 
 + </a>
`;
//add sua nova div dentro do cardbox
cardBox.appendChild(div);
}

main();



 //isso era a forma como eu tinha feito antes:


    //console.log(data);

    //document.getElementById('photo').textContent = data[0].photo;
    //document.getElementById('pt').textContent = data[0].property_type;
    //document.getElementById('name').textContent = data[0].name;
    //document.getElementById('price').textContent = data[0].price;