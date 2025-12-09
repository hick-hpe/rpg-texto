const dados_cenas_03_04_05 = {
    // ###########################################################################
    // Cena 3: Pet Shop da Marisa
    // ###########################################################################
    "loja-marisa": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Na rua Oeste, a porta toca o sininho assim que Thalita entra. O cheiro de ração fresca e sachês de peixe invade o ar. Marisa está arrumando uma prateleira de brinquedos quando vê a investigadora.
                [Thalita] Bom dia, dona Marisa.
                [Marisa] Bom dia, em que posso ajuda-lá??
                [Thalita] Estou investigando um caso… é sobre o gato da dona Dolores—
                [Marisa] interrompendo, quase derrubando um saco de ração
                BISTECAA!! O QUE TEM ELE??
                [Thalita] surpresa
                Ué… você conhece?
                [Marisa] Claro que conheço! A Dolores é minha amigona. O Bisteca sempre aparece por aqui, um amorzinho! Só dá trabalho quando tenta subir no aquário…
                [Thalita] Imagino. Mas… ele desapareceu hoje. Você sabe de algo a respeito?
                [Marisa] Ah, sumiu? Tadinho… [pensa] Olha, ele costuma dar voltas por aqui sim. Os gatos do bairro adoram essa área: tem sombra, tem cheiro de comida, tem caixas… sabe como é.
                [Thalita] E você tem alguma ideia de por que isso acontece com tanta frequência? 
                [Marisa] Então… olha para os lados e baixa o tom
                Tem um grupo de crianças aqui da rua que vive passando na porta.`,
        "choices": [
            {
                "text": "Perguntar sobre as crianças",
                // "target": "perguntar-sobre-criancas"
                "target": "loja-marisa"
            },
            {
                "text": "Examinar a área da loja",
                "target": "loja-marisa"
                // "target": "examinar-area-loja"
            }
        ],
        "roll-dices": false
    },
    
    // ###########################################################################
    // Cena Alternativa: Caminho Errado
    // ###########################################################################
    
    // ###########################################################################
    // Cena 4: Investigação no bairro / pistas do garoto
    // ###########################################################################

    // ###########################################################################
    // Final Ruim - Você não achou o Bisteca
    // ###########################################################################

    // ###########################################################################
    // Cena 5: A casa do garoto
    // ###########################################################################
}

