# Especificação do projeto

<span style="color:red">Pré-requisitos: <a href="01-Contexto.md"> Documentação de contexto</a></span>

Esta seção apresenta a especificação detalhada do projeto para a sorveteria "Ice Delícias". A definição do problema e a solução proposta são descritas a partir da perspectiva dos usuários.

Os principais elementos abordados incluem:

> - Definição de personas

> - Histórias de usuários

> - Requisitos funcionais e não funcionais

> - Restrições do projeto

> - Diagrama de casos de uso
> - 
## Personas

1- Carla Martins

Idade: 35 anos

Profissão: Proprietária da sorveteria "Ice Delícias"

Perfil: Carla administra a sorveteria há 10 anos e deseja melhorar a eficiência operacional, reduzir desperdícios e adotar práticas sustentáveis.

Necessidades: Melhorar o controle financeiro e de estoque, reduzir custos e adotar práticas ecológicas.

2- João Silva

Idade: 28 anos

Profissão: Gerente da sorveteria

Perfil: Responsável pelo estoque e organização financeira. Utiliza sistemas básicos para registrar insumos, mas sente dificuldades em manter um controle preciso.

Necessidades: Um sistema eficiente para gerenciamento de estoque e finanças.

3- Ana Oliveira

Idade: 22 anos

Profissão: Atendente

Perfil: Trabalha na sorveteria e precisa registrar vendas e acompanhar o estoque.

Necessidades: Interface simples para registrar produtos vendidos e visualizar estoque.

4- Clientes da Sorveteria

Perfil: Frequentam a sorveteria regularmente.

Necessidades: Informações sobre promoções e incentivos à reciclagem.
## Histórias de usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`   | QUERO/PRECISO ... `FUNCIONALIDADE`   | PARA ... `MOTIVO/VALOR`                 |
|------------------------|--------------------------------------|-----------------------------------------|
| Administrador          | Cadastrar insumos no sistema         | Controlar melhor o estoque              |
| Administrador          | Alterar permissões                   | Permitir que outros administrem         |
| Funcionário            | Registrar entrada e saída de insumos | Manter controle atualizado              |
| Cliente                | Acompanhar pontos de reciclagem      | Saber onde posso descartar embalagens   |
| Cliente                | Receber descontos por reciclagem     | Ser recompensado por ações sustentáveis |


## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade dos requisitos, aplique uma técnica de priorização e detalhe como essa técnica foi aplicada.

### Requisitos funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar as requisições do usuário em no máximo 3 segundos |  BAIXA | 

Com base nas histórias de usuários, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos não funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).

Lembre-se de que cada requisito deve corresponder a uma e somente uma característica-alvo da sua solução. Além disso, certifique-se de que todos os aspectos capturados nas histórias de usuários foram cobertos.

> **Links úteis**:
> - [O que são requisitos funcionais e requisitos não funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [Entenda o que são requisitos de software, a diferença entre requisito funcional e não funcional, e como identificar e documentar cada um deles](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Restrições

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

O projeto está restrito aos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O projeto deverá ser entregue até o final do semestre |
|002| O custo total do projeto não deve exceder o orçamento definido       |

## Diagrama de casos de uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos. Ele utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. O diagrama contempla a fronteira do sistema e o detalhamento dos requisitos funcionais, com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “diagrama de casos de uso”.

> **Links úteis**:
> - [Criando casos de uso](https://www.ibm.com/docs/pt-br/engineering-lifecycle-management-suite/design-rhapsody/10.0?topic=cases-creating-use)
> - [Como criar diagrama de caso de uso: tutorial passo a passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
