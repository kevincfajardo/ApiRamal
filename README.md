# Api Ramal

Esse é um projeto com o intuito de ser um teste de ténico. </br>
O objetivo, é fazer uma API REST em NodeJS utilizando, fazendo o uso do CRUD no banco de dados ramal.

## API

A api rest retorna ou altera dados no banco de dados Ramal, de acordo com o request feito. </br>
Ele supota todas as operações CRUD.

### INFORMAÇÕES
```
Formato de respostas em JSON
```
```
Requer autenticação - API Key - permitidos("admin","user", "teste1")
```
```
Docs no Sewagger - http://localhost:3304/api-docs/#/
```

### PARAMENTROS
#### Categoria
```
id - OBRIGATORIO - Auto incrementa - Number
```
Informação referente a as informações do usuario
```
nome - OBRIGATORIO - Unico - Varchar
```
Informação referente ao seu nome, indicado em qual categoria ele esta
```
permissao - OBRIGATORIO - Varchar
```
Informação referente as permissões que ele tem, as ações que ele pode fazer
```
perm_habilitada - OBRIGATORIO - Boolean
```
Informação referente ao estado da catagoria, se ela esta ativada ou não.

#### Ramal
```
telefone - OBRIGATORIO - Varchar
```
Informação referente ao telefone do usuario, informado em formato de STRING no máximo de 14 caracteres
```
nome - OBRIGATORIO - Varchar
```
Informação referente ao nome do usario , informado em formato de STRING no máximo de 100 caracteres
```
id_categoria - ORBIGATORIO - Foreign key de Categorias -Number
```
Informação referente a categoria do usuario, informado se ele tem cargo de administrador ou cliente, no
formato de INT. Note que esse parametro é uma chave estrangeira, referenciado a tabela categorias

### OPERAÇÕES
```
CREATE - cria um usuario com telefone, nome e id_categoria
```
![imagem_2023-05-09_161157404](https://user-images.githubusercontent.com/130411393/237197067-360a69ad-e597-4cc3-8b4d-6b94add4d391.png)

```
GET - retorna as informações de um usuario usando o id no path como filtro, suporta somente igualdades
```
![imagem_2023-05-09_161227074](https://user-images.githubusercontent.com/130411393/237197159-98cc288d-a0cb-4b52-aa64-3c81c592c72c.png)

```
UPDATE - atualiza as informações de um usuario usando o id no path como filtro para a alteração
```
![imagem_2023-05-09_161259673](https://user-images.githubusercontent.com/130411393/237197266-e78edf6f-966c-4c31-b801-a8607112d7cc.png)
![imagem_2023-05-09_161322569](https://user-images.githubusercontent.com/130411393/237197338-80528c16-0be6-472f-9a7e-cfa2af373c5e.png)

```
DELETE - delete um usuario, usando o id no path como filtro para o delete
```
![imagem_2023-05-09_161349314](https://user-images.githubusercontent.com/130411393/237197430-db8be369-102c-464e-a8f7-406ff54ffd0b.png)


## FERRAMENTAS
`VScode` </br>
`Postman` </br>
`Docker com DBeaver` </br>
`nodejs, express, sequilize`

## AUTORES
`Kevin` desenvolvedor ---@gmail.com </br>
`kevin` documentação ---@gmail.com

