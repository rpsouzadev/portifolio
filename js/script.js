const saudacao = document.querySelector(".meu-nome");


function typeWriter(elemento) {
    setTimeout(() => {
        const textArray = elemento.innerHTML.split("");
        elemento.innerHTML = "";
        textArray.forEach((letra, index) => {
            setTimeout(() => {
                elemento.innerHTML += letra
            }, 150 * index)
        })
    }, 1500)
}

typeWriter(saudacao);