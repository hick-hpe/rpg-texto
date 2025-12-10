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
        "text": `Conversar com os vizinhos
                > Teste 2d6 +  social`,
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Thalita conversa com alguns moradores na calçada",
                "target": "sucesso-conversar-vizinhos-bairro",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
            },
            "partial": {
                "text": "Thalita consegue algumas informações",
                "target": "parcial-conversar-vizinhos-bairro",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": [],
            },
            "fail": {
                "text": "As pessoas estão ocupadas, sem paciência ou simplesmente não sabem",
                "target": "falha-conversar-vizinhos-bairro",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 2
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "atributos-adicao-dados": [],
        "atributos-descontado-dados": []
    },

    // sucesso-conversar-vizinhos-bairro
    "sucesso-conversar-vizinhos-bairro": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita conversa com alguns moradores na calçada. As pessoas, vendo o caderno dela e seu tom sério, colaboram rapidamente:
                Uma senhora com sacolas comenta:
                “Vi um menino baixinho, com uma fantasia verde, correndo com um gato branco no colo! Parecia com pressa, viu?”

                Um adolescente sentado no muro acrescenta:
                “Ele vive pegando coisa da pet shop. Não é maldade não… aquele menino é só distraído.”

                Outro morador aponta a direção:
                “Ele mora ali, naquela casa azul, no fim da rua.”
                
                > Recebe a localização exata da casa do garoto.`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            }
        ],
        "roll-dices": false
    },

    // parcial-conversar-vizinhos-bairro
    "parcial-conversar-vizinhos-bairro": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita consegue algumas informações, mas elas são vagas:
                “Um menino passou correndo hoje… acho que tinha algo no colo.”
                “Ele vive brincando com animais, coitado…”
                “Ele sempre aparece com brinquedos verdes… fantasia, eu acho.”

                As pessoas apontam direções diferentes.`,
        "choices": [
            {
                "text": "Procurar pistas físicas",
                "target": "procurar-pistas-fisicas",
            },
            {
                "text": "Tentar localizar a casa do garoto",
                "target": "localizar-casa-garoto",
            }
        ],
        "roll-dices": false
    },

    // falha-conversar-vizinhos-bairro
    "falha-conversar-vizinhos-bairro": {
        "title": "Cena 4: Investigação no bairro",
        "text": `As pessoas estão ocupadas, sem paciência ou simplesmente não sabem.
                Uma vizinha mais velha fecha a janela quando Thalita tenta puxar papo.
                Crianças correm sem responder.
                
                Um senhor resmungando diz:
                - “Garoto? Aqui tem um monte. Se vira aí, detective.”

                Thalita se sente perdida e terá de procurar pistas no ambiente.`,
        "choices": [
            {
                "text": "Procurar pistas físicas",
                "target": "procurar-pistas-fisicas",
            },
            {
                "text": "Tentar localizar a casa do garoto",
                "target": "localizar-casa-garoto",
            }
        ],
        "roll-dices": false
    },

    // ################ procurar-pistas-fisicas
    "procurar-pistas-fisicas": {
        "title": "Cena 4: Investigação no bairro",
        "text": "Procurar pistas físicas",
        "choices": [],
        "roll-dices": true,
        "roll-results": {
            "success": {
                "text": "Thalita encontra boas pistas.",
                "target": "sucesso-procurar-pistas-fisicas",
                "atributos-adicao-jogador": [],
                "atributos-descontado-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
            },
            "partial": {
                "text": "Thalita encontra pistas parciais.",
                "target": "parcial-procurar-pistas-fisicas",
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
                "target": "falha-procurar-pistas-fisicas",
                "atributos-adicao-jogador": [
                    {
                        "attr": "confusao",
                        "value": 1
                    }
                ],
                "atributos-descontado-jogador": []
            }
        },
        "min-success": 12,
        "atributos-adicao-dados": [],
        "atributos-descontado-dados": []
    },

    // sucesso-procurar-pistas-fisicas
    "sucesso-procurar-pistas-fisicas": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita encontra:
                - Marcas pequenas de tênis infantil na calçada.
                - Grãos de ração espalhados, coincidindo com o percurso do garoto.
                - Um rasgo verde de tecido, idêntico à fantasia mencionada pela Marisa.
                - Um ponto onde o gato arranhou a porta, mostrando resistência.

                As pistas levam diretamente à:
                📍 Casa Azul no final da rua.`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            }
        ],
        "roll-dices": false
    },

    // parcial-procurar-pistas-fisicas
    "parcial-procurar-pistas-fisicas": {
        "title": "Cena 4: Investigação no bairro",
        "text": `Thalita encontra:
                Pequenos grãos de ração
                Uma pegada infantil mal marcada
                Uma marca de mão na parede da calçada
                Mas os rastros se dividem em duas casas.
                Ela deve escolher entre:`,
        "choices": [
            {
                "text": "Ir para a casa azul",
                "target": "ir-casa-azul",
            },
            {
                "text": "Ir para a casa bege",
                "target": "ir-casa-bege-2",
            }
        ],
        "roll-dices": false
    },

    // falha-procurar-pistas-fisicas
    "falha-procurar-pistas-fisicas": {
        "title": "Cena 4: Investigação no bairro",
        "text": "Você não encontra nada :(",
        "choices": [
            {
                "text": "Conversar com os vizinhos",
                "target": "conversar-vizinhos-bairro"
            },
            {
                "text": "Tentar localizar a casa do garoto",
                "target": "localizar-casa-garoto"
            }
        ],
        "roll-dices": false
    },

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
        "min-success": 12,
        "atributos-adicao-dados": [],
        "atributos-descontado-dados": []
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
                "target": "cena-final-bom",
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
                A porta se fecha devagar, e Thalita percebe a mente embaralhar um pouco — pista errada, caminho errado.
                
                Thalita tenta seguir as pistas dos vizinhos, mas escolhe a casa errada.
                Ela bate na porta da casa amarela.
                Um morador irritado abre e rosna:
                “Garoto? Aqui não tem nenhum garoto! Bateu na casa errada!”
                A porta se fecha na cara dela.
                Confusa e perdida, Thalita tenta pedir ajuda a outras pessoas, mas agora ninguém colabora.
                Ela anda em círculos pelo bairro, desperdiçando tempo, até perceber que perdeu completamente o rastro.`,
        "choices": [
            {
                "text": "Continuar",
                "target": "cena-final-ruim",
            }
        ],
        "roll-dices": false
    },

    // ################ ir-casa-bege-3
    "ir-casa-bege-3": {
        "title": "Cena 4: Investigação no bairro",
        "text": `A casa bege tem um pequeno jardim na frente, com vasos gastos e um cheiro de café vindo da janela aberta.
                Quando Thalita bate, quem atende é uma menina de uns oito anos, segurando um balde de slime colorido.
                Menina:
                “Moça, aqui não tem nenhum gato branco, não… Mas eu já vi um menino correndo com um bichinho mais pra baixo da rua. Ele usa uma fantasia esquisita, sabe? De cauda verde!”
                A porta se fecha devagar, e Thalita percebe a mente embaralhar um pouco — pista errada, caminho errado.
                
                Thalita tenta seguir as pistas dos vizinhos, mas escolhe a casa errada.
                Ela bate na porta da casa amarela.
                Um morador irritado abre e rosna:
                “Garoto? Aqui não tem nenhum garoto! Bateu na casa errada!”
                A porta se fecha na cara dela.
                Confusa e perdida, Thalita tenta pedir ajuda a outras pessoas, mas agora ninguém colabora.
                Ela anda em círculos pelo bairro, desperdiçando tempo, até perceber que perdeu completamente o rastro.
                “Continuar” -> Cena: Final Ruim`,
        "choices": [
            {
                "text": "Continuar",
                "target": "cena-final-ruim",
            }
        ],
        "roll-dices": false
    },

    // ###########################################################################
    // Final Ruim - Você não achou o Bisteca
    // ###########################################################################
    "cena-final-ruim": {
        "title": "Cena Final - Casa Bege",
        "text": `Depois de rodar em círculos pelo quarteirão, Thalita finalmente para.
                O sol está se pondo. Os moradores fecham portas e janelas.
                Ninguém mais quer conversar.
                As pistas esfriam. O rastro se perde.
                
                Thalita sente o peso do fracasso.
                Thalita (pensamento):
                “Droga… eu falhei. O gato pode estar em qualquer lugar agora…”
                Ela retorna à casa de Dolores.
                Dolores vê Thalita chegando de mãos vazias, o rosto cansado e derrotado.
                
                Dolores (desesperada):
                “Você… não encontrou?
                Bisteca… meu amor… onde você está…”
                Dolores começa a chorar, e Thalita não consegue encará-la.
                O caso termina não resolvido. As pistas sumiram. As possibilidades se fecharam.
                Thalita volta para casa com a sensação amarga de ter decepcionado alguém que confiou nela.

                Você fracassou :(
                
                > <a href='/atributos.html' class="text-white">Reiniciar Jogo</a>
                `,
        "choices": [],
        "roll-dices": false
    },

    // ###########################################################################
    // Cena 5: A casa do garoto
    // ###########################################################################
    "cena-final-bom": {
        "title": "Cena Final - Casa do garoto",
        "text": `A casa simples tem uma porta azul descascada e uma janela com adesivos de dinossauro — imediatamente chamando a atenção de Thalita.
                Ao bater, ela ouve passos apressados e um arrastar de algo no chão.
                A porta se abre devagar.
                É um garoto de uns oito anos, cabelo bagunçado, usando uma fantasia verde com um rabo de dinossauro de tecido preso com fita.
                Quando ele vê Thalita, engole seco.
                [Thalita]
                Oi, tudo bem? Sou investigadora. Você poderia me responder uma coisa rapidinho?
                Ele hesita, mas abre a porta só o suficiente para ela ver o cômodo atrás.
                E lá está.
                O gato Bisteca — deitado na cama
                O Bisteca está completamente bem cuidado, enroscado em uma coberta infantil azul.
                Está dormindo tranquilo, barriga para cima, ronronando.
                Ao lado dele, um ratinho de brinquedo — o mesmo tipo encontrado no quintal da Dolores.
                O garoto suspira, derrotado.
                [Garoto]
                Tá bom… eu falo…
                Ele aperta o rabo da fantasia nas mãos, nervoso.`,
        "choices": [
            {
                "text": "Continuar",
                "target": "final-bom-confissao",
            }
        ],
        "roll-dices": false
    },

    // ################ final-bom-confissao
    "final-bom-confissao": {
        "title": "Cena Final - A Confissão",
        "text": `O garoto engole em seco, apertando o brinquedinho entre os dedos.
                [Garoto]
                “Eu… eu achei o gato na rua… ali perto da casa da dona Dolores.
                Ele tava seguindo meu brinquedo…”
                Ele ergue o ratinho de borracha, meio quebrado, como se fosse uma prova.
                
                [Garoto]
                “Eu só queria brincar mais um pouco… eu juro!
                Ele me seguiu, eu dei um pouco da minha ração…
                Eu ia devolver, de verdade!
                É que… ele gostou daqui…”
                Os olhos dele começam a marejar.
                Ele vira o rosto, esfregando o braço para tentar esconder as lágrimas — mas sua voz falha.
                
                [Garoto]
                “Eu… não queria deixar ninguém triste…”
                Thalita observa a cena, e por um instante a tensão da busca dá lugar a algo mais leve:
                não havia maldade ali, apenas ingenuidade.
                Antes que o silêncio pese demais, ela se aproxima com calma.
                
                [Thalita]
                “Ei… você fez a coisa certa me contando. A dona Dolores só ficou preocupada.
                E você cuidou bem do Bisteca. Isso importa.”
                O garoto ergue os olhos, tímido, mas aliviado por não ser repreendido.
                
                [Thalita]
                “Vamos levar ele de volta? Você pode vir junto, se quiser.”
                Ele hesita… mas então balança a cabeça em concordância.
                Eles caminham juntos até a porta, o garoto respirando fundo, se preparando para enfrentar Dolores — não como um ladrão, mas como uma criança que cometeu um erro e está tentando consertá-lo.
                A cena segue naturalmente até o reencontro, sem terminar abruptamente.`,
        "choices": [
            {
                "text": "Continuar",
                "target": "final-bom-chegada-casa-dolores",
            }
        ],
        "roll-dices": false
    },

    // ################ final-bom-chegada-casa-dolores
    "final-bom-chegada-casa-dolores": {
        "title": "Cena Final - A chegada na casa de Dolores",
        "text": `Thalita caminha até a casa de Dolores com o Bisteca nos braços, e o garoto segue logo atrás — cabeça baixa, segurando o ratinho de borracha como se fosse um escudo.

                Antes mesmo que Thalita possa bater, a porta se escancara.
                Dolores aparece esbaforida, olhos vermelhos de tanto procurar pela casa e pela rua.

                No momento em que ela vê o gato, o mundo dela desaba.

                [Dolores] (rompendo em choro)
                “BISTECA!! Meu amorzinho!!”

                Ela quase tropeça na pressa de alcançá-lo.
                Bisteca levanta a cabeça, solta um miado carinhoso e se aconchega no ombro dela, como se estivesse dizendo “voltei pra casa”.

                Dolores o aperta com cuidado, as mãos tremendo, inundada de alívio.

                [Dolores]
                “Meu Deus… eu achei que nunca mais ia ver você… obrigada, Thalita… obrigada…”

                Ela inspira fundo, tentando se recompor.

                [Dolores]
                “Ele… ele tá bem? Nada machucou ele, né?”

                Thalita sorri e faz um gesto tranquilo com a mão.

                [Thalita]
                “Ele está ótimo. Só… teve uma aventura um pouco longa demais.”

                Dolores ri entre lágrimas — e é então que ela nota o garoto parado atrás.

                Ele baixa ainda mais a cabeça.

                O silêncio pesa por um instante, até Dolores se aproximar devagar.
                Ela respira fundo, enxuga o rosto e põe uma mão leve no ombro dele.

                [Dolores]
                “Meu bem… obrigada por ter cuidado dele.
                Só… avisa, tá? Eu quase morri do coração.”

                O garoto finalmente ergue o olhar, tímido, mas mais leve.

                [Garoto]
                “Desculpa… eu não queria deixar ninguém triste.”

                Dolores sorri — um sorriso cansado, mas sincero — e afaga o cabelo dele.

                A tensão desaparece ali, substituída por um alívio compartilhado.
                Thalita observa a cena em silêncio, sentindo a satisfação calma de missão cumprida.`,
        "choices": [
            {
                "text": "Continuar",
                "target": "final-bom-desfecho",
            }
        ],
        "roll-dices": false
    },

    // ################ final-bom-desfecho
    "final-bom-desfecho": {
        "title": "Cena Final - Desfecho",
        "text": `Thalita observa a cena:
                O gato ronronando no colo da dona, o menino aliviado, uma confusão que nasceu apenas de bondade infantil e um brinquedinho inocente.
                A verdade enfim está clara.`,
        "choices": [
            {
                "text": "Continuar",
                "target": "final-bom-caso-resolvido",
            }
        ],
        "roll-dices": false
    },

    // ################ final-bom-caso-resolvido
    "final-bom-caso-resolvido": {
        "title": "Cena Final - Caso Resolvido!",
        "text": `Parabéns!!! Você encontrou o Bisteca!!!
                
                Dolores agradece com um sorriso emocionado, abraçando o gato com todo o carinho do mundo.
                O pequeno Bisteca dá um miado preguiçoso — claramente feliz por estar de volta ao lar.
                
                Obrigado por jogar :D
                
                > <a href='/' class="text-white">Voltar ao início!</a>`,
        "choices": [],
        "roll-dices": false
    },
}
