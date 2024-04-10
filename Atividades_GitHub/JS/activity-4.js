// Gerenciando eventos usando JavaScript

// ao passar o mouse
document.getElementById("elementoModificado1").addEventListener("mouseover", function () {
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById("elementoModificado1").addEventListener("mouseout", function () {
    this.style.backgroundColor = 'lightblue';
});

// ao receber foco
document.getElementById("inputModificado1").addEventListener("focus", function () {
    console.log('Campo de entrada recebeu foco');
});

// ao alterar o valor
document.getElementById("inputModificado2").addEventListener("change", function () {
    console.log('Valor do campo de entrada alterado');
});

// ao clicar
document.getElementById("botaoModificado1").addEventListener("click", function () {
    alert('Botão foi clicado!');
});

// ao submeter
document.getElementById("formularioModificado1").addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita a submissão do formulário
    alert('Formulário submetido com sucesso!');
});

// ao alterar seleção (para um elemento select)
document.getElementById("selectModificado1").addEventListener("change", function () {
    console.log('Seleção foi alterada');
});






