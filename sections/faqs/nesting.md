## Posso encaixar regras?

Sim: encaixamento é uma funcionalidade intencionalmente importada de Sass. Utilizada com moderação é uma excelente maneira para iluminar o teu código reduzindo a necessidade de criar classes explícitas para cada elemento.

Também pode ser utilizado pelos componentes pai para definir restrições contextuais que não são propriamente uma preocupação dos filhos afetados:

```react
const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;

const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`;

render(
  <div>
  <EqualDivider>
    <Child>First</Child>
    <Child>Second</Child>
    <Child>Third</Child>
  </EqualDivider>
  <EqualDivider vertical>
    <Child>First</Child>
    <Child>Second</Child>
    <Child>Third</Child>
  </EqualDivider>
  </div>
);
```

Também é incrivelmente conveniente colocar as consultas de media, já que podemos ver de relance exatamente como o componente responderá em qualquer resolução.

```react
const ColorChanger = styled.section`
  background: papayawhip;
  color: palevioletred;

  @media(min-width: 768px) {
    background: mediumseagreen;
    color: papayawhip;
  }
`;

render(
  <ColorChanger href="#">
    <h2>Hello world!</h2>
  </ColorChanger>
);
```
