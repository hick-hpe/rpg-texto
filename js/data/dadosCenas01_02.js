const dados_cenas_01_02 = {
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
        "text": `Você atende. E do outro lado escuta uma voz trêmula, chorosa e aflita:

        <b>Dolores:</b> A-alô? É a d-delegacia?? Eu preciso de ajuda urgente!
        <b>Você:</b> Sim, senhora, aqui é a investigadora Thalita. O que aconteceu?
        <b>Dolores:</b> É o B-Bisteca! Ele sumiu! Meu gatinho, meu amorzinho, meu pinguinho de açúcar! Ele desapareceu nesta manhã!
        <b>Você:</b> Calma, senhora… quem é Bisteca?
        <b>Dolores:</b> O MEU GATO! O amor da minha vida! Ele nunca some! Nunca! Eu tô desesperada!
        <b>Você:</b> Entendo. A senhora viu alguma coisa estranha? Alguma pista?
        <b>Dolores:</b> Nada! Só acordei, fiz meu chimarrão e… <b>sniff sniff</b> …quando fui dar a ração… a vasilha tava lá, mas o Bisteca…meu Deus… o Bisteca não tavaaa…
        <b>Você:</b> Certo, dona Dolores. Respire fundo. Eu posso ajudar. Me passe seu endereço.
        <b>Dolores:</b> Rua das Laranjeiras, número 217! Por favor, investigadora, venha logo! Ele deve estar sofrendo!
        <b>Você:</b> Estou a caminho.
        <b>Dolores:</b> Obrigada… obrigada… você é um anjo…

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

        [Colega da delegacia] "Ué, Thalita, você não vai atender??"
        <b>Você:</b> "Ah, sei lá… pode ser trote. Deixa tocar."
        O telefone para.
        Dois segundos depois, começa a tocar de novo, mais insistente.
        Você bufa, coloca a xícara na mesa e atende.
        Ligação
        <b>Dolores:</b> "PELO AMOR DE DEUS, ATENDA! EU PRECISO DE AJUDA!!"
        <b>Você:</b> "…Boa tarde. Investigadora Thalita falando."
        <b>Dolores:</b> "O BISTECA SUMIU!! MEU GATINHO LINDO, MEU BEBÊ, O SENHOR TEM QUE ME AJUDAR!!"
        <b>Você:</b> "Certo, senhora… vamos com calma. Quem é Bisteca?"
        <b>Dolores:</b> "O MEU GATO!! O GATO MAIS PERFEITO QUE EXISTE!!"
        <b>Você:</b> "Entendo. A senhora viu alguma coisa estranha? Alguma pista?"
        <b>Dolores:</b> "Nada! Só acordei, fiz meu chimarrão e… sniff sniff …quando fui dar a ração… a vasilha tava lá, mas o Bisteca…"meu Deus… o Bisteca não tavaaa…"
        <b>Você:</b> "Certo, dona Dolores. Respire fundo. Eu posso ajudar. Me passe seu endereço."
        <b>Dolores:</b> "Rua das Laranjeiras, número 217! Por favor, investigadora, venha logo! Ele deve estar sofrendo!"
        <b>Você:</b> "Estou a caminho."
        <b>Dolores:</b> "Obrigada… obrigada… você é um anjo…"
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
        
        <b>Descrição dacas:</b>
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

        <b>Diálogo comdolore:</b>

        <b>Dolores:</b> Investigadora! Graças a Deus que veio! Entre, entre… eu tô desesperada…
        <b>Você:<b/> Calma, dona Dolores. Me conte exatamente o que aconteceu.
        <b>Dolores:</b> Eu acordei, fiz meu chimarrão… botei a ração do Bisteca… fui para minha cadeira de balanço…mas… quando chamei ele… nada. Nem um miado. Isso nunca aconteceu antes!
        Ela limpa as lágrimas com o lenço.
        <b>Você:<b/> A senhora ouviu algum barulho durante a madrugada?
        <b>Dolores:</b> Ouvi sim… um barulho no portão… como se alguémE há algo mais: marcas na terra, mas você tem dificuldade em interpretá-las completamente tivesse mexido… mas pensei que fosse o vento!
        Vocês ouvem do outro lado da rua, a voz do vizinho:
        <b>Vizinho:</b> Parem com essa choradeira, foi só um gato!!
        Ele fecha a porta e volta para dentro de casa. 
        <b>Thalita:</b> Quem é ele?
        
        <i>Dolores responde com desgosto.</i>
        
        <b>Dolores:</b>  Ah, aquele? É só meu vizinho, ele odeia gatos.

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
        "atributos-adicao-dados": ["investigacao"],
        "atributos-descontado-dados": [],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-portao",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [],
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-portao",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-portao",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [],
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
                "text": "Ir à loja da Dona Marisa",
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
                "text": "Ir à loja da Dona Marisa",
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
                "text": "Ir à loja da Dona Marisa",
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
        "atributos-adicao-dados": ["investigacao", "percepcao"],
        "atributos-descontado-dados": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-tigela",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-tigela",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": []
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-tigela",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
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
                <b>Dolores:</b> Eu ouvi uns passos correndo aqui ontem… mas achei que fosse algum cachorro do vizinho.
                
                Você sabe que não eram de cachorro.
                Aquilo parece… pegada de fantasia infantil, daquelas com pés enormes de dinossauro.
                Mas quem estaria fantasiado, correndo pelo quintal da Dolores?`,
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
                <b>Dolores:</b> Eu ouvi uns passinhos correndo aqui… mas não sei se era cachorro, criança… sei lá.
                Você percebe que existe alguém ou algo envolvido — mas não consegue montar o quadro completo ainda.`,
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
                "Ah… provavelmente o próprio Bisteca esbarrou e virou o pote."
                As pegadas na terra?
                Você nem percebe como um padrão — parecem só marcações aleatórias de pássaro ou de vento.
                Nada demais.
                Dolores, tentando ajudar, pega algo no bolso:
                <b>Dolores:</b> Mas… olha essa pegada grande que ficou aqui no canto! Não parece de cachorro… nem de gato…
                Você olha rapidamente e dá de ombros.
                Mas Dolores está desesperada:
                <b>Dolores:</b> A Dona Marisa vende uns brinquedos desses de dinossauro pra criança… talvez alguém tenha passado aqui! Vai lá falar com ela, por favor!
                Mesmo sem entender nada, você acaba sendo praticamente empurrada para a pet shop.`,
        "choices": [
            {
                "text": "Ir à loja da Dona Marisa",
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
        "atributos-adicao-dados": ["investigacao", "percepcao"],
        "atributos-descontado-dados": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-observar-quintal",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-observar-quintal",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-observar-quintal",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
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
                "Eu não tenho crianças aqui… e nunca vi esse adesivo."
                Seu instinto se afirma:
                Uma criança esteve ali — recentemente — e estava com pressa.`,
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
                "text": "Ir à loja da Dona Marisa",
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
        "atributos-adicao-dados": ["investigacao", "intelecto"],
        "atributos-descontado-dados": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-perguntar-mais",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    },
                    {
                        "attr": "intelecto",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-perguntar-mais",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-perguntar-mais",
                "atributos-adicao-jogador": [
                    {
                        "attr": "intelecto",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            }
        }
    },
    // sucesso perguntar-mais
    "sucesso-perguntar-mais": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você se aproxima de Dolores com postura firme, fazendo perguntas diretas, mas acolhedoras.
                Ela percebe que você está realmente tentando ajudá-la — e isso faz com que relaxe um pouco.
                Ao responder, você nota até detalhes que ela não queria admitir de início.
                Dolores respira fundo e conta:
                "Vi o Bisteca ontem à noite. Ele dormiu perto da janela, como sempre."

                "Ele quase nunca sai do quintal."

                "Teve… um homem estranho. Passou duas vezes perguntando se eu tinha algo de valor no quintal."
                Seu tom mostra que ela ficou mais incomodada do que havia dito antes.

                "Ontem à tarde ouvi um estalo na cerca. Achei que fosse o vento… mas agora não tenho tanta certeza."

                Você percebe claramente que Dolores está com medo — não do gato desaparecer, mas de estar sendo observada há dias.
                Com sua habilidade, você faz as perguntas certas e extrai exatamente o que ela sabe.`,
        "choices": [
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            }
        ]
    },
    // parcial perguntar-mais
    "parcial-perguntar-mais": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você conversa com Dolores, e ela responde prontamente, mas parece esquecer alguns detalhes até que você a relembra.
                Ela diz:
                Viu o gato ontem à noite dormindo na janela.

                Ele quase nunca sai do quintal.

                Um homem estranho passou perguntando se ela tinha algo de valor, mas ela fala isso de forma vaga, como se não lembrasse direito.

                Ouviu um estalo na cerca e achou que fosse nada.

                Você consegue montar uma ideia geral do que aconteceu, mas sente que faltou alguma coisa — algum detalhe pequeno que ela deixou escapar.`,
        "choices": [
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            }
        ]
    },
    // falha perguntar-mais
    "falha-perguntar-mais": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você tenta interrogar Dolores, mas sua mente embaralhada não ajuda.
                As perguntas saem na ordem errada ou parecem mais acusatórias do que você pretendia.
                Dolores fica desconfortável.
                As respostas dela vêm curtas, truncadas, e você não consegue interpretar direito:
                Diz que viu o gato ontem, mas muda de horário no meio da explicação.

                Afirma que o gato não sai do quintal, mas parece hesitar.

                Fala sobre um homem estranho, mas não lembra se foi "duas vezes" ou "uma vez só".

                O estalo na cerca vira algo confuso — talvez tenha sido o vento, talvez não.

                No fim, você não tem certeza se ela está escondendo algo ou se você simplesmente não conseguiu conduzir direito a conversa.`,
        "choices": [
            {
                "text": "Continuar investigando",
                "target": "continuar-investigando"
            }
        ]
    },
    // ############### continuar investigando
    "continuar-investigando": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Continuar investigando - Teste de Investigação + Percepção",
        "choices": [
            {
                "text": "Examinar a fechadura do portão",
                "target": "examinar-fechadura-portao"
            },
            {
                "text": "Verificar se há câmeras na vizinhança",
                "target": "verificar-cameras"
            },
            {
                "text": "Analisar o chão perto do portão",
                "target": "analisar-chao"
            },
            {
                "text": "Conversar com um vizinho que está olhando curioso",
                "target": "conversar-vizinho"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false,
    },
    // ################# Examinar a fechadura do portão
    "examinar-fechadura-portao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Examinar a fechadura do portão - Teste de Investigação + Percepção",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao-dados": ["percepcao"],
        "atributos-descontado-dados": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-examinar-fechadura",
                "atributos-adicao-jogador": [
                    {
                        "attr": "percepcao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-examinar-fechadura",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-examinar-fechadura",
                "atributos-adicao-jogador": [
                    {
                        "attr": "intelecto",
                        "value": 1
                    },
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        }
    },
    // sucesso examinar-fechadura
    "sucesso-examinar-fechadura": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você se aproxima da fechadura com cuidado, examinando cada detalhe: a borda do metal, a pintura e o encaixe do mecanismo.
                Nada ali indica arrombamento: nenhuma marca de chave forçada, nenhum arranhão profundo, nenhuma folga incomum.
                
                Mas então você nota algo que alguém distraído jamais veria:
                Um pequeno pingo de tinta vermelha, quase invisível, perto do encaixe da fechadura.
                A mesma cor do brinquedinho de ratinho encontrado — ou mencionado por Dolores.
                
                É forte demais para ser coincidência.
                Você rapidamente conecta as pistas: a coisa que passou pelo portão estava em contato com o brinquedo.
                
                Alguém — ou algo — bateu ali, mas não com força suficiente para quebrar.
                Dolores observa você analisar e parece impressionada com sua precisão.`,
        "choices": [
            {
                "text": "Verificar se há câmeras na vizinhança",
                "target": "verificar-cameras"
            },
            {
                "text": "Analisar o chão perto do portão",
                "target": "analisar-chao"
            },
            {
                "text": "Conversar com um vizinho que está olhando curioso",
                "target": "conversar-vizinho"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false
    },
    // parcial examinar-fechadura
    "parcial-examinar-fechadura": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você examina a fechadura, mas ela parece completamente normal à primeira vista.
                Quase desiste, até perceber um pequeno arranhão — fino, quase imperceptível.
                Não parece de ferramenta ou de tentativa de invasão.
                Parece mais…
                uma marca de unha. Ou pata.
                Pode ter sido o próprio Bisteca tentando escapar, arranhando de leve o metal.
                Ou algo do tamanho dele tentando entrar.
                Você não tem certeza.
                É uma pista, mas não muito clara.`,
        "choices": [
            {
                "text": "Verificar se há câmeras na vizinhança",
                "target": "verificar-cameras"
            },
            {
                "text": "Analisar o chão perto do portão",
                "target": "analisar-chao"
            },
            {
                "text": "Conversar com um vizinho que está olhando curioso",
                "target": "conversar-vizinho"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false
    },
    // falha examinar-fechadura
    "falha-examinar-fechadura": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você acha que alguém tentou arrombar a casa (erro que aumenta a tensão), e Dolores confirma nervosa:
                    "É por isso que precisam ir falar com a Marisa! Ela conhece todo mundo do bairro!"`,
        "choices": [
            {
                "text": "Ir à loja da Dona Marisa",
                "target": "loja-marisa"
            }
        ]
    },

    // ###################### verificar-cameras
    "verificar-cameras": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Não há câmeras na casa, mas a casa ao lado tem uma… que está desligada há semanas.",
        "choices": [
            {
                "text": "Examinar a fechadura do portão",
                "target": "examinar-fechadura-portao"
            },
            {
                "text": "Analisar o chão perto do portão",
                "target": "analisar-chao"
            },
            {
                "text": "Conversar com um vizinho que está olhando curioso",
                "target": "conversar-vizinho"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false
    },

    // ###################### analisar-chao
    "analisar-chao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Analisar o chão perto do portão - Teste de Investigação",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao-dados": ["investigacao"],
        "atributos-descontado-dados": [],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-analisar-chao",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-analisar-chao",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ]
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-analisar-chao",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        }
    },

    // sucesso-analisar-chao
    "sucesso-analisar-chao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Ao se abaixar, você não olha apenas — você conecta os detalhes.
                
                Primeiro, vê as marcas leves no chão.
                Não são pegadas, mas sim uma linha contínua, como se algo pequeno tivesse sido arrastado.
                Depois, nota os pequenos grãos de ração espalhados, formando quase um "caminho".
                E então, o detalhe crucial:
                
                Um fiozinho de tecido azul, preso numa farpa do portão, tremulando levemente ao vento.
                Cor comum… mas combinando perfeitamente com mochilas infantis que você já viu por aí.
                
                Combinando tudo, você percebe claramente:
                - O arrasto começa na tigela do Bisteca e termina na rua.
                - E segue justamente na direção da loja da Dona Marisa.
                
                É como se a criança tivesse derrubado ração, arrastado algo — talvez o brinquedo — e saído correndo.
                Você praticamente visualiza a cena acontecendo na sua mente.`,
        "choices": [
            {
                "text": "Examinar a fechadura do portão",
                "target": "examinar-fechadura-portao"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Conversar com um vizinho que está olhando curioso",
                "target": "conversar-vizinho"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false,
    },
    // parcial-analisar-chao
    "parcial-analisar-chao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você encontra as mesmas pistas:
                marcas leves no chão
                ração espalhada
                um fio de tecido azul
                Mas não consegue montar o quebra-cabeça inteiro.
                Percebe o fio preso no portão e pensa:
                "Isso é de roupa? Mochila? Gato? Difícil dizer…"
                A única coisa realmente clara é:
                - As marcas vão em direção à calçada… mas você não tem certeza para onde depois disso.
                Dolores observa você analisando e pergunta tímida:
                [Dolores]
                "Isso significa que alguém passou? Ou… que o Bisteca tentou sair?"
                Você ainda não quer afirmar nada.`,
        "choices": [
            {
                "text": "Examinar a fechadura do portão",
                "target": "examinar-fechadura-portao"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Conversar com um vizinho que está olhando curioso",
                "target": "conversar-vizinho"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false,
    },
    // falha-analisar-chao
    "falha-analisar-chao": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `A confusão pesa no seu raciocínio.
                Você vê as marcas no chão, mas interpreta mal:
                "Será que o gato arrastou o pote de ração?"
                Os grãozinhos até fazem sentido — gatos são bagunceiros.
                O fio azul, no entanto, te engana completamente:
                você conclui que pode ser do próprio portão se desgastando.
                Mas Dolores, observando atentamente, franze a testa:
                [Dolores]
                "Mas… isso não parece com tinta descascando, né? Parece tecido mesmo! Eu achei esse fiapinho hoje de manhã…"
                Ela entrega outro detalhe contraditório:
                [Dolores]
                "E o pote estava na sombra. O Bisteca nunca arrasta o pote pra longe da sombra."
                Você percebe que errou — mas isso também te obriga a reconsiderar, o que aumenta sua investigação no futuro.`,
        "choices": [
            {
                "text": "Examinar a fechadura do portão",
                "target": "examinar-fechadura-portao"
            },
            {
                "text": "Verificar se há câmeras na vizinhança",
                "target": "verificar-cameras"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false,
    },


    // ###################### Conversar-vizinho
    "conversar-vizinho": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você avista um senhor sentado na calçada. Você decide ir falar com ele.
                
                <b>Thalita:</b> Bom dia, senhor! 
                <b>Vizinho:</b> Oh, bom dia, como vai??
                <b>Thalita:</b> Gostaria de fazer algumas perguntas ao senhor.
                <b>Vizinho:</b> Claro, pode perguntar.
                <b>Thalita:</b> O gato da senhora Dolores sumiu esta manhã, o senhor lembra de ter visto algo?
                <b>Vizinho:</b> Bem, deixe-me ver…hm…Ah, eu vi uma criança correndo aqui mais cedo… parecia estar segurando um bicho. Achei que era um coelho! Hahaha!
                <b>Thalita:</b> Um gato branco pode parecer um coelho…
                <b>Vizinho:</b> Ele sempre passa naquela lojinha da esquina… deve gostar de animais.`,
        "choices": [
            {
                "text": "Examinar a fechadura do portão",
                "target": "examinar-fechadura-portao"
            },
            {
                "text": "Analisar a tigela",
                "target": "analisar-tigela"
            },
            {
                "text": "Verificar se há câmeras na vizinhança",
                "target": "verificar-cameras"
            },
            {
                "text": "Procurar pegadas ou marcas no muro",
                "target": "procurar-pegadas"
            }
        ],
        "roll-dices": false
    },

    // ###################### procurar-pegadas
    "procurar-pegadas": {
        "title": "Cena 02 - Casa de Dolores",
        "text": "Procurar pegadas ou marcas no muro - Teste de Investigação + Percepção",
        "choices": [],
        "roll-dices": true,
        "atributos-adicao-dados": ["investigacao", "intelecto "],
        "atributos-descontado-dados": ["confusao"],
        "roll-results": {
            "success": {
                "text": "Você identifica algo incomum",
                "target": "sucesso-procurar-pegadas",
                "atributos-adicao-jogador": [
                    {
                        "attr": "intelecto",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            },
            "partial": {
                "text": "Uma pista parcial",
                "target": "parcial-procurar-pegadas",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": []
            },
            "fail": {
                "text": "Você interpreta errado",
                "target": "falha-procurar-pegadas",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": []
            }
        }
    },

    // sucesso-procurar-pegadas
    "sucesso-procurar-pegadas": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você examina o muro com cuidado, passando a mão pelo reboco irregular.
                
        Logo percebe algo que não é comum:
                - Arranhões verticais, muito mais altos do que o Bisteca conseguiria alcançar.
                Isso indica claramente que alguém levantou o gato — ou levantou alguma coisa — até o topo do muro.
                
                Ao olhar mais de perto, encontra um segundo detalhe:
                - Um pó fino e cinzento preso nas pontas dos arranhões, igual ao pó da calçada próxima à pet shop da Marisa.
                
                É como se algo tivesse sido arrastado ou apoiado lá antes de vir parar aqui.
                Você não tem mais dúvidas: o caminho aponta para a loja`,
        "choices": [
            {
                "text": "Ir à loja",
                "target": "loja-marisa"
            }
        ],
        "roll-dices": false,
    },
    // parcial-procurar-pegadas
    "parcial-procurar-pegadas": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você observa os arranhões no muro.
                Eles são recentes… talvez.
                
                Ou talvez só pareçam recentes por causa da luz.
                Enquanto tenta decidir, algo chama sua atenção no chão, encostado na base do muro:
                - Um pedacinho de plástico colorido, provavelmente vindo de um brinquedo infantil.
                Dolores também se inclina para olhar e murmura:
                
                <b>Dolores:<b/> "Eu já vi desses… a loja da esquina vende um monte de brinquedinho barato assim."
                Não é prova definitiva, mas é mais um indício apontando para o mesmo lugar.`,
        "choices": [
            {
                "text": "Ir à loja",
                "target": "loja-marisa"
            }
        ],
        "roll-dices": false,
    },
    // falha-procurar-pegadas
    "falha-procurar-pegadas": {
        "title": "Cena 02 - Casa de Dolores",
        "text": `Você examina os arranhões… mas sinceramente, parecem desgaste normal.
                O muro é velho, afinal.
                "Deve ser coisa antiga, nada relevante."
                É o que você pensa.
                Mas Dolores, nervosa e insistente, quase te interrompe:
                [Dolores]
                "Mas olha isso aqui! Eu achei no quintal hoje mais cedo!"
                Ela mostra um pequeno brinquedinho de plástico, sujo de terra.
                [Dolores]
                "Isso é vendido lá na pet shop! Tem certeza que não tem nada acontecendo? Por favor, vá falar com a Marisa!"
                Mesmo não encontrando nada útil, você é empurrada emocionalmente rumo à mesma direção.`,
        "choices": [
            {
                "text": "Ir à loja",
                "target": "loja-marisa"
            }
        ],
        "roll-dices": false,
    },
}
