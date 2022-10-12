import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### _[Depreciada]_ `injectGlobal`

> A API `injectGlobal` foi removida e substituída pela `createGlobalStyle` na `styled-components` v4.

Um método auxiliar para escrever a CSS global. Ela não retorna um componente, mas adiciona os estilos à folha de estilos diretamente.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>TaggedTemplateLiteral</Code>
    </Column>
    <Column>Um literal de modelo marcado com os teus estilos globais dentro.</Column>
  </Row>
</Table>

```jsx
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: "Operator Mono";
    src: url("../fonts/Operator-Mono.ttf");
  }

  body {
    margin: 0;
  }
`;
```

Nós não encorajamos o uso desta. Tente utilizá-la uma vez por aplicação no máximo, se deves, contidos em um único ficheiro. Isto é uma escotilha de fuga. Apenas utilize-a para rara definição de `@font-face` ou estilização de corpo.
