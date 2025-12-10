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
                "target": "tentar-localizar-casa-garoto"
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

    // ################ tentar-localizar-casa-garoto
    "tentar-localizar-casa-garoto": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Tentar localizar a casa do garoto diretamente
                > Teste de Investigação`,
        "choices": [],
        "roll-dices": false,
        "min-success": 12
    },

    // sucesso-tentar-localizar-casa-garoto
    // parcial-tentar-localizar-casa-garoto
    // falha-tentar-localizar-casa-garoto

    // ###########################################################################
    // Final Ruim - Você não achou o Bisteca
    // ###########################################################################

    // ###########################################################################
    // Cena 5: A casa do garoto
    // ###########################################################################
}
