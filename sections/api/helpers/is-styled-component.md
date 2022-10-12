import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `isStyledComponent`

Um utilitário para ajudar a identificar componentes estilizados.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>Function</Code>
    </Column>
    <Column>
      Qualquer função esperada que possivelmente seja um componente estilizado ou componente de React envolvido em um componente estilizado.
    </Column>
  </Row>
</Table>

Retorna verdadeiro se a função passada for uma classe válida de componente de componentes estilizados envolvidos. Pode ser útil para a determinar se um componente precisa ser envolvido tanto que pode ser utilizada como um seletor de componente:

```jsx
import React from 'react';
import styled, { isStyledComponent } from 'styled-components';
import MaybeStyledComponent from './somewhere-else';

let TargetedComponent = isStyledComponent(MaybeStyledComponent) ? MaybeStyledComponent : styled(MaybeStyledComponent)``;

const ParentComponent = styled.div`
  color: cornflowerblue;

  ${TargetedComponent} {
    color: tomato;
  }
`;
```
