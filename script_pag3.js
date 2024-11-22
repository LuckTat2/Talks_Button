let somAtual = null;
let modoEdicao = false;

function tocarSom(id) {
    if (modoEdicao) return;

    const som = document.getElementById(id);
    const container = document.querySelector(`[onclick="tocarSom('${id}')"]`);

    // Adiciona a classe de clique ao container
    container.classList.add('clique-ativo');

    // Remove a classe após a duração da animação
    setTimeout(() => {
        container.classList.remove('clique-ativo');
    }, 400); // Duração da animação em milissegundos

    // Lógica de reprodução do som
    if (somAtual === som && !som.paused) {
        som.pause();
        som.currentTime = 0;
        somAtual = null;
    } else {
        if (somAtual && !somAtual.paused) {
            somAtual.pause();
            somAtual.currentTime = 0;
        }
        som.play();
        somAtual = som;
    }
}

function toggleModoEdicao() {
    modoEdicao = !modoEdicao;
    // Adiciona ou remove a classe 'modo-edicao' no body
    if (modoEdicao) {
        document.body.classList.add('modo-edicao');
    } else {
        document.body.classList.remove('modo-edicao');
    }
}

// Evento para capturar teclas
document.addEventListener('keydown', (event) => {
    if (modoEdicao) return; // Ignora se estiver no modo de edição

    switch (event.key) {
        case '1':
            tocarSom('som1');
            break;
        case '2':
            tocarSom('som2');
            break;
        case '3':
            tocarSom('som3');
            break;
        case '4':
            tocarSom('som4');
            break;
    }
});
