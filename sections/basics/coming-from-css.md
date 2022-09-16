## Chegando da CSS

### Como os Componentes Estilizados funcionam dentro de um componente?

Se estiveres familiarizado com a importação de CSS para dentro dos teus componentes (por exemplo, com Módulos de CSS (CSSModules)) estás acostumado a fazer algo do tipo:

```jsx
import React from 'react';
import styles from './styles.css';

export default class Counter extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div className={styles.counter}>
        <p className={styles.paragraph}>{this.state.count}</p>
        <button className={styles.button} onClick={this.increment}>
          +
        </button>
        <button className={styles.button} onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
```

Uma vez que um Componente Estilizado é a _combinação_ do elemento e as regras que o estilizam, escreveríamos `Counter` desta maneira:

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  /* ... */
`;
const Paragraph = styled.p`
  /* ... */
`;
const Button = styled.button`
  /* ... */
`;

export default class Counter extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    );
  }
}
```

Nota que nós adicionamos um prefixo `"Styled"` ao `StyledCounter` assim o componente de React `Counter` e o Componente Estilizado `StyledCounter` não chocam-se nos nomes porém permanecem facilmente identificáveis na Ferramenta do Programador de React e Inspetor da Web.

### Defina os Componentes Estilizados fora do método `render`

É importante definir os teus componentes estilizados fora do método `render`, de outro modo serão recriados em toda vez que houver uma passagem de `render`. Definir um Componente Estilizado dentro do método `render` frustrará o cache e atrasará drasticamente a velocidade da interpretação, e deve ser evitado.

Escreva os teus componentes estilizados da maneira recomendada:

```jsx
const StyledWrapper = styled.div`
  /* ... */
`;

const Wrapper = ({ message }) => {
  return <StyledWrapper>{message}</StyledWrapper>;
};
```

Instead of:

```jsx
const Wrapper = ({ message }) => {
  // AVISO: ISTO É MUITO MAU E LENTO, NÃO FAÇA ISTO!!!
  const StyledWrapper = styled.div`
    /* ... */
  `;

  return <StyledWrapper>{message}</StyledWrapper>;
};
```

**Leitura recomendada**: [Talia Marcassa](https://twitter.com/talialongname) escreveu uma excelente analise de utilização no mundo real, traçando muitos entendimentos práticos e sólidos, e comparações com alternativas, em [Componentes Estilizados: Utilizar ou Não Utilizar](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21).

### Pseudo-elementos, pseudo-seletores, e encaixamento

O pré-processador que nós utilizados, [stylis](https://github.com/thysultan/stylis.js), suporta sintaxe parecida com a do SCSS para o encaixamento automático de estilos.

Através deste pré-processamento, `styled-components` suporta alguns padrões de seletor avançados:

- `&` um único "e" comercial refere-se a **todas instâncias** do componente; isto é utilizado para aplicação de sobreposição alargada:

  ```react
  const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: blue;

    &:hover {
      color: red; // <Thing> quando pairado
    }

    & ~ & {
      background: tomato; // <Thing> como um irmão de <Thing>, mas talvez não diretamente próximo a ele
    }

    & + & {
      background: lime; // <Thing> próximo ao <Thing>
    }

    &.something {
      background: orange; // <Thing> marcado com uma classe ".something" de CSS adicional
    }

    .something-else & {
      border: 1px solid; // <Thing> dentro de um elemento rotulado com ".something-else"
    }
  `

  render(
    <React.Fragment>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
    </React.Fragment>
  )
  ```

- `&&` um duplo "e" comercial refere-se à **uma instância** do componente; isto é útil se estiveres fazendo com que uma estilização condicional se sobreponha e não queres que um estilo se aplique a _todas instâncias_ de um componente em particular:

  ```react
  const Input = styled.input.attrs({ type: "checkbox" })``;

  const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  `

  const LabelText = styled.span`
    ${(props) => {
      switch (props.$mode) {
        case "dark":
          return css`
            background-color: black;
            color: white;
            ${Input}:checked + && {
              color: blue;
            }
          `;
        default:
          return css`
            background-color: white;
            color: black;
            ${Input}:checked + && {
              color: red;
            }
          `;
      }
    }}
  `;

  render(
    <React.Fragment>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input />
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText>Foo</LabelText>
      </Label>
      <Label>
        <Input defaultChecked />
        <LabelText $mode="dark">Foo</LabelText>
      </Label>
    </React.Fragment>
  )
  ```

- `&&` um duplo "e" comercial sozinho tem um comportamento especial chamado de um "impulso de precedência"; isto pode ser útil se estiveres lidando com uma mistura de `styled-components` e ambiente de CSS puro onde haveria estilos contraditórios:

  ```react
   const Thing = styled.div`
     && {
       color: blue;
     }
   `

   const GlobalStyle = createGlobalStyle`
     div${Thing} {
       color: red;
     }
   `

   render(
     <React.Fragment>
       <GlobalStyle />
       <Thing>
         I'm blue, da ba dee da ba daa
       </Thing>
     </React.Fragment>
   )
  ```

Se pores os seletores sem o "e" comercial, eles se referirão aos filhos do componente.

```react
const Thing = styled.div`
  color: blue;

  .something {
    border: 1px solid; // um elemento rotulado de ".something" dentro de <Thing>
    display: block;
  }
`

render(
  <Thing>
    <label htmlFor="foo-button" className="something">Mystery button</label>
    <button id="foo-button">What do I do?</button>
  </Thing>
)
```
