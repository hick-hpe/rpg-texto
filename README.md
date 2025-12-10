# rpg-texto

Este é um simples jog de RPG de texto.

## Modelo das cenas
As cenas foram estruturadas no seguinte formato:
```json
{
    "scene-id": {
        "title": "Título da cena",
        "text": "Descrição da cena",
        "choices": [
            {
                "text": "Escolha do jogador",
                "target": "Próxima cena"
            }
        ],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text:": "Texto para 10+",
                "target": "Próxima cena"
            },
            "partial": {
                "text": "Texto para 7-9",
                "target": "Próxima cena"
            },
            "fail": {
                "text": "Texto para 6-",
                "target": "Próxima cena"
            }
        }
    }
}
```

### Explicação:

- `title`: Título da cena
- `scene-id`: É o identificador da cena
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
    - `partial`: Cena que ocorre quando o jogador teve um sucesso parcial.
    - `fail`: Cena para quando o jogador falha completamente.

## Link
🔗 Disponível em: <link>
