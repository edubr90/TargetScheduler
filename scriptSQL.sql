IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [COM_Pessoas] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(max) NOT NULL,
    [DataNascimento] datetime2 NOT NULL,
    CONSTRAINT [PK_COM_Pessoas] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [COM_Agendamentos] (
    [Id] int NOT NULL IDENTITY,
    [PessoaId] int NOT NULL,
    [Nome] nvarchar(max) NULL,
    [Inicio] datetime2 NOT NULL,
    [Termino] datetime2 NOT NULL,
    [Tipo] int NOT NULL,
    [Observacao] nvarchar(max) NULL,
    CONSTRAINT [PK_COM_Agendamentos] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_COM_Agendamentos_COM_Pessoas_PessoaId] FOREIGN KEY ([PessoaId]) REFERENCES [COM_Pessoas] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_COM_Agendamentos_PessoaId] ON [COM_Agendamentos] ([PessoaId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20191127154129_Init', N'2.2.4-servicing-10062');

GO

