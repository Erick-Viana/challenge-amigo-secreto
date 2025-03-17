// Array para armazenar os nomes dos amigos inseridos
let amigos = [];

// Função para adicionar um nome à lista de amigos
function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo"); // Obtém o campo de input
    let nome = nomeInput.value.trim(); // Remove espaços extras no início e no final

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se o nome já foi adicionado anteriormente
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    atualizarLista(); // Atualiza a exibição da lista de amigos
    nomeInput.value = ""; // Limpa o campo de input após a adição
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array de amigos e cria elementos <li> para cada nome
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista antes de sortear
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // Gera um índice aleatório baseado no tamanho da lista de amigos
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente ao índice sorteado

    // Esconde a lista de amigos após o sorteio
    document.getElementById("listaAmigos").style.display = "none";

    // Exibe o resultado do sorteio na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>O amigo secreto é: ${amigoSorteado}</strong></li>`;

    // Reseta o array de amigos para permitir um novo sorteio do zero
    amigos = [];
}
