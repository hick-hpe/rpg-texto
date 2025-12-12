// modelo das cenas
const cenas = {
    "cena-id": {
        "title": "Título da cena",
        "text": "Descrição da cena",
        "choices": [
            {
                "text": "Texto das escolhas do jogador",
                "target": "id-da-proxima-cena"
            }
        ],
        "roll-dices": false
    },
    "cena-id": {
    "title": "Título da cena",
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
}
