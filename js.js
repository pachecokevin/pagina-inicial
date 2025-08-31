let clickCount = 0; // Contador de cliques
        const cores = ["#f8c8c8", "#f9d1e7", "#f2c4d3", "#f2c4a1", "#f3d1e8", "#ffd1dc", "#e2b7e1", "#fce8f1", "#f1b6d0", "#d9a6c2"]; // Cores suaves e femininas para o fundo
        const textos = [
            "Clique Aqui",
            "Errou",
            "De novo?",
            "Que mira ruim",
            "Insistencia é o seu nome",
            "Tu é curiosa mesmo em",
            "O que será agora?",
            "Mais um clique?!",
            "Você está indo bem!",
            "Bixa insistente",
            "Será o último?!",
            "Não fica brava",
            "Sabe que eu te amo né?!",
            "Tu deve tá muito retada kkkkkk",
        ]; // Textos para o botão
        const botao = document.getElementById("botao");
        const somClique = document.getElementById("somClique");

        function alterarPosicao() {
            clickCount++;

            // Reproduzir o som do clique
            somClique.play();

            // Alterar a cor do fundo a cada clique
            document.body.style.backgroundColor = cores[clickCount % cores.length];

            // Alterar o texto do botão a cada clique
            botao.innerHTML = textos[clickCount % textos.length];

            // Alterar a posição do botão radicalmente a cada clique
            if (clickCount === 1) {
                botao.className = "top-left";
            } else if (clickCount === 2) {
                botao.className = "bottom-right";
            } else if (clickCount === 3) {
                botao.className = "top-right";
            } else if (clickCount === 4) {
                botao.className = "bottom-left";
            } else if (clickCount === 5) {
                botao.className = "center";
            } else if (clickCount === 6) {
                botao.className = "extreme-top-left";
            } else if (clickCount === 7) {
                botao.className = "extreme-bottom-right";
            } else if (clickCount === 8) {
                botao.className = "extreme-top-right";
            } else if (clickCount === 9) {
                botao.className = "extreme-bottom-left";
            } else if (clickCount === 10) {
                botao.className = "far-top";
            } else if (clickCount === 11) {
                botao.className = "far-bottom";
            } else if (clickCount === 12) {
                botao.className = "far-down";
            } else if (clickCount === 13) {
                botao.className = "extreme-bottom-right";
            } else if (clickCount === 14) {
                botao.className = "center";

                // Após o 14º clique, abrir outra página
                window.location.href = "https://pachecokevin.github.io/FGoes/"; // Substitua pelo link desejado
            }

        }
