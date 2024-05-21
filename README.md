## Descrição

Este repositório contém o código fonte de um projeto desenvolvido durante o programa de bolsas da compass uol utilizando Nest.js.

## Arquivo .env

Na pasta do projeto crie o arquivo .env com a seguinte variável

```bash
DATABASE_URL="mysql://admin:teste123@database-1.c76gyeocolc0.us-east-2.rds.amazonaws.com:3306/database-1"
```

## Executando o Aplicativo

Para executar o aplicativo, execute o seguinte comando:

```bash
$ npm run start
```

## Rotas

| Rota                                    | HTTP(verbo) | Descrição                                                                                                                                                |
| --------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| localhost:3000/drivers                  | POST        | Utilizado no frontend para criar o cadastro do motorista via formulário                                                                                  |
| localhost:3000/ride-options             | GET         | Utilizado no frontend para renderizar dados obtidos via banco de dados                                                                                   |
| localhost:3000/countries                | GET         | Utilizado no frontend para obter lista de países                                                                                                         |
| localhost:3000/countries/country/cities | GET         | Utilizado no frontend para obter as cidades de determinado país. Recebe o parâmetro "country" que deve ser substituido pelo país que se deseja consultar |
