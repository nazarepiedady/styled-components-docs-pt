import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `styled`

Isto é a exportação padrão.
Isto é uma fábrica de baixo nível que utilizamos para criar os métodos auxiliares de `styled.tagname`.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>component</Code> / <Code>tagname</Code>
    </Column>
    <Column>
      Either a valid react component or a tagname like <Code>'div'</Code>.
    </Column>
  </Row>
</Table>

Retorna uma função que aceita um literal de modelo marcado e transforma-o em um `StyledComponent`.

```react
// import styled from 'styled-components'

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

const TomatoButton = styled(Button)`
  background: tomato;
`

render(
  <>
    <Button>I'm purple.</Button>
    <br />
    <TomatoButton>I'm red.</TomatoButton>
  </>
)
```

Tu podes ver este método sendo introduzido na secção [Começar](/docs/basics#começar).
