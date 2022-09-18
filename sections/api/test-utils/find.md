### `find` | v3

Um método de conveniência para encontrar uma única instância de um nó de DOM interpretado do componente estilizado dentro de uma dada raiz de DOM.

```js
import styled from 'styled-components'
import { find } from 'styled-components/test-utils'

const Foo = styled.div`
  color: red;
`

/**
 * Em algum na tua aplicação:
 *
 * ReactDOM.render(
 *   <main>
 *     <Foo />
 *   </main>, document.body
 * );
 */

// recupera a primeira instância de "Foo" no corpo (um `querySelector` nos bastidores)
find(document.body, Foo) // HTMLDivElement | null
```
