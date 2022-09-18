## Segurança

Já que a `styled-components` permite-te utilizar entrada arbitrária como interpolações, deves ser cuidadoso para desinfetar aquela entrada. Utilizando a entrada do utilizador como estilos pode levar qualquer CSS a ser avaliado no navegador do utilizador que um atacante pode colocar na tua aplicação.

Este exemplo mostra como uma entrada de utilizador nociva pode até levar os destinos de API serem chamado em nome de um utilizador.

```jsx
// Oh não! O utilizador deu-nos uma URL nociva!
const userInput = '/api/withdraw-funds'

const ArbitraryComponent = styled.div`
  background: url(${userInput});
  /* More styles here... */
`
```

Seja muito cuidadoso! Isto é obviamente um exemplo inventado, mas injeção de CSS podem não ser óbvio e ter repercussões nocivas. Algumas versões de Internet Explorer até executam JavaScript arbitrário dentro de declarações de URL.

Há um padrão chegando para desinfetar CSS a partir da JavaScript, [`CSS.escape`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape). Isto ainda não é muito bem suportada entre os navegadores, então recomendamos a utilização da ["polyfill" criada por Mathias Bynens](https://github.com/mathiasbynens/CSS.escape) na tua aplicação.
