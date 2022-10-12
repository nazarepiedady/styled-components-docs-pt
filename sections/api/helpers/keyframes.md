import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `keyframes` | web-only

Um método auxiliar para criar `keyframes` para animações.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>TaggedTemplateLiteral</Code>
    </Column>
    <Column>Um literal de modelo marcado com o teu `keyframes` dentro.</Column>
  </Row>
</Table>

Retorna um modelo de `Keyframes`, para ser utilizado nas tuas declarações de animação. Tu podes utilizar a API `getName()` sobre o modelo retornado se desejares obter o nome da animação gerada.

> Da versão 3 para baixo da `styled-components`, o auxiliar `keyframes` retornava diretamente o nome da animação no lugar de um objeto com o método `getName`.

```jsx
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`;
```

Se estiveres compondo a tua regra de estilo como um parcial, certifica-te de utilizar o auxiliar `css`.

```jsx
import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animation = (props) =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
  `;

const PulseButton = styled.button`
  animation: ${animation};
`;
```

Tu podes aprender mais utilizando animações com a `styled-components` na secção de [Animações](/docs/basics#animations).
