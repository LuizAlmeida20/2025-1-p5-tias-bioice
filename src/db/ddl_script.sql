create table if not exists BIOICE.metricas
(
    id          int auto_increment
        primary key,
    Descarte    varchar(255) not null,
    desperdicio varchar(255) not null,
    financeira  varchar(255) not null
);

create table if not exists BIOICE.praticas_sustentaveis
(
    id     int auto_increment
        primary key,
    nome   varchar(255) not null,
    tarefa varchar(255) not null
);

create table if not exists BIOICE.usuario
(
    id              int auto_increment
        primary key,
    UserName        varchar(255)      not null,
    Email           varchar(255)      not null,
    Senha           varchar(255)      not null,
    nivel_permissao varchar(255)      not null,
    salt            varchar(255)      not null,
    isExcluido      tinyint default 0 not null
);

create table if not exists BIOICE.dados_financeiros
(
    id            int auto_increment
        primary key,
    IsEntrada     tinyint      not null,
    id_user_FK    int          null,
    valor         int          not null,
    data_operacao datetime     not null,
    Descrição     varchar(255) not null,
    constraint FK_166377b1fb83e67e7cb2eb597d1
        foreign key (id_user_FK) references BIOICE.usuario (id)
);

create table if not exists BIOICE.insumo
(
    id           int auto_increment
        primary key,
    nome_produto varchar(255) not null,
    dt_validade  datetime     not null,
    Dt_registro  datetime     not null,
    lote         varchar(255) not null,
    Descrição    varchar(255) not null,
    id_user_FK   int          null,
    constraint FK_9c958cff7e7d6a1e8444cb65614
        foreign key (id_user_FK) references BIOICE.usuario (id)
);

create table if not exists BIOICE.produto
(
    id           int auto_increment
        primary key,
    id_user_FK   int          null,
    nome_produto varchar(255) not null,
    dt_validade  datetime     not null,
    dataFab      datetime     not null,
    constraint FK_356f39bcba2bbd53f9cb2703f22
        foreign key (id_user_FK) references BIOICE.usuario (id)
);

