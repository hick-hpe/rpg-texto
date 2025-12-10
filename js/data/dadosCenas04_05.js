const dados_cenas_04_05 = {
    // ###########################################################################
    // Cena 4: Investigação no bairro / pistas do garoto
    // ###########################################################################
    "investigacao-bairro": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita segue para a Rua das Laranjeiras, uma área residencial com calçadas largas, árvores grandes e algumas crianças brincando mais à frente.
                
                O clima é calmo, mas há energia no ar — como se algo tivesse acontecido ali recentemente.
                
                Ela respira fundo e começa sua investigação.`,
        "choices": [
            {
                "text": "Conversar com os vizinhos",
                "target": "conversar-vizinhos-bairro"
            },
            {
                "text": "Procurar pistas físicas",
                "target": "procurar-pistas-fisicas"
            },
            {
                "text": "Tentar localizar a casa do garoto",
                "target": "localizar-casa-garoto"
            }
        ],
        "roll-dices": false
    },

    // ################ conversar-vizinhos-bairro
    "conversar-vizinhos-bairro": {
        "title": "Cena 4: Investigação no bairro",
        "text": "Conversar com os vizinhos",
        "choices": [],
        "roll-dices": false
    },

    // sucesso-conversar-vizinhos-bairro
    // parcial-conversar-vizinhos-bairro
    // falha-conversar-vizinhos-bairro

    // ################ procurar-pistas-fisicas
    "procurar-pistas-fisicas": {
        "title": "Cena 4: Investigação no bairro",
        "text": "Procurar pistas físicas",
        "choices": [],
        "roll-dices": false
    },

    // sucesso-procurar-pistas-fisicas
    // parcial-procurar-pistas-fisicas
    // falha-procurar-pistas-fisicas

    // ################ localizar-casa-garoto
    "localizar-casa-garoto": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Tentar localizar a casa do garoto diretamente
                > Teste de Investigação`,
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Anna responde com naturalidade",
                "target": "sucesso-localizar-casa-garoto",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
            },
            "partial": {
                "text": "Anna lembra de alguns detalhes… mas parece incerta.",
                "target": "parcial-localizar-casa-garoto",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "Você não consegue localizar :(",
                "target": "falha-localizar-casa-garoto",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "min-success": 12
    },

    // sucesso-localizar-casa-garoto
    "sucesso-localizar-casa-garoto": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita cruza informações:
                
                - direção dada pela Marisa
                - comentários dos vizinhos
                - percepção das calçadas
                
                E conclui:
                📍 Casa Azul. Portão de madeira. Plantas na frente.`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            }
        ],
        "roll-dices": false
    },

    // parcial-localizar-casa-garoto
    "parcial-localizar-casa-garoto": {
        "title": "Cena 4: Investigação no bairro",
        "text": "Ela encontra a área, mas três casas se encaixam nas descrições.",
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            },
            {
                "text": "Ir para a casa amarela",
                "target": "ir-casa-amarela",
            },
            {
                "text": "Ir para a casa bege",
                "target": "ir-casa-bege-3",
            }
        ],
        "roll-dices": false
    },

    // falha-localizar-casa-garoto
    "falha-localizar-casa-garoto": {
        "title": "Cena 4: Investigação no bairro",
        "text": "Você não consegue localizar :(",
        "choices": [
            {
                "text": "Conversar com os vizinhos",
                "target": "conversar-vizinhos-bairro"
            },
            {
                "text": "Procurar pistas físicas",
                "target": "procurar-pistas-fisicas"
            }
        ],
        "roll-dices": false
    },

    // ################ ir-casa-azul
    "ir-casa-azul": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita se aproxima da casa azul.
                Dessa vez, algo é diferente:
                Há grãos de ração perto do portão.
                Um arranhão baixo, compatível com um gato segurado no colo.
                Um adesivo de dinossauro caído perto da entrada.
                Um rastro quase invisível de poeira segue até a porta.
                Esta é a casa do garoto.
                O coração de Thalita acelera — talvez Bisteca esteja dentro.`,
        "choices": [
            {
                "text": "Continuar",
                "target": "cena-final-jogo",
            }
        ],
        "roll-dices": false
    },

    // ################ ir-casa-amarela
    "ir-casa-amarela": {
        "title": "Cena 4: Investigação no bairro",
        "text": `A casa amarela tem um pequeno jardim na frente, com vasos gastos e um cheiro de café vindo da janela aberta.
                Quando Thalita bate, quem atende é uma menina de uns oito anos, segurando um balde de slime colorido.
                Menina:
                “Moça, aqui não tem nenhum gato branco, não… Mas eu já vi um menino correndo com um bichinho mais pra baixo da rua. Ele usa uma fantasia esquisita, sabe? De cauda verde!”
                A porta se fecha devagar, e Thalita percebe a mente embaralhar um pouco — pista errada, caminho errado`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            },
            {
                "text": "Ir para a casa bege",
                "target": "ir-casa-bege-3",
            }
        ],
        "roll-dices": false
    },

    // ################ ir-casa-bege-2
    "ir-casa-bege-2": {
        "title": "Cena 4: Investigação no bairro",
        "text": `A casa bege tem um pequeno jardim na frente, com vasos gastos e um cheiro de café vindo da janela aberta.
                Quando Thalita bate, quem atende é uma menina de uns oito anos, segurando um balde de slime colorido.
                Menina:
                “Moça, aqui não tem nenhum gato branco, não… Mas eu já vi um menino correndo com um bichinho mais pra baixo da rua. Ele usa uma fantasia esquisita, sabe? De cauda verde!”
                A porta se fecha devagar, e Thalita percebe a mente embaralhar um pouco — pista errada, caminho errado.`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            }
        ],
        "roll-dices": false
    },

    // ################ ir-casa-bege-3
    "ir-casa-bege-3": {
        "title": "Cena 4: Investigação no bairro",
        "text": `A casa amarela tem um pequeno jardim na frente, com vasos gastos e um cheiro de café vindo da janela aberta.
                Quando Thalita bate, quem atende é uma menina de uns oito anos, segurando um balde de slime colorido.
                Menina:
                “Moça, aqui não tem nenhum gato branco, não… Mas eu já vi um menino correndo com um bichinho mais pra baixo da rua. Ele usa uma fantasia esquisita, sabe? De cauda verde!”
                A porta se fecha devagar, e Thalita percebe a mente embaralhar um pouco — pista errada, caminho errado`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            },
            {
                "text": "Ir para a casa amarela",
                "target": "ir-casa-amarela",
            }
        ],
        "roll-dices": false
    },

    "cena-final-jogo": {
        "title": "Cena Final",
        "text": "Tá acabando...",
        "choices": [],
        "roll-dices": false
    }

    // ###########################################################################
    // Final Ruim - Você não achou o Bisteca
    // ###########################################################################

    // ###########################################################################
    // Cena 5: A casa do garoto
    // ###########################################################################
}
