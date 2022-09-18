## Referências | v4

A passagem de uma propriedade `ref` para um componente estilizado dar-te-á uma das duas coisas dependendo do alvo estilizado:

- o nó de DOM subjacente (se estiveres apontando para um elemento básico, por exemplo `styled.div`)
- uma instância de componente de React (se estiveres apontando para um componente personalizado, por exemplo estendido de `React.Component`)

```react
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder="Hover to focus!"
        onMouseEnter={() => {
          this.inputRef.current.focus()
        }}
      />
    );
  }
}

render(
  <Form />
);
```

> Estás utilizando uma versão mais antiga da `styled-components` (abaixo de 4.0.0) ou uma versão mais antiga de React? Utilize a [propriedade `innerRef`](/docs/api#innerref-prop).
