# Arquitetura da solução

![Diagrama sem nome drawio](https://github.com/user-attachments/assets/004d100a-c9d8-48f0-9be5-5adb53137a22)


## Diagrama de classes

![classes drawio](https://github.com/user-attachments/assets/82b2d077-4042-485f-8f61-3df6376c752d)


##  Modelo de dados

### Modelo ER

![image](https://github.com/user-attachments/assets/aebccb88-f6e0-41ba-8ef0-58ebed807e2a)


### Esquema relacional

![der drawio(4)](https://github.com/user-attachments/assets/4b65025e-0e1f-471d-aef5-8ed35f57a226)

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

A hospedagem e o lançamento da plataforma Ice Delícias serão realizados utilizando a Vercel, uma plataforma moderna e eficiente voltada para o deploy de aplicações web. A escolha da Vercel se deu por sua integração nativa com o Next.js, facilidade de configuração, deploy contínuo via GitHub e por utilizar a infraestrutura da AWS, o que garante alta performance, escalabilidade e segurança.

O processo de hospedagem seguirá os seguintes passos:

- O código-fonte será versionado e mantido em um repositório no GitHub.

- A Vercel será conectada diretamente ao repositório, permitindo deploys automáticos a cada nova atualização.

- A aplicação será configurada com um domínio personalizado, com gerenciamento automático de certificados SSL pela própria plataforma.

- A integração com o Next.js permitirá o uso de rotas dinâmicas, renderização híbrida e otimização automática da aplicação.

Durante o desenvolvimento, ferramentas como o Repl.it foram utilizadas para testes rápidos e colaboração entre os desenvolvedores. Alternativas como GitHub Pages e Heroku chegaram a ser avaliadas, mas a equipe optou pela Vercel devido à sua compatibilidade com o stack adotado e simplicidade no processo de publicação.



## Qualidade de software

Conceituar qualidade é uma tarefa complexa, mas ela pode ser vista como um método gerencial que, por meio de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto do desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem atendidas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, esse nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software. Com base nessas características e nas respectivas subcaracterísticas, identifique as subcaracterísticas que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software, considerando alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão à equipe avaliar os objetos de interesse.

> **Links úteis**:
> - [ISO/IEC 25010:2011 - Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE) — System and Software Quality Models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de software - Engenharia de Software](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209)
