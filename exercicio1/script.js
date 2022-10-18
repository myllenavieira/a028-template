//cria um novo elemento
const novoElemento1 = document.createElement("li");
const novoElemento2 = document.createElement("li");

//cria um conteúdo
const conteudo1 = document.createTextNode('Item 0');
const conteudo2 = document.createTextNode('Item 5');

//coloca o conteúdo no elemento criado
novoElemento1.appendChild(conteudo1);
novoElemento2.appendChild(conteudo2);


const elementoPai = document.getElementById('lista');

//Item 0
elementoPai.insertAdjacentElement("afterbegin", novoElemento1);
//Item 5
elementoPai.insertAdjacentElement("beforeend", novoElemento2);

// const el6 = document.createElement("li");
// el6.appendChild(document.createTextNode('Item 6'));
// elementoPai.insertAdjacentElement("beforeend", el6);