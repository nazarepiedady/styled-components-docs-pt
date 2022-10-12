import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `withTheme`

Isto é uma fábrica de componente de ordem superior para receber o tema atual de um `ThemeProvider` e passá-lo para o teu componente como uma propriedade `theme`.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>Component</Code>
    </Column>
    <Column>
      Qualquer componente de React válido que pode manipular uma propriedade <Code>theme</Code>.
    </Column>
  </Row>
</Table>

Retorna o componente passado dentro de um embrulhador (componente de ordem superior).
O componente passado receberá uma propriedade `theme` com o objeto de tema atual.

```jsx
import { withTheme } from 'styled-components';

class MyComponent extends React.Component {
  render() {
    console.log('Current theme: ', this.props.theme);
    // ...
  }
}

export default withTheme(MyComponent);
```

> Todos componentes estilizados [recebem automaticamente o tema como uma propriedade](/docs/advanced#theming), assim isto só é necessário se desejares acessar o tema por outras razões.
