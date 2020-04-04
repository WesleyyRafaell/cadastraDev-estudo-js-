const form = document.querySelector("#form");
const nome = form.querySelector("#nome");
const idade = form.querySelector("#idade");
const tecnologia = form.querySelector("#tecnologia");
const containerDeDevs = document.querySelector(".containerTarefas");
const arrayDevs = [];

form.onsubmit = (e)=>{
    e.preventDefault();

    const arrayTechs =  constroiArrayDeString(tecnologia.value);
    
    const Dev = {
        nome: nome.value,
        idade: idade.value,
        tecnologia: arrayTechs
    };

    criarArrayDevs(Dev);

    nome.value = '';
    idade.value = '';
    tecnologia.value = '';
}

function constroiArrayDeString(string){
    return string.split(',');
}


function criarArrayDevs(object){
    arrayDevs.push(object);
    listarDevsDom(arrayDevs);
}


function listarDevsDom(array){
    containerDeDevs.innerHTML = '';
    array.map(item=>{
        const dev = `<div class="dev">
                        <p> ${item.nome} </p>
                        <p> ${item.idade} </p>
                        <p>${item.tecnologia.map(item => `<span>${item}/</span>`)}</p>
                    </div>`;

        containerDeDevs.innerHTML = containerDeDevs.innerHTML + dev;
    });
}