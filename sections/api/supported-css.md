## CSS Suportado

Dentro de um componente estilizado, suportamos todas as CSS mais o encaixamento. Uma vez que geramos uma folha de estilo e não estilos em linha, tudo aquilo que funciona na CSS funciona nos componentes estilizados!

```react
const Example = styled.div`
  /* todas as declarações serão prefixadas */
  padding: 2em 1em;
  background: papayawhip;

  /* Os pseudo seletores também funcionam */
  &:hover {
    background: palevioletred;
  }

  /* As consultas de media não são problema */
  @media (max-width: 600px) {
    background: tomato;

    /* As regras encaixadas funcionam como esperado */
    &:hover {
      background: yellow;
    }
  }

  > p {
    /* os seletores de descendente também funcionam, mas são mais uma escotilha de fuga */
    text-decoration: underline;
  }

  /* Os seletores contextuais também funcionam */
  html.test & {
    display: none;
  }
`;

render(
  <Example>
    <p>Hello World!</p>
  </Example>
);
```

Os "e" comercial (`&`) são substituídos pelos nossos nomes de classes únicos gerados para aquele componente estilizado, tornando-o fácil de ter lógica complexa.
