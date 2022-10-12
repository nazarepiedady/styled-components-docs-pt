import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### _[Depreciada]_ `.extend`

> A API `.extend` foi removida da `styled-components` v4. Utilize a `styled(StyledComponent)` no lugar dela. Para mais informações, consulte: <https://github.com/styled-components/styled-components/issues/1546>

Isto é um método que cria um novo `StyledComponent` e estende suas regras.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>TaggedTemplateLiteral</Code>
    </Column>
    <Column>Um literal de modelo marcado com a tua CSS e interpolações.</Column>
  </Row>
</Table>

```jsx
import styled from 'styled-components';

const Component = styled.div`
  color: red;
`;

const Component2 = Component.extend`
  background: white;
  color: blue;
`;
```

Retorna um novo `StyledComponent` com as novas regras combinadas com aquelas do componente sobre o qual este método foi chamado.
