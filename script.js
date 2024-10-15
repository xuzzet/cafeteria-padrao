// Função para criar um novo card de cardápio
function adicionarCard(titulo, avaliacao, descricao, imagemSrc, nomeDoCafe) {
    const container = document.querySelector('.cardapio-card-container');
    
    // Criação do novo card
    const novoCard = document.createElement('div');
    novoCard.className = 'cardapio-card';

    novoCard.innerHTML = `
        <header class="cardapio-card-cabeçalho">
            <div class="cardapio-card-cabeçalho-detalhes">
                <spam class="destaque amarelo">Em Alta🔥</spam>
                <h3 class="card-titulo">${titulo}</h3>
            </div>
            <p class="cardapio-avaliaçao">${avaliacao}</p>
        </header>
        <p class="description-card-cardapio">${descricao}</p>
        <div class="cardapio-autor">
            <img src="${imagemSrc}" alt="${titulo}">
            <span class="nome-do-café">${nomeDoCafe}</span>
        </div>
    `;

    // Adiciona o novo card ao container
    container.appendChild(novoCard);
}

// Exemplo de uso da função para adicionar novos cards
adicionarCard(
    'Expresso',
    'Excelente 9/10',
    'Café forte e concentrado feito com água quente forçada através de grãos finamente moídos.',
    'assets/expresso.webp',
    'expresso'
);

adicionarCard(
    'Macchiato',
    'Muito bom 8/10',
    'Expresso com um toque de leite vaporizado, ideal para quem aprecia um sabor forte com um pouco de cremosidade.',
    'assets/machiato.jpeg',
    'macchiato'
);

adicionarCard(
    'Mocha',
    'Delicioso 9.5/10',
    'Café expresso misturado com leite vaporizado e chocolate, coberto com chantilly.',
    'assets/mocha.jpeg',
    'mocha'
);

adicionarCard(
    'Americano',
    'Bom 7/10',
    'Expresso diluído em água quente, resultando em uma bebida mais suave.',
    'assets/americano.jpg',
    'americano'
);

adicionarCard(
    'Ristretto',
    'Forte 8/10',
    'Uma versão mais concentrada do expresso, com menos água, resultando em um sabor mais intenso e robusto.',
    'assets/is-ristretto-keto-friendly-header-image.jpg',
    'ristretto'
);


