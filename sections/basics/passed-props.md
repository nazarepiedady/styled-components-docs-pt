## Propriedades passadas

Se o alvo estilizado é um elemento simples (por exemplo, `styled.div`), a `styled-components` passa por qualquer atributo de HTML conhecido até o HTML. Se for um componente personalizado de React (por exemplo, `styled(MyComponent)`), a `styled-components` passa por meio de todas propriedades.

Este exemplo mostra como todas as propriedades do componente `Input` são passadas para o nó de DOM que está montado, embora com os elementos de React.

```react
// Cria um componente `Input` tornar-se-á em um marcador `<input>` com alguns estilos
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Interpreta um `input` de texto estilizado com a cor de `input` padrão, e um com uma cor de `input` personalizada 
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

Nota como a propriedade `inputColor` não é passada para o DOM, mas `type` e `defaultValue` são. Isto é a `styled-components` sendo inteligente o suficiente para filtrar atributos não padronizados automaticamente por ti.
