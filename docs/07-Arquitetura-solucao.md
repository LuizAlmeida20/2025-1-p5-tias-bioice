# Arquitetura da solução

![Diagrama sem nome drawio](https://github.com/user-attachments/assets/004d100a-c9d8-48f0-9be5-5adb53137a22)


## Diagrama de classes

![classes drawio](https://github.com/user-attachments/assets/82b2d077-4042-485f-8f61-3df6376c752d)


##  Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam realizar o cadastro de dados e os controles associados aos processos identificados, assim como suas recuperações.

Utilizando a notação do DER (Diagrama Entidade-Relacionamento), elabore um modelo, usando alguma ferramenta, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar também o controle de acesso dos usuários (partes interessadas nos processos) de acordo com os papéis definidos nos modelos do processo de negócio.

Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos.

### Modelo ER

O Modelo ER representa, por meio de um diagrama, como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.


### Esquema relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 

![Exemplo de um modelo relacional](images/modelo_relacional.png "Exemplo de modelo relacional.")
---



### Modelo físico

```SQL
-- Tabela de fornecedor
CREATE TABLE tb_fornecedor (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nm_fornecedor VARCHAR(255) NOT NULL,
    dt_criado_em DATE NOT NULL,
    dt_atualizado_em DATE NOT NULL
);

-- Tabela de domínio para o tipo de movimentação (entrada, saída...)
CREATE TABLE tb_tipo_movimentacao (
    id_tipo_movimentacao INT AUTO_INCREMENT PRIMARY KEY,
    nm_tipo_movimentacao VARCHAR(255) NOT NULL,
    dt_criado_em DATE NOT NULL,
    dt_atualizado_em DATE NOT NULL
);

-- Tabela para registrar movimentações de produtos
CREATE TABLE tb_movimentacao_produto (
    id_movimentacao INT AUTO_INCREMENT PRIMARY KEY,
    fk_produto INT NOT NULL,
    fk_tipo_movimentacao INT NOT NULL,
    nu_preco DECIMAL(15,2) NOT NULL,
    nu_quantidade INT NOT NULL,
    fk_fornecedor INT, -- Nullable
    dt_criado_em DATE NOT NULL,
    dt_atualizado_em DATE NOT NULL,
    FOREIGN KEY (fk_produto) REFERENCES tb_produto(id_insumo),
    FOREIGN KEY (fk_tipo_movimentacao) REFERENCES tb_tipo_movimentacao(id_tipo_movimentacao),
    FOREIGN KEY (fk_fornecedor) REFERENCES tb_fornecedor(id_fornecedor)
);

-- Tabela de usuário
CREATE TABLE tb_usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nm_email VARCHAR(255) NOT NULL,
    ds_senha VARCHAR(50) NOT NULL,
    fk_role INT NOT NULL,
    FOREIGN KEY (fk_role) REFERENCES tb_fornecedor(id_role)
);

-- Tabela para definir as permissões de cada usuário
CREATE TABLE tb_role (
    id_role INT AUTO_INCREMENT PRIMARY KEY,
    nm_role VARCHAR(255) NOT NULL
);

-- Tabela para registrar e editar o dia do cronograma da coleta.
CREATE TABLE tb_cronograma_coleta (
    id_cronograma_coleta INT AUTO_INCREMENT PRIMARY KEY,
    nm_dia_coleta VARCHAR(13) NOT NULL,
    dt_criado_em DATE NOT NULL,
    dt_atualizado_em DATE NOT NULL
);
```


## Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| Front-end      | HTML + CSS + JS + React |
| Back-end       | Node.js         |
| SGBD           | MySQL           |
| Deploy         | Vercel          |


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de software

Conceituar qualidade é uma tarefa complexa, mas ela pode ser vista como um método gerencial que, por meio de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto do desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem atendidas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, esse nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software. Com base nessas características e nas respectivas subcaracterísticas, identifique as subcaracterísticas que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software, considerando alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão à equipe avaliar os objetos de interesse.

> **Links úteis**:
> - [ISO/IEC 25010:2011 - Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE) — System and Software Quality Models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de software - Engenharia de Software](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209)
