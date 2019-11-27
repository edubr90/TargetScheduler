# TargetScheduler
Single page application com Angular 8, servidor .Net Core 2.2 WebAPI , EF Core e base de dados SQL Server.

# Considerações
No projeto TargetScheduler.DataAccess, o arquivo DataContext.cs é o responsável pela configuração do contexto do Entity Framework. A configuração da connection string está padronizada para se conectar no host local, na base TargetScheduler.

O projeto TargetScheduler.Service é responsável por rodar o servidor da WEB Api, que deverá ser executado simultaneamente com o projeto TargetScheduler.UserInterface para rodar a aplicação completa.

Na raiz do projeto, se encontra o arquivo scriptSQL contendo os scripts de criação das tabelas no banco de dados.

Att.
