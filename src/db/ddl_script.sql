
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
