import Code from '../../components/Code.js'

## Adaptando com base nas propriedades

Tu podes passar uma função ("interpolações") para um modelo literal do componente estilizado para adaptá-lo com base em suas propriedades.

Este componente `button` possui um estado primário que muda a sua cor. Quando definimos a propriedade <Code>primary</Code> para `true`, nós estamos trocando a sua cor de texto e de fundo.

```react
const Button = styled.button`
  /* Adapta as cores com base na propriedade primária */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```
