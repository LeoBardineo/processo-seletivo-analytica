# P3 do Processo Seletivo da UFRJ Analytica

Este repositório contem todas as informações e o código da API feita baseada na P3 do processo seletivo da UFRJ Analytica.

## Rotas

1. GET /hello

Responde com uma resposta fixa.

Exemplo de resposta:

```json
{
  hello: “Olá mundo! Sou eu, Leonardo de Melo!”
}
```

2. GET /recipe?i=<ingredients>&q=<query>

Utiliza a API do Recipe Puppy para pesquisar por três receitas baseados nos argumentos i (ingredientes) e q (query).

Exemplo de resposta:

GET /recipe?i=<ingredients>&q=<query>

```json
{
  "query": “Receita”,
  "ingredients": [“ing1”, “ing3”],
  "results": [
    {
      "recipe": "Receita 1",
      "url": "url.para/receita1",
      "ingredients": "ing1, ing2, ing3"
    },
    {
      "recipe": "Receita 2",
      "url": "url.para/receita2",
      "ingredients": "ing1, ing3"
    },
    {
      "recipe": "Receita 3",
      "url": "url.para/receita3",
      "ingredients": "ing1, ing3, ing4"
    },
  ]
}
```

3. POST /age

A partir de um body com nome e sobrenome, ano de nascimento e uma data futura, responde com nome e sobrenome, quantos anos a pessoa tem, e quantos ela terá na data futura.

Exemplo de body:

```json
{
  "name": “Nome Sobrenome”,
  "birthdate": yyyy-mm-dd,
  "date": YYYY-MM-DD
}
```

Exemplo de resposta:

```json
{
  "quote": “Olá, Nome Sobrenome! Você tem X anos e em DD/MM/YYYY você terá Y anos.”,
  "ageNow": "X",
  "ageThen": "Y"
}
```