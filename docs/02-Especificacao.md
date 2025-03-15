# Especificação do projeto

<span style="color:red">Pré-requisitos: <a href="01-Contexto.md"> Documentação de contexto</a></span>

Esta seção apresenta a especificação detalhada do projeto para a sorveteria "Ice Delícias". A definição do problema e a solução proposta são descritas a partir da perspectiva dos usuários.

Os principais elementos abordados incluem:

- Definição de personas
- Histórias de usuários
- Requisitos funcionais e não funcionais
- Restrições do projeto
- Diagrama de casos de uso

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
|RF-001| Permitir o cadastro e controle de insumos no estoque | ALTA | 
|RF-002| Emitir relatórios de consumo e desperdício de insumos   | MÉDIA |
|RF-003| Implementar um módulo de controle financeiro   | ALTA |
|RF-004| Gerar indicadores de sustentabilidade para análise   | MÉDIA |
|RF-005| Criar um portal para clientes acompanharem pontos de reciclagem e descontos   | BAIXA |
### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar as requisições do usuário em no máximo 3 segundos |  BAIXA | 
|RNF-003| O sistema deve permitir múltiplos acessos simultâneos sem perda de desempenho |  ALTA | 
|RNF-004| Os dados financeiros e de estoque devem ser armazenados com segurança e criptografia |  ALTA | 

## Restrições

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

O projeto está restrito aos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O sistema deve funcionar em navegadores modernos (Chrome, Firefox, Edge), sem necessidade de instalação de software adicional. |
|002| A implementação deve ser concluída dentro do período letivo definido para a disciplina.      |
|003| O sistema deve ser desenvolvido utilizando tecnologias acessíveis e de fácil manutenção pela equipe.      |
|004| O banco de dados deve ser compatível com soluções gratuitas ou de baixo custo para viabilizar a implantação no cliente.      |
|005| As funcionalidades devem priorizar a simplicidade e usabilidade, garantindo que os funcionários da sorveteria consigam operar o sistema sem necessidade de treinamento avançado |
      |

## Diagrama de casos de uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos. Ele utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. O diagrama contempla a fronteira do sistema e o detalhamento dos requisitos funcionais, com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “diagrama de casos de uso”.

> **Links úteis**:
> - [Criando casos de uso](https://www.ibm.com/docs/pt-br/engineering-lifecycle-management-suite/design-rhapsody/10.0?topic=cases-creating-use)
> - [Como criar diagrama de caso de uso: tutorial passo a passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
