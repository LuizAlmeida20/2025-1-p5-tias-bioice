CREATE TABLE IF NOT EXISTS metricas (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    Descarte     VARCHAR(255) NOT NULL,
    desperdicio  VARCHAR(255) NOT NULL,
    financeira   VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS praticas_sustentaveis (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    nome   VARCHAR(255) NOT NULL,
    tarefa VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS usuario (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    UserName        VARCHAR(255) NOT NULL,
    Email           VARCHAR(255) NOT NULL,
    Senha           VARCHAR(255) NOT NULL,
    nivel_permissao VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS dados_financeiros (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    IsEntrada     TINYINT NOT NULL,
    id_user_FK    INT NULL,
    valor         INT NOT NULL,
    data_operacao DATETIME NOT NULL,
    Descrição     VARCHAR(255) NOT NULL,
    CONSTRAINT FK_dados_financeiros_usuario
        FOREIGN KEY (id_user_FK) REFERENCES usuario (id)
);

CREATE TABLE IF NOT EXISTS insumo (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    dt_validade  DATETIME NOT NULL,
    Dt_registro  DATETIME NOT NULL,
    lote         VARCHAR(255) NOT NULL,
    Descrição    VARCHAR(255) NOT NULL,
    id_user_FK   INT NULL,
    CONSTRAINT FK_insumo_usuario
        FOREIGN KEY (id_user_FK) REFERENCES usuario (id)
);

CREATE TABLE IF NOT EXISTS produto (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    id_user_FK   INT NULL,
    nome_produto VARCHAR(255) NOT NULL,
    dt_validade  DATETIME NOT NULL,
    dataFab      DATETIME NOT NULL,
    CONSTRAINT FK_produto_usuario
        FOREIGN KEY (id_user_FK) REFERENCES usuario (id)
);

CREATE TABLE IF NOT EXISTS usuarios (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    UserName        VARCHAR(100) NOT NULL,
    Email           VARCHAR(100) NOT NULL,
    Senha           VARCHAR(100) NOT NULL,
    nivel_permissao CHAR NULL,
    salt            VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS insumos (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    dt_validade  DATE NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    qtd          INT NOT NULL,
    lote         VARCHAR(50) NOT NULL,
    descricao    TEXT NULL,
    Dt_registro  DATE NOT NULL,
    id_user_FK   INT NULL,
    CONSTRAINT FK_insumos_usuarios
        FOREIGN KEY (id_user_FK) REFERENCES usuarios (id)
);

CREATE INDEX idx_id_user_FK ON insumos (id_user_FK);
