### `enzymeFind` | v4

Um método de conveniência para localização de instâncias de um componente estilizado em particular dentro de um envolvedor de enzyme.

```jsx
import { mount } from 'enzyme'
import styled from 'styled-components'
import { enzymeFind } from 'styled-components/test-utils'

const Foo = styled.div`
  color: red;
`

const wrapper = mount(
  <div>
    <Foo>bar</Foo>
  </div>
)

enzymeFind(wrapper, Foo)
```
