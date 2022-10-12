import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `css`

Uma função auxiliar para gerar CSS a partir de um literal de modelo com interpolações. Tu precisas utilizar isto caso retornares um literal de modelo com funções dentro de uma interpolação por cause de como literais de modelo marcado funcionam na JavaScript.

Se estiveres interpolando uma sequência de caracteres não precisas utilizar isto, só se estiveres interpolando uma função.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>TaggedTemplateLiteral</Code>
    </Column>
    <Column>Um literal de modelo marcado com a tua CSS e interpolações.</Column>
  </Row>
</Table>

Retorna um arranjo de interpolações, o qual é uma estrutura de dados aplanada que podes passar ele mesmo como uma interpolação.

```jsx
import styled, { css } from 'styled-components';

const complexMixin = css`
  color: ${(props) => (props.whiteColor ? 'white' : 'black')};
`;

const StyledComp = styled.div`
  /* This is an example of a nested interpolation */
  ${(props) => (props.complex ? complexMixin : 'color: blue;')};
`;
```

Se deixares de fora a `css` a tua função será transformada em uma sequência de caracteres com o método `toString()` e não terás o resultado que esperavas.
