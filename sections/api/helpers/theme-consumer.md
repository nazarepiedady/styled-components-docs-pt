### `ThemeConsumer` | v4

Isto é o [componente "consumidor"](https://reactjs.org/docs/context.html#consumer) criado pelo `React.createContext` como o componente acompanhante para `ThemeProvider`. Ele utiliza o [padrão de propriedades de `render`](https://reactjs.org/docs/render-props.html) para permitir o acesso dinâmico ao tema durante a interpretação.

Ele passa o tema atual (baseado num [`ThemeProvider`](/docs/api#themeprovider) superior na tua árvore de componente) como um argumento para a função filha. A partir desta função, podes retornar mais JSX ou nada.

```jsx
import { ThemeConsumer } from 'styled-components';

export default class MyComponent extends React.Component {
  render() {
    return <ThemeConsumer>{(theme) => <div>The theme color is {theme.color}.</div>}</ThemeConsumer>;
  }
}
```

> Todos componentes estilizados [recebem automaticamente o tema como uma propriedade](/docs/advanced#theming), assim isto só é necessário se desejares acessar o tema por outras razões.
