import Table, { Row, Column } from 'components/Table'
import Code from 'components/Code'

### `ThemeProvider`

Um componente auxiliar para criação de temas. Injeta o tema em todos componentes estilizados em qualquer lugar abaixo dele na árvore de componente, através da API de contexto. Consulte a secção sobre [Criação de Temas](/docs/advanced#criação-de-temas).

<Table head={['Props', 'Description']}>
  <Row>
    <Column>
      <Code>theme</Code>
    </Column>
    <Column>
      Um objeto que será injetado como <Code>theme</Code> em todas as interpolações nos componentes estilizados abaixo do provedor.
    </Column>
  </Row>
</Table>

```react
// import styled, { ThemeProvider } from 'styled-components'

const Box = styled.div`
  color: ${props => props.theme.color};
`

render(
  <ThemeProvider theme={{ color: 'mediumseagreen' }}>
    <Box>I'm mediumseagreen!</Box>
  </ThemeProvider>
)
```
