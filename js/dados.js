const dados = {
    // teste
    "dados": {
        "text": "> Teste do dado",
        "choices": [],
        "roll-results": {
            "success": {
                "text": "Sucesso :D !!!",
                "target": "introducao"
            },
            "mixed": {
                "text": "Eita, quase :/",
                "target": "introducao"
            },
            "fail": {
                "text": "Você falhou :(",
                "target": "introducao"
            }
        },
        "roll-dices": true
    },
    "introducao": {
        "text": "A história se passa no interior do Rio Grande do Sul, numa cidade chamada Alvorada. Nela, há uma investigadora chamada Thalita Nunes, uma profissional no ramo há 10 anos, resolvendo diversos casos. Mas neste caso, foi uma surpresa: o gato Bisteca da senhora Dolores desapareceu misteriosamente nesta manhã. Ela veio até você aos prantos, implorando para que você encontre o Bisteca.",
        "choices": [
            {
                "text": "Começar",
                "target": "cena-01"
            }
        ],
        "roll-dices": false
    },
    "cena-01": {
        "text": "Você está na delegacia, no seu intervalo, aproveitando sua bela xícara de café, até que ouve um chamado no telefone. O telefone começa a tocar. O que vai fazer?",
        "choices": [
            {
                "text": "Atender o telefone",
                "target": "atender-telefone"
            },
            {
                "text": "Ignorar e continuar bebendo café",
                "target": "ignorar-telefone"
            }
        ],
        "roll-dices": false
    },
    "atender-telefone": {
        "text": `Você atende. E do outro lado escuta uma voz trêmula, chorosa e aflita.

        <b>[Dolores]</b> \"A-alô? É a d-delegacia?? Eu preciso de ajuda urgente!\"
        <b>[Você]</b> \"Sim, senhora, aqui é a investigadora Thalita. O que aconteceu?\"
        <b>[Dolores]</b> \"É o B-Bisteca! Ele sumiu! Meu gatinho, meu amorzinho, meu pinguinho de açúcar! Ele desapareceu nesta manhã!\"
        <b>[Você]</b> \"Calma, senhora… quem é Bisteca?\"
        <b>[Dolores]</b> \"O MEU GATO! O amor da minha vida! Ele nunca some! Nunca! Eu tô desesperada!\"
        <b>[Você]</b> \"Entendo. A senhora viu alguma coisa estranha? Alguma pista?\"
        <b>[Dolores]</b> \"Nada! Só acordei, fiz meu chimarrão e… sniff sniff …quando fui dar a ração… a vasilha tava lá, mas o Bisteca…\"meu Deus… o Bisteca não tavaaa…”
        <b>[Você]</b> \"Certo, dona Dolores. Respire fundo. Eu posso ajudar. Me passe seu endereço.\"
        <b>[Dolores]</b> \"Rua das Laranjeiras, número 217! Por favor, investigadora, venha logo! Ele deve estar sofrendo!\"
        <b>[Você]</b> \"Estou a caminho.\"
        <b>[Dolores]</b> \"Obrigada… obrigada… você é um anjo…\"
        Ela desliga chorando.
        Você desliga o telefone. Você pega as chaves do seu carro e vai em direção a casa de Dolores.
        `,
        "choices": [
            {
                "text": "Ir para casa da senhora Dolores",
                "target": "casa-dolores"
            }
        ],
        "roll-dices": false
    },
    "ignorar-telefone": {
        "text": `Você dá um gole no café, fingindo que não ouviu nada.

        [Colega da delegacia] \"Ué, Thalita, você não vai atender??\"
        <b>[Você]</b> \"Ah, sei lá… pode ser trote. Deixa tocar.\"
        O telefone para.
        Dois segundos depois, começa a tocar de novo, mais insistente.
        Você bufa, coloca a xícara na mesa e atende.
        Ligação
        <b>[Dolores]</b> \"PELO AMOR DE DEUS, ATENDA! EU PRECISO DE AJUDA!!\"
        <b>[Você]</b> \"…Boa tarde. Investigadora Thalita falando.\"
        <b>[Dolores]</b> \"O BISTECA SUMIU!! MEU GATINHO LINDO, MEU BEBÊ, O SENHOR TEM QUE ME AJUDAR!!\"
        <b>[Você]</b> \"Certo, senhora… vamos com calma. Quem é Bisteca?\"
        <b>[Dolores]</b> \"O MEU GATO!! O GATO MAIS PERFEITO QUE EXISTE!!\"
        <b>[Você]</b> \"Entendo. A senhora viu alguma coisa estranha? Alguma pista?\"
        <b>[Dolores]</b> \"Nada! Só acordei, fiz meu chimarrão e… sniff sniff …quando fui dar a ração… a vasilha tava lá, mas o Bisteca…\"meu Deus… o Bisteca não tavaaa…”
        <b>[Você]</b> \"Certo, dona Dolores. Respire fundo. Eu posso ajudar. Me passe seu endereço.\"
        <b>[Dolores]</b> \"Rua das Laranjeiras, número 217! Por favor, investigadora, venha logo! Ele deve estar sofrendo!\"
        <b>[Você]</b> \"Estou a caminho.\"
        <b>[Dolores]</b> \"Obrigada… obrigada… você é um anjo…\"
        Ela desliga chorando.
        Você desliga o telefone. Você pega as chaves do seu carro e vai em direção a casa de Dolores.
        `,
        "choices": [
            {
                "text": "Ir para casa da senhora Dolores",
                "target": "casa-dolores"
            }
        ],
        "roll-dices": false
    },
    "casa-dolores": {
        "text": "casa-dolores",
        "choices": [
            {
                "text": ":D",
                "target": "casa-dolores"
            }
        ],
        "roll-dices": false
    }
}
