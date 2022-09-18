### `findAll` | v3

Um método de conveniência para encontrar todas as instâncias de um nó de DOM interpretado do componente estilizado dentro de uma dada raiz de DOM.

```js
import styled from 'styled-components'
import { findAll } from 'styled-components/test-utils'

const Foo = styled.div`
  color: ${props => props.color};
`

/**
 * Em algum na tua aplicação:
 *
 * ReactDOM.render(
 *   <main>
 *     <Foo color="red" />
 *     <Foo color="green" />
 *   </main>, document.body
 * );
 */

// recupera uma "NodeList" de instâncias de "Foo" no corpo (uma `querySelectorAll` nos bastidores)
findAll(document.body, Foo) // NodeList<HTMLDivElement> | null
```
