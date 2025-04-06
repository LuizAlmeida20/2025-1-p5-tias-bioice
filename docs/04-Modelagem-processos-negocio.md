# Modelagem dos processos de negócio

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

## Modelagem da situação atual (Modelagem AS IS)

Os processos descritos a seguir representam o funcionamento atual da sorveteria Ice Delícias, com foco nas atividades de Descarte de Embalagens e Controle de Validade dos Produtos. Atualmente, essas tarefas são realizadas manualmente, sem o apoio de um sistema automatizado, o que as torna suscetíveis a falhas humanas, retrabalho e baixa eficiência operacional.

### Descarte de Embalagens
![Diagramas BioIce - AsIs](https://github.com/user-attachments/assets/47a211f9-7bce-486e-a07a-c223adceea85)

Este processo é inteiramente manual, não há separação eficiente de resíduos recicláveis, o que dificulta a gestão sustentável de descarte e impacta negativamente o meio ambiente.


### Controle de Validade
![Diagramas BioIce - AsIs](https://github.com/user-attachments/assets/7984407f-c2fd-4ef3-8d61-01d67c224059)

A verificação de validade é feita visualmente ou por anotações em papel, o que abre margem para erros e uso indevido de produtos vencidos, afetando a segurança alimentar e a qualidade do atendimento.

## Descrição geral da proposta (Modelagem TO BE)

A proposta TO-BE tem como objetivo modernizar e automatizar os processos de descarte de embalagens e controle de validade de produtos, utilizando recursos tecnológicos como QR Code, digitalização e automação de verificação. A transformação digital nestes processos visa reduzir falhas humanas, aumentar a rastreabilidade, minimizar perdas e melhorar a eficiência operacional.

A introdução de leitura de QR Codes, verificação automática de validade e sinalizações automatizadas sobre prazos de vencimento são os principais elementos inovadores.

### Limites da Solução

Apesar dos ganhos em eficiência, a proposta possui limitações:

- Dependência de infraestrutura tecnológica (leitores de QR Code, sistema de verificação);
- Necessidade de capacitação dos colaboradores para adaptação aos novos processos;
- Investimento inicial relativamente alto na implantação dos sistemas automatizados;
- Possível resistência cultural à mudança nos processos tradicionais.

### Alinhamento com Estratégias e Objetivos do Negócio

Essas propostas se alinham diretamente com os seguintes objetivos estratégicos:

- Redução de perdas operacionais (via descarte tardio ou incorreto);
- Melhoria na conformidade sanitária (controle rigoroso de validade e descarte correto);
- Otimização de tempo dos colaboradores com a automatização de verificações e processos;
- Sustentabilidade: melhoria na gestão de resíduos e descarte;
- Transformação digital, alinhada à inovação e competitividade do setor.

### Descarte de Embalagens
![Diagramas BioIce - TO BE](https://github.com/user-attachments/assets/8c23417c-1e70-4928-8829-732552f4f53f)

Melhorias propostas:
- Inclusão de QR Code nas embalagens para escaneamento.
- Coleta automatizada de informações sobre descarte correto.
- Separação automatizada de itens para reciclagem ou descarte final.
- Notificação de problemas na cadeia de descarte para correções proativas.

Impacto:
- Diminuição de erros no descarte.
- Melhor controle ambiental e logístico.
- Informações registradas e rastreáveis.

### Controle de Validade
![Diagramas BioIce - TO BE (1)](https://github.com/user-attachments/assets/b5eaf3f4-9225-4044-8ae8-b786405b6abf)

Melhorias propostas:
- Verificação automática de validade dos produtos.
- Separação automática de itens vencidos e alerta para próximos vencimentos.
- Armazenamento otimizado de produtos em situação regular.
- Produção reorganizada de acordo com validade, evitando desperdícios.

Impacto:
- Redução significativa de perdas por vencimento.
- Ações proativas com base em alertas.
- Garantia de que produtos vencidos não serão disponibilizados ao consumidor.

## Modelagem dos processos

[PROCESSO 1 - Controle de descarte](./processes/processo-1-Controle-de-Descarte.md "Detalhamento do processo 1.")

[PROCESSO 2 - Controle de validade](./processes/processo-2-Controle-de-Validade.md "Detalhamento do processo 2.")




## Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Coloque no mínimo 5 indicadores.

Use o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Fonte de dados** | **Fórmula de cálculo** |
| ---           | ---           | ---           | ---             | ---             |
| Percentual de reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total de atendimentos | Tabela Reclamações | número total de reclamações / número total de atendimentos |
| Taxa de requisições atendidas | Melhorar a prestação de serviços medindo a porcentagem de requisições atendidas| Mede a % de requisições atendidas na semana | Tabela Solicitações | (número de requisições atendidas / número total de requisições) * 100 |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês | Tabela Pedidos | (número de pedidos entregues / número total de pedidos) * 100 |


Obs.: todas as informações necessárias para gerar os indicadores devem estar no diagrama de classe a ser apresentado posteriormente.
