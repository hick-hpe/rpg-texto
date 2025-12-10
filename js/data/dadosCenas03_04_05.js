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
                "target": "perguntar-sobre-criancas"
            },
            {
                "text": "Examinar a área da loja",
                "target": "examinar-area-loja"
            }
        ],
        "roll-dices": false
    },
    // ################ perguntar-sobre-criancas
    "perguntar-sobre-criancas": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Marisa olhando para os lados:
                — Eles vivem por aqui… um grupo de quatro ou cinco.
                Sempre com fantasias malucas.
                — Um deles… o baixinho…
                Sempre com rabo de fantasia! Dragão, dinossauro… ninguém sabe.
                — E olha… ele aponta um objeto no balcão
                Um deles derrubou isso hoje cedo.
                É um ratinho de borracha, quebrado, sujo…
                O MESMO modelo do que Thalita encontrou no quintal.
                
                > Teste de Percepção
                `,
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Thalita percebe a ligação",
                "target": "sucesso-perguntar-sobre-criancas",
                "atributos-adicao-jogador": [
                    {
                        "attr": "investigacao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            },
            "fail": {
                "text": "Thalita não liga imediatamente os pontos",
                "target": "falha-perguntar-sobre-criancas",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "atributos-adicao-dados": ["percepcao", "social"],
        "atributos-descontado-dados": [],
    },

    // sucesso-perguntar-sobre-criancas
    "sucesso-perguntar-sobre-criancas": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "O fato de o mesmo brinquedo e a mesma ração terem sido usados pelas crianças levanta uma forte suspeita sobre o grupo. Thalita percebe que há um padrão claro nos relatos, algo que sugere que elas podem ter tido contato direto com o que está procurando.",
        "choices": [
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ]
    },

    // falha-perguntar-sobre-criancas
    "falha-perguntar-sobre-criancas": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Thalita não liga imediatamente os pontos; as informações sobre as crianças parecem vagas, desconexas, e nada indica com clareza uma relação direta com o ocorrido.",
        "choices": [
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // ################ examinar-area-loja
    "examinar-area-loja": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Você observa:
                Pequenos grãos de ração caídos (os mesmos que achou no quintal da Dolores).
                Marcas de pés pequenos (crianças?).
                Rastros leves de arrasto que seguem para a calçada.
                Um fiozinho de tecido azul, que bate com o tipo de mochila infantil.

            > Teste Percepção`,
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Thalita percebe que o arrasto segue na direção da praça",
                "target": "sucesso-examinar-area-loja",
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
                "atributos-descontado-jogador": []
            },
            "fail": {
                "text": "Thalita não faz conexão completa",
                "target": "falha-examinar-area-loja",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "atributos-adicao-dados": ["percepcao", "social"],
        "atributos-descontado-dados": [],
    },

    // sucesso-examinar-area-loja
    "sucesso-examinar-area-loja": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Thalita percebe que o rastro segue na direção da praça, como se algo — ou alguém — tivesse sido puxado às pressas para fora da área da loja. A trilha é sutil, mas suficiente para indicar um caminho claro.",
        "choices": [
            {
                "text": "Continuar",
                "target": "continuar-examinar-area-loja"
            },
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ]
    },

    // falha-examinar-area-loja
    "falha-examinar-area-loja": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Thalita não faz uma conexão completa; a área parece confusa, marcada por pegadas antigas e sinais dispersos que dificultam qualquer conclusão clara sobre a direção do arrasto.",
        "choices": [
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // ################ continuar-examinar-area-loja
    "continuar-examinar-area-loja": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Thalita, ainda desconfiada, resolve aprofundar a investigação dentro da loja.

                Thalita:
                “Eu gostaria de falar com seus funcionários.”

                Marisa:
                “Claro, um momento.”

                Ela se vira para os fundos e chama dois funcionários: Anna e Diego.

                Eles se aproximam:
                Anna parece curiosa, mas calma.
                Diego parece levemente nervoso — talvez só tímido… talvez não.`,
        "choices": [
            {
                "text": "Falar com Anna",
                "target": "falar-com-anna"
            },
            {
                "text": "Falar com Diego",
                "target": "falar-com-diego"
            }
        ],
        "roll-dices": false
    },

    // ################ falar-com-anna
    "falar-com-anna": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "> Teste Percepção",
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Anna responde com naturalidade",
                "target": "sucesso-falar-com-anna",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [],
            },
            "partial": {
                "text": "Anna lembra de alguns detalhes… mas parece incerta.",
                "target": "parcial-falar-com-anna",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "Anna fica confusa com as perguntas e acaba confundindo Thalita ainda mais.",
                "target": "falha-falar-com-anna",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "atributos-adicao-dados": ["percepcao", "social"],
        "atributos-descontado-dados": [],
        "min-success": 10
    },

    // sucesso-falar-com-anna
    "sucesso-falar-com-anna": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Anna responde com naturalidade:
                Anna:
                “Eu vi umas crianças sim, logo cedo. Um delas entrou correndo e esbarrou na prateleira de brinquedos.
                Deixaram cair um saquinho de ração… e um brinquedinho. Acho que era aquele ratinho verde que ficou no chão.”
                Ela pensa um pouco mais, franzindo a testa.
                “Ah! E vi uma coisa estranha: um deles carregava algo no casaco. Algo que se mexia.
                Pensei que fosse só um filhote de cachorro… mas agora não tenho certeza.”

                Thalita ganha uma pista concreta.
                Pista desbloqueada:
                “Algo vivo foi levado no casaco de uma criança.”`,
        "choices": [
            {
                "text": "Falar com Diego",
                "target": "falar-com-diego"
            },
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // parcial-falar-com-anna
    "parcial-falar-com-anna": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Anna lembra de alguns detalhes… mas parece incerta.
                Anna:
                “Tinha criança aqui sim, mas eu estava no estoque… ouvi barulho, mas não vi direito.
                Acho que deixaram algo cair, talvez ração… ou um brinquedo.”
                Ela hesita.
                “Talvez o Diego saiba mais.”`,
        "choices": [
            {
                "text": "Falar com Diego",
                "target": "falar-com-diego"
            }
        ],
        "roll-dices": false
    },

    // falha-falar-com-anna
    "falha-falar-com-anna": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Anna fica confusa com as perguntas e acaba confundindo Thalita ainda mais.
                Anna:
                “Ah… não sei… acho que nem vieram crianças hoje. Ou vieram? Eu estava atendendo um senhor…”
                Ela mistura horários, fatos e detalhes.
                Thalita termina mais perdida do que antes.`,
        "choices": [
            {
                "text": "Falar com Diego",
                "target": "falar-com-diego"
            }
        ],
        "roll-dices": false
    },

    // ################ falar-com-diego
    "falar-com-diego": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "> Teste Percepção",
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Diego parece inquieto, esfregando as mãos no avental.",
                "target": "sucesso-falar-com-diego",
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
                ],
            },
            "partial": {
                "text": "Diego está nervoso, mas fala algo útil.",
                "target": "parcial-falar-com-diego",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "Diego fica muito nervoso com as perguntas e acaba falando algo errado — ou que soa errado.",
                "target": "falha-falar-com-diego",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "atributos-adicao-dados": ["percepcao", "social"],
        "atributos-descontado-dados": [],
        "min-success": 10
    },

    // sucesso-falar-com-diego
    "sucesso-falar-com-diego": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Diego parece inquieto, esfregando as mãos no avental.

                Diego:
                “Tá bom… eu vi. As crianças vieram sim.
                Uma delas… o menorzinho… entrou um pouco na loja.
                Ele me pediu se podia ver os brinquedos de gato.
                Tava segurando um bichinho branco no colo, mas tava escondendo dentro do casaco.”

                Ele olha em volta para ver se Marisa está ouvindo.

                “Saiu correndo antes que eu pudesse dizer algo.
                E… deixou cair um fiozinho azul. Acho que era da mochila.”`,
        "choices": [
            {
                "text": "Falar com Diego",
                "target": "falar-com-diego"
            },
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // parcial-falar-com-diego
    "parcial-falar-com-diego": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Diego está nervoso, mas fala algo útil.

                Diego:
                “Eu vi eles do lado de fora… acho que deixaram cair um brinquedo. Não sei se pegaram algo.”

                Ele aponta para a porta.

                “Eles sempre vão pela rua da pracinha… acho.”`,
        "choices": [
            {
                "text": "Falar com Diego",
                "target": "falar-com-diego"
            }
        ],
        "roll-dices": false
    },
    // falha-falar-com-digeo
    "falha-falar-com-digeo": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Diego fica muito nervoso com as perguntas e acaba falando algo errado — ou que soa errado.

                Diego:
                “Eu não vi nada!
                Quer dizer… não sei… talvez… eu estava limpando…”

                Ele se contradiz, gagueja.

                Thalita percebe algo estranho — uma leitura errada, mas convincente:

                “Será que Diego está escondendo algo?”`,
        "choices": [
            {
                "text": "Investigar mais diego",
                "target": "investigar-mais-diego"
            },
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // ############### investigar-mais-diego
    "investigar-mais-diego": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Algo no comportamento do Diego não bate.
                Ele evita olhar para Thalita, responde secamente, troca o peso de uma perna para a outra… e o suor na testa não combina com ar-condicionado gelado da loja.

                Thalita decide insistir.

                Thalita

                “Diego… você tem certeza de que não viu nada ontem?”

                Ele engole seco.

                Diego

                “…já falei que não.”

                Mas quando ele vira para sair, algo cai do bolso —
                um pedaço de tecido azul, igual ao fiozinho encontrado no quintal da Dolores.

                Thalita congela.
                Diego percebe tarde demais.

                Ele pega o tecido rapidamente e tenta esconder, mas a expressão dele se desfaz — é medo.

                Revelação

                Ele respira fundo, mãos tremendo.

                Diego

                “Olha… eu não ia me meter nisso… mas… o garoto que pegou o gato… é meu irmão.”

                Marisa arregala os olhos.

                Marisa

                “Diego! Por que não disse isso antes?!”

                Ele a ignora, olhando apenas para Thalita.

                Diego

                “Ele encontrou o gato sozinho, tá? Ele não queria machucar ninguém…
                mas ele não vai devolver. Ele acha que a Dolores não cuida direito.”

                Thalita nota algo ainda mais estranho:
                o rapaz dá um passo para trás, como se estivesse avaliando a distância entre eles.

                Não é medo dela.
                É como se ele estivesse cogitando impedir que ela continuasse.

                Diego (baixa a voz)

                “…meu irmão se apega fácil. E eu… faço qualquer coisa por ele.
                Qualquer coisa.”

                A atmosfera da loja fica gelada por um instante.

                Marisa tenta intervir, nervosa:

                Marisa

                “Diego… o que você está dizendo? Você está assustando a moça…”

                Ele não dobra.

                Diego

                “Se você for atrás dele, vai se arrepender.
                É melhor deixar o gato com ele.
                Pra todos ficarem bem.”`,
        "choices": [
            {
                "text": "Ameaçar Diego",
                "target": "ameacar-diego"
            },
            {
                "text": "Abrandar a confusão",
                "target": "abrandar-confusao"
            }
        ],
        "roll-dices": false
    },

    // ################ ameacar-diego
    "ameacar-diego": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Thalita dá um passo à frente, encarando Diego sem desviar os olhos.

                Thalita
                “Se você ou seu irmão machucarem esse gato, eu faço questão de chamar a polícia.
                E se tentar me impedir mais uma vez… vai se arrepender você.”

                Diego empalidece.
                Por um instante, ele parece pronto para responder — mas não consegue.
                O olhar dele desvia.
                Ele percebe que passou dos limites.

                Marisa, desesperada, tenta intervir:

                Marisa
                “Chega! Vocês dois, por favor!”

                Mas o dano já está feito.
                O clima é irrecuperável.

                Thalita vira de costas e sai da loja.
                Diego observa, tenso, mas não ousa segui-la.`,
        "choices": [],
        "roll-dices": false,
        "atributo-less": {
            "confusao": 1,
            "social": 2
        }
    },

    // ################ abrandar-confusao
    "abrandar-confusao": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Thalita tenta respirar fundo e controlar o clima pesado depois da ameaça de Diego.
                Ela tenta evitar que a situação piore.
                
                > Teste Social`,
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Você consegue abrandar a confusão",
                "target": "sucesso-abrandar-confusao",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "Você perde o controle",
                "target": "falha-abrandar-confusao",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 2
                    }
                ],
                "atributos-descontado-jogador": [
                    {
                        "attr": "social",
                        "value": 2
                    },
                    {
                        "attr": "intelecto",
                        "value": 1
                    }
                ]
            }
        },
        "atributos-adicao-dados": ["social"],
        "atributos-descontado-dados": [],
    },

    // sucesso-abrandar-confusao
    "sucesso-abrandar-confusao": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Thalita fecha os olhos por um instante e respira devagar.
                O nó no peito se afrouxa; ela recupera o foco.
                Thalita
                “…Vamos parar por aqui. Não quero brigar.”
                Diego hesita, mas baixa o olhar.
                Marisa solta um suspiro de alívio, relaxando os ombros.
                Diego
                “Tá… faz o que você quiser.”
                Sem mais conflito, Thalita se vira e sai da loja, com a mente mais clara e a investigação ainda aberta.`,
        "choices": [
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // falha-abrandar-confusao
    "falha-abrandar-confusao": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Thalita tenta respirar… mas a ansiedade aperta o peito.
                A voz de Diego ecoa na cabeça dela, e a tensão explode fora de lugar.
                Thalita
                “VOCÊ NÃO ENTENDE! Eu só quero AJUDAR!”
                A voz dela sai mais alta do que deveria.
                Marisa leva um susto.
                Clientes na loja olham.
                Diego dá um passo para trás, assustado e confuso.
                O rosto de Thalita esquenta.
                A mente embaralha.
                Ela tenta se recompor, mas já sabe:
                perdeu o controle da situação.
                Diego
                “…Isso tá ficando estranho. Vai embora.”
                Sem alternativa, Thalita se retira da loja, ainda tremendo, frustrada com si mesma.`,
        "choices": [
            {
                "text": "Voltar à casa da Dona Dolores",
                "target": "voltar-casa-dolores"
            }
        ],
        "roll-dices": false
    },

    // ################ voltar-casa-dolores
    "voltar-casa-dolores": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": `Dolores está totalmente exausta, segurando café frio.
                Thalita:
                — Dona Dolores, as crianças da pet shop… qual rua elas vão?
                Dolores quase dormindo em pé:
                — Deixa eu pensar… ah… elas vão pra Rua do Armazém Antigo… acho.
                Pausa.
                — Ou era a… pracinha? Ai minha filha… tô com a cabeça uma farofa…
                `,
        "choices": [
            {
                "text": "Acreditar na Dolores",
                "target": "acreditar-na-dolores"
            },
            {
                "text": "Acreditar na Marisa",
                "target": "acreditar-na-marisa"
            },
            ,
            {
                "text": "> Teste percepção para tentar descobrir",
                "target": "teste-para-descobrir-rua-certa"
            },
        ],
        "roll-dices": false
    },
    // ############### acreditar-na-dolores
    "acreditar-na-dolores": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Acreditou na Dolores",
        "choices": [],
        "roll-dices": false
    },
    // ############### acreditar-na-marisa
    "acreditar-na-marisa": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Acreditou na Marisa",
        "choices": [],
        "roll-dices": false
    },
    // ############### teste para descobrir a rura
    "teste-para-descobrir-rua-certa": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "> Teste percepção para tentar descobrir",
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Você descobre a rua certa",
                "target": "sucesso-descobrir-rua-certa",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "Você não consegue saber qual é",
                "target": "falha-descobrir-rua-certa",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": []
            }
        },
        "atributos-adicao-dados": ["percepcao"],
        "atributos-descontado-dados": [],
    },
    // sucesso-descobrir-rua-certa
    "sucesso-descobrir-rua-certa": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Você descobre o caminho certo :D",
        "choices": [],
        "roll-dices": false
    },
    // falha-descobrir-rua-certa
    "falha-descobrir-rua-certa": {
        "title": "Cena 3: Pet Shop da Marisa",
        "text": "Você escolhe em quem acreditar",
        "choices": [
            {
                "text": "Acreditar na Dolores",
                "target": "acreditar-na-dolores"
            },
            {
                "text": "Acreditar na Marisa",
                "target": "acreditar-na-marisa"
            }
        ],
        "roll-dices": false
    }

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

