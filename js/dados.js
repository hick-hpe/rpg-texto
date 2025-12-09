const dados = {
    // ###########################################################################
    // Introducao
    // ###########################################################################
    "introducao": {
        "title": "Cena 01 - Ligação na delegacia",
        "text": "A história se passa no interior do Rio Grande do Sul, numa cidade chamada Alvorada. Nela, há uma investigadora chamada Thalita Nunes, uma profissional no ramo há 10 anos, resolvendo diversos casos. Mas neste caso, foi uma surpresa: o gato Bisteca da senhora Dolores desapareceu misteriosamente nesta manhã. Ela veio até você aos prantos, implorando para que você encontre o Bisteca.",
        "choices": [
            {
                "text": "Começar",
                "target": "cena-01"
            }
        ],
        "roll-dices": false
    },
    // ###########################################################################
    // Cena 1: Ligação na delegacia
    // ###########################################################################
    "cena-01": {
        "title": "Cena 01 - Ligação na delegacia",
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
        "title": "Cena 01 - Ligação na delegacia",
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
        "title": "Cena 01 - Ligação na delegacia",
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
    // ###########################################################################
    // Cena 2: Casa de Dolores
    // ###########################################################################
    "casa-dolores": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você dirige até a Rua das Laranjeiras, 217.
        O bairro é simples, com casas antigas, muros baixos e varais com roupas balançando no vento. O céu está nublado — típico de Alvorada.
        Ao chegar, você vê a casa da Dolores:
        
        <b>Descrição da casa</b>
        A casa é pequena, com paredes amarelas já meio desbotadas e um portão de ferro ligeiramente torto.
        No pátio, há:
        - Um tapete de porta escrito "Lar Doce Lar"
        - Uma tigela de ração de gato no chão
        - Gramado irregular
        - Uma cerca improvisada feita com tábuas diferentes, não muito alta
        - Várias flores plantadas em pneus pintados
        - Alguns arranhões no portão (pode ser pista)
        </ul>
        As janelas estão abertas. A porta está entreaberta.

        <b>Diálogo com dolores</b>

        <b>[Dolores]</b> Investigadora! Graças a Deus que veio! Entre, entre… eu tô desesperada…
        <b>[Você]<b/> Calma, dona Dolores. Me conte exatamente o que aconteceu.
        <b>[Dolores]</b> Eu acordei, fiz meu chimarrão… botei a ração do Bisteca… fui para minha cadeira de balanço…mas… quando chamei ele… nada. Nem um miado. Isso nunca aconteceu antes!
        Ela limpa as lágrimas com o lenço.
        <b>[Você]<b/> A senhora ouviu algum barulho durante a madrugada?
        <b>[Dolores]</b> Ouvi sim… um barulho no portão… como se alguém tivesse mexido… mas pensei que fosse o vento!
        Vocês ouvem do outro lado da rua, a voz do vizinho:
        [Vizinho] Parem com essa choradeira, foi só um gato!!
        Ele fecha a porta e volta para dentro de casa. 
        [Thalita] Quem é ele?
        Dolores responde com desgosto.
        <b>[Dolores]</b>  Ah, aquele? É só meu vizinho, ele odeia gatos.

        O que vai fazer?
        `,
        "choices": [
            {
                "text": "Examinar o portão",
                "target": "examinar-portao"
            },
            {
                "text": "Analisar a tigela de ração",
                "target": "casa-dolores"
            },
            {
                "text": "Observar o quintal",
                "target": "casa-dolores"
            },
            {
                "text": "Perguntar mais detalhes para Dolores",
                "target": "casa-dolores"
            }
        ],
        "roll-dices": false
    },
    // ############### examinar o portão
    "examinar-portao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Análise do portão - Teste de Investigação",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao": ["investigacao"],
        "atributos-punicao": [],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-portao"
            },
            "mixed": {
                "text": "Uma pista parcial",
                "target": "parcial-portao"
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-portao"
            }
        }
    },
    // sucesso no portao
    "sucesso-portao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você vê uma leve amassada no portão, como se alguém tivesse batido, o que deixou ele torto, como se tivesse sido forçado.
                Mas o detalhe mais curioso está no chão: um ratinho de brinquedo, daqueles vendidos na pet shop da Dona Marisa, ali perto.`,
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            },
            {
                "text": "Analisar a tigela de ração",
                "target": "analisar-tigela"
            },
            {
                "text": "Observar o quintal",
                "target": "observar-quintal"
            },
            {
                "text": "Perguntar mais detalhes para Dolores",
                "target": "perguntar-mais"
            }
        ],
        "roll-dices": false
    },
    // parcial no portao
    "parcial-portao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você vê uma leve amassada no portão, como se alguém tivesse batido, o que deixou ele torto, como se tivesse sido forçado.
                Mas o detalhe mais curioso está no chão:
                um ratinho de brinquedo, daqueles vendidos na pet shop da Dona Marisa, ali perto.`,
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            },
            {
                "text": "Analisar a tigela de ração",
                "target": "analisar-tigela"
            },
            {
                "text": "Observar o quintal",
                "target": "observar-quintal"
            },
            {
                "text": "Perguntar mais detalhes para Dolores",
                "target": "perguntar-mais"
            }
        ],
        "roll-dices": false
    },
    // falha no portao
    "falha-portao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você vê uma leve amassada no portão, como se alguém tivesse batido, o que deixou ele torto, como se tivesse sido forçado.
                Mas o detalhe mais curioso está no chão: um ratinho de brinquedo, daqueles vendidos na pet shop da Dona Marisa, ali perto.`,
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            }
        ],
        "roll-dices": false
    },
    // ############### Analisar a tigela de ração
    
    // ###########################################################################
    // Cena 3: Pet Shop da Marisa
    // ###########################################################################
    "loja-marisa": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Tudo funfanfo :D",
        "choices": [],
        "roll-dices": false
    }
}
