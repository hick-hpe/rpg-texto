# rpg-texto

Este é um simples jog de RPG de texto.

## Modelo das cenas
As cenas foram estruturadas no seguinte formato:
```json
{
    "scene-id": {
        "text": "Descrição da cena",
        "choices": [
            {
                "text": "Escolha do jogador",
                "target": "Próxima cena"
            }
        ],
        "roll-dices": true,
        "roll-results": {
            "success": "Texto para 10+",
            "mixed": "Texto para 7-9",
            "fail": "Texto para 6-"
        }
    },
    "requires": ["item-necessário"]
}
```

### Explicação:

- `screen-id`: É o identificador da cena
- `text`: A narrativa principal daquela cena.
Pode ser uma descrição, diálogos ou instruções.
- `choices`: Lista de ações possíveis para o jogador.
    - `text`: O que o jogador lê para escolher
    - `target`: A cena para onde a história continua
- `roll-dices`: Define se a cena usa sistema de dados
    - `true`: O jogo deve rolar 2d6
    - `false`: Cena sem dados, apenas narrativa e escolhas
- `roll-results`: Usado somente quando roll-dices: true.
Cada resultado define para qual cena o jogador vai dependendo da rolagem.
    - `success`: Cena que ocorre se o jogador tirar um resultado alto/bom no dado.
    - `mixed`: Cena que ocorre quando o jogador teve um sucesso parcial.
    - `fail`: Cena para quando o jogador falha completamente.
- `requires`: indicar pré-requisitos necessários para que o jogador possa acessar aquela cena ou escolha.


