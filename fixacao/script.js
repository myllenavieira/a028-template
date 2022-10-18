//cria um novo elemento
const novoElemento = document.createElement("li");
//cria um conteúdo
const conteudo = document.createTextNode(input.value);
//coloca o conteúdo no elemento criado
novoElemento.appendChild(conteudo);

const elementoPai = document.getElementById('lista');

//Item 0
elementoPai.insertAdjacentElement("afterbegin", novoElemento);

function insereItem(event) {
    event.preventDefault();
    let input = document.getElementById("meu-input");

    const novoElemento = document.createElement("li");
    const conteudo = document.createTextNode(input.value);
    novoElemento.appendChild(conteudo);

    const elementoPai = document.getElementById('lista');
    elementoPai.insertAdjacentElement("beforeend", novoElemento);
    input.value="";
}