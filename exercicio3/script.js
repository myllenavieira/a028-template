function checaCaps(event) {
    //exibe o elemento que ativou o evento
    // console.log(event.target);
    // console.log(event.key);

    const mensagem = document.getElementById("mensagem");
    if (event.key === "Shift") {
        mensagem.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    } else {
        mensagem.innerHTML = "";
    }
}