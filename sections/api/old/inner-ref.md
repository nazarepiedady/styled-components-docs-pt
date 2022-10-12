### _[Depreciada]_ propriedade `"innerRef"`

> A propriedade `"innerRef"` foi removida na `styled-components` v4 em favor da [API `forwardRef` da React 16](https://reactjs.org/docs/forwarding-refs.html). Apenas utilize a propriedade `ref` normal no lugar desta.

It's not possible to call DOM methods, like `focus`, on our wrappers directly.
A passagem de uma propriedade `ref` para um componente estilizado retornar-te-á uma instância do embrulhador `StyledComponent`, porém não para nó do DOM subjacente. Isto é por causa de como as referências funcionam.

Para receber uma referência para o verdadeiro nó do DOM envolvido, passe a resposta para a propriedade `innerRef`.

> Não suportamos referências de sequência de caracteres (por exemplo, `innerRef="node"`), visto que já estão depreciadas na React.

Este exemplo utiliza `innerRef` para guardar uma referência para entrada estilizada e dá o foco para ela um vez que o utilizador pairar o ponteiro do rato sobre ela.

```jsx
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class Form extends React.Component {
  render() {
    return (
      <Input
        placeholder="Hover here..."
        innerRef={(x) => {
          this.input = x;
        }}
        onMouseEnter={() => this.input.focus()}
      />
    );
  }
}
```
