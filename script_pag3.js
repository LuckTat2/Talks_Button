let somAtual = null;
let modoEdicao = false;

// Função para tocar os sons
function tocarSom(id) {
    if (modoEdicao) return; // Ignora o evento se estiver no modo de edição

    const som = document.getElementById(id);
    const container = document.querySelector(`[onclick="tocarSom('${id}')"]`);

    // Adiciona a animação ao container
    container.classList.add('clique-ativo');

    // Remove a animação após a duração
    setTimeout(() => {
        container.classList.remove('clique-ativo');
    }, 400); // Duração da animação

    // Reprodução do som
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

// Função para alternar entre o modo de edição
function toggleModoEdicao() {
    modoEdicao = !modoEdicao;
    // Adiciona ou remove o 'modo-edicao' no body
    if (modoEdicao) {
        document.body.classList.add('modo-edicao');
    } else {
        document.body.classList.remove('modo-edicao');
    }
}

// Evento para as teclas
document.addEventListener('keydown', (event) => {
    if (modoEdicao) return; // Ignora o evento se estiver no modo de edição

    switch (event.key) {
        case '1':
            tocarSom('som1');
            break;
        case '2':
        case '0':
            tocarSom('som2');
            break;
        case '3':
        case 'x':
            tocarSom('som3');
            break;
        case '4':
        case 'm':
            tocarSom('som4');
            break;
    }
});
