### `useTheme` | v5

Isto é um gatilho personalizado para receber o tema atual de um `ThemeProvider`.

```jsx
import { useTheme } from 'styled-components';

function MyComponent() {
  const theme = useTheme();
  console.log('Current theme: ', theme);

  // ...
}
```

> Todos componentes estilizados [recebem automaticamente o tema como uma propriedade](/docs/advanced#theming), assim isto só é necessário se desejares acessar o tema por outras razões.
