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
    // ############### analisar a tigela de ração
    "analisar-tigela": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Análise da tigela - Teste de Investigação + Percepção",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao": ["investigacao", "percepcao"],
        "atributos-punicao": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-tigela"
            },
            "mixed": {
                "text": "Uma pista parcial",
                "target": "parcial-tigela"
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-tigela"
            }
        }
    },
    // sucesso tigela
    "sucesso-tigela": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você se aproxima da tigela de ração do Bisteca com atenção redobrada.
                A ração está espalhada ao redor — não como se o gato tivesse comido, mas como se algo tivesse arrastado ou chutado o pote com força.
                Quando se abaixa, seus olhos captam imediatamente os detalhes importantes:
                pegadas estranhas na terra fofa.
                
                Formatos alongados, três pontas bem marcadas na frente.
                Não são pegadas de gato.
                Não são de cachorro.
                Nem de pássaro.
                São… grandes demais.
                
                E então você liga os pontos com precisão:
                - começam perto do ratinho de brinquedo,
                - passam pela tigela
                - e seguem direção ao muro.
                
                A sequência indica algo rápido, leve e… pequeno o suficiente para escalar.
                Dolores toca seu braço, preocupada:
                [Dolores] “Eu ouvi uns passos correndo aqui ontem… mas achei que fosse algum cachorro do vizinho.”
                
                Você sabe que não eram de cachorro.
                Aquilo parece… pegada de fantasia infantil, daquelas com pés enormes de dinossauro.
                Mas quem estaria fantasiado, correndo pelo quintal da Dolores?`,
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            },
            {
                "text": "Examinar o portão",
                "target": "examinar-portao"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
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
    // parcial tigela
    "parcial-tigela": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você examina a tigela.
                Ela foi empurrada — isso é claro.
                E há algo mais: marcas na terra, mas você tem dificuldade em interpretá-las completamente.
                São pegadas… estranhas.
                Parecem grandes e com três pontas, mas você não consegue identificar se são de animal, criança ou objeto.
                Sua percepção ajuda o suficiente para notar o padrão:
                começam perto do brinquedo,
                passam pela tigela
                e seguem para o muro.
                Mas sua confusão te atrapalha:
                as pegadas parecem mudar de forma conforme você olha.
                Dolores, percebendo seu foco, diz:
                [Dolores] “Eu ouvi uns passinhos correndo aqui… mas não sei se era cachorro, criança… sei lá.”
                Você percebe que existe alguém ou algo envolvido — mas não consegue montar o quadro completo ainda.`,
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            },
            {
                "text": "Examinar o portão",
                "target": "examinar-portao"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
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
    // falha tigela
    "falha-tigela": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `A confusão atrapalha completamente sua leitura.
                Você olha a tigela derrubada e conclui:
                “Ah… provavelmente o próprio Bisteca esbarrou e virou o pote.”
                As pegadas na terra?
                Você nem percebe como um padrão — parecem só marcações aleatórias de pássaro ou de vento.
                Nada demais.
                Dolores, tentando ajudar, pega algo no bolso:
                [Dolores] “Mas… olha essa pegada grande que ficou aqui no canto! Não parece de cachorro… nem de gato…”
                Você olha rapidamente e dá de ombros.
                Mas Dolores está desesperada:
                [Dolores] “A Dona Marisa vende uns brinquedos desses de dinossauro pra criança… talvez alguém tenha passado aqui! Vai lá falar com ela, por favor!”
                Mesmo sem entender nada, você acaba sendo praticamente empurrada para a pet shop.`,
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            }
        ],
        "roll-dices": false
    },
    // ############### observar o quintal
    "observar-quintal": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Observar o quintal - Teste de Investigação + Percepção",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao": ["investigacao", "percepcao"],
        "atributos-punicao": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-observar-quintal"
            },
            "mixed": {
                "text": "Uma pista parcial",
                "target": "parcial-observar-quintal"
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-observar-quintal"
            }
        }
    },
    // sucesso observar-quintal
    "sucesso-observar-quintal": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você examina o quintal com atenção cuidadosa, e seus olhos treinados captam detalhes que uma pessoa comum jamais veria.
                Entre os montes de terra remexida, você encontra algo peculiar:
                um adesivo infantil rasgado, metade enterrado na terra.
                Mesmo sujo, o desenho ainda é visível — um dinossauro verde sorrindo, daqueles adesivos baratos que crianças colam em todo lugar.
                Mas o que realmente se destaca para você é o que quase todos ignorariam:
                Um segundo fragmento microscópico do adesivo, a alguns centímetros.
                A marca leve de um joelho pequeno, pressionando a terra.
                A direção da passada curta, interrompida, como se a criança tivesse parado bruscamente.
                Dolores confirma:
                “Eu não tenho crianças aqui… e nunca vi esse adesivo.”
                Seu instinto se afirma:
                Uma criança esteve ali — recentemente — e estava com pressa.`,  
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            },
            {
                "text": "Examinar o portão",
                "target": "examinar-portao"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Perguntar mais detalhes para Dolores",
                "target": "perguntar-mais"
            }
        ],
        "roll-dices": false
    },
    // parcial observar-quintal
    "parcial-observar-quintal": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você encontra um adesivo infantil sujo, com o desenho de um pequeno dinossauro verde.
                Está rasgado e preso parcialmente na terra.
                É claramente um item de criança — Dolores não reconhece e diz que nenhuma criança passou por ali.
                Você percebe também que a terra próxima está um pouco remexida, sugerindo que alguém se ajoelhou ou caiu ali… mas não consegue determinar exatamente como ou por quê.
                Ainda assim, a evidência é clara:
                Uma criança esteve no quintal.
                Mas você sente que algo está faltando, como se tivesse perdido um detalhe importante que estava logo ali.`,  
        "choices": [
            {
                "text": "Prosseguir para a loja da Dona Marisa",
                "target": "loja-marisa"
            },
            {
                "text": "Examinar o portão",
                "target": "examinar-portao"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Perguntar mais detalhes para Dolores",
                "target": "perguntar-mais"
            }
        ],
        "roll-dices": false
    },
    // falha observar-quintal
    "falha-observar-quintal": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você observa o quintal, mas… nada faz muito sentido.

                A terra está mexida?
                O adesivo é de criança?
                Ou alguém derrubou ali sem querer?

                Você tenta montar a linha dos acontecimentos, mas sua cabeça embaralha informações incompatíveis — talvez seja só lixo, talvez seja algo sério… ou talvez você esteja lendo demais.

                Quando pergunta à Dolores, ela mesma parece incerta, o que piora ainda mais sua interpretação.

                Você até pega o adesivo, mas ele não te diz nada.
                Poderia ser de uma criança… ou de um adulto desleixado… ou até do vento.

                Você não consegue tirar nenhuma conclusão confiável — e essa incerteza te frustra profundamente`,  
        "choices": [
            {
                "text": "Examinar o portão",
                "target": "examinar-portao"
            },
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Perguntar mais detalhes para Dolores",
                "target": "perguntar-mais"
            }
        ],
        "roll-dices": false
    },
    // ############### perguntar mais detalhes
    "perguntar-mais": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Perguntar mais - Teste de Investigação + Percepção",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao": ["investigacao", "percepcao"],
        "atributos-punicao": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-observar-quintal"
            },
            "mixed": {
                "text": "Uma pista parcial",
                "target": "parcial-observar-quintal"
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-observar-quintal"
            }
        }
    },
    // sucesso perguntar-mais
    // parcial perguntar-mais
    // falha perguntar-mais
    // ############### continuar investigando
    "continuar-investigando": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Continuar investigando - Teste de Investigação + Percepção",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao": ["investigacao", "percepcao"],
        "atributos-punicao": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-observar-quintal"
            },
            "mixed": {
                "text": "Uma pista parcial",
                "target": "parcial-observar-quintal"
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-observar-quintal"
            }
        }
    },
    // sucesso continuar-investigando
    // parcial continuar-investigando
    // falha continuar-investigando
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
