# 🐾Sumiço do Bisteca

## 🎉 Seja muito bem-vindo(a)!!!

### 🎮 Sobre o jogo
Este é um RPG textual onde o jogador toma decisões que influenciam diretamente o rumo da história.
Pense bem, observe cada detalhe… e prepare-se para investigar.

### ℹ️ Contexto
A história se passa no interior do Rio Grande do Sul, na cidade de Alvorada.

Você assume o papel de uma investigadora chamada Thalita Nunes, uma profissional no ramo há 10 anos, com diversos casos solucionados.

Mas, nesta manhã, algo inesperado aconteceu: <br>
Bisteca, o gato da senhora Dolores desapareceu misteriosamente.

Ela veio até você aos prantos, implorando para que você encontre o Bisteca.

Agora, cabe a você descobrir o que aconteceu… antes que seja tarde demais.

### 🎯 Finais
O jogo possui múltiplos finais. <br/>
🎉 Alguns felizes. <br/>
😣 Outros… nem tanto. <br/>

Será que você conseguirá encontrar todos?

## 🛠️ Sobre o desenvolvimento
Este projeto foi criado com foco em simplicidade, organização e fácil expansão da história.
A interface do jogo foi desenvolvida utilizando:

- **HTML, CSS e JavaScript** — base para toda a estrutura e lógica do RPG textual
- **Bootstrap** — para agilizar o design, tornando o layout responsivo e amigável
- **Netlify** — responsável pela hospedagem gratuita e pelo deploy automático do projeto

### Desenvolvimento das cenas

A pasta `data/` deste repositório contém apenas o modelo de organização das cenas, servindo como referência para como a história completa é estruturada internamente.
Nenhum dado real da narrativa é incluído aqui — apenas o formato que o jogo utiliza para carregar cenas, escolhas e progressão.

No sistema do jogo, existem dois tipos principais de cenas:

- **📘 1. Narrativas**

    Cenas puramente textuais, compostas por:
    - descrição da cena
    - opções de escolha que levam o jogador a diferentes caminhos

    São ideais para diálogos, investigações e decisões diretas na história.

- **🎲 2. Rolagem de dados**
    
    São cenas que combinam narrativa com resultados gerados por sorte.
    
    Elas incluem:

    - descrição da cena
    - escolhas
    - parâmetros de rolagem de dados
    - consequências diferentes dependendo do valor obtido no dado

    Esse tipo é usado em momentos onde o jogo envolve risco, tentativa, sorte ou desafio.

Logo abaixo estão os modelos que mostram como cada tipo de cena é armazenado e estruturado.

### Modelo de Narrativa
```json
"cena-id": {
    "title": "titulo da cena",
    "text": "Descrição da cena",
    "choices": [
        {
            "text": "Texto das escolhas do jogador",
            "target": "id-da-proxima-cena"
        }
    ],
    "roll-dices": false
}
```

- `cena-id`: identificador único da cena
- `title`: título da cena
- `text`: descrição narrativa apresentada ao jogador
- `choices`: lista das escolhas possíveis do jogador. Incluem:
    - `text`: ação do jogador escolhida pelo jogador
    - `target`: ID da próxima cena que será carregada caso essa escolha seja selecionada
- `roll-dices`: define se a cena utiliza mecânica de rolagem de dados (`false` no caso de narrativas)

### Modelo de Rolagem de Dados

Este tipo de cena utiliza os mesmos atributos básicos da narrativa, mas adiciona parâmetros para o sistema de rolagem de dados.
Para cenas desse tipo, o atributo `roll-dices` sempre deve ser `true`.

```json
"cena-id": {
    "title": "titulo da cena",
    "text": "Descrição da cena",
    "choices": [
        {
            "text": "Texto das escolhas do jogador",
            "target": "id-da-proxima-cena"
        }
    ],
    "roll-dices": true, // para rolagem dos dados
        "atributos-adicao-dados": ["atributo1", "atributo2"],
        "atributos-descontado-dados": ["atributo1"],
        "roll-results": {
            "success": {
                "text": "Pequena descrição do resultado",
                "target": "sucesso-cena-id",
                "atributos-adicao-jogador": [
                    {
                        "attr": "atributo",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "atributo",
                        "value": 1
                    }
                ],
            },
            "partial": {
                "text": "Pequena descrição do resultado",
                "target": "parcial-cena-id",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": []
            },
            "fail": {
                "text": "Pequena descrição do resultado",
                "target": "falha-cena-id",
                "atributos-adicao-jogador": [
                    {
                        "attr": "atributo",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        }
    },
    // opcionais
    "min-success": 0,
    "atributos-add": {
        "atrinbuto1": 1,
        "atrinbuto2": 2
    },
    "atributos-less": {
        "atrinbuto1": 1,
        "atrinbuto2": 2
    }
```

- `atributos-adicao-dados`: Lista de atributos do jogador que serão somados ao valor do dado, aumentando a chance de sucesso.
- `atributos-descontado-dados`: Lista de atributos do jogador que serão somados ao valor do dado, reduzindo a chance de sucesso.
- `roll-results`: Define os três cenários possíveis da ação:
    - `success`: Sucesso total
    - `partial`: Sucesso parcial
    - `fail`: cenário de falha

    Cada cenário inclui:
    - `text`: pequena descrição do que aconteceu
    - `target`: ID da próxima cena correspondente
    - `atributos-adicao-jogador`: atributos ganhos
        ```json
        {
            "attr": "atributo",
            "value": 1
        }
        ```
    - `atributos-descontado-jogador`: atributos perdidos
        ```json
        {
            "attr": "atributo",
            "value": 1
        }
        ```

    **Nome dos IDs das cenas resultantes**
    Para facilitar identificação e navegação:
    | Resultado | Sufixo recomendado |
    | --------- | ------------------ |
    | Sucesso   | `sucesso-cena-id`  |
    | Parcial   | `parcial-cena-id`  |
    | Falha     | `falha-cena-id`    |

    Exemplo para a cena teste:
    - `sucesso-teste`
    - `parcial-teste`
    - `falha-teste`

- **Campos Opcionais**:
    - `min-success`: valor mínimo que o jogador precisa atingir para ter sucesso. É opcional, colocado em apenas algumas cenas específicas.
    - `atributos-add`: Atributos adicionados ao jogador ao início da cena (não dependem da rolagem):
        ```json
        "atributos-add": {
            "atributo": 1
        }
        ```
    - `atributos-less`: Atributos diminuídos do jogador ao início da cena (não dependem da rolagem):
        ```json
        "atributos-less": {
            "atributo": 1
        }
        ```

### 🔄 Atualizações
Data da última atualização: 🗓️ 11/12/2025

## 🔗 Link
Disponível em: [https://rpg-misterio-bisteca.netlify.app/](https://rpg-misterio-bisteca.netlify.app/)
