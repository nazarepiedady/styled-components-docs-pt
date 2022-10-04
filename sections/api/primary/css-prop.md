### propriedade `css` | v4

Algumas vez não queres criar um componente adicional só para aplicar um pouco de estilização. A propriedade `css` é uma maneira conveniente de iterar sobre os teus componentes sem ainda estabelecerem-se limites de componente fixo. Ela funciona sobre ambos marcadores de HTML normais bem como sobre componentes, e suporta tudo que qualquer componente estilizado suporta, incluindo adaptação baseada nas propriedades, criação de temas e componentes personalizados.

> Para ativar o suporte para a propriedade `css` tens que utilizar a [extensão Babel](/docs/tooling#extensão-babel).

```jsx
<div
  css={`
    background: papayawhip;
    color: ${props => props.theme.colors.text};
  `}
/>
<Button
  css="padding: 0.5em 1em;"
/>
```

Nos bastidores, a extensão Babel transforma qualquer elemento com a propriedade `css` em um componente estilizado. Por exemplo, o código acima tornar-se:

```javascript
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: papayawhip;
  color: ${props => props.theme.colors.text};
`

const StyledButton = styled(Button)`
  padding: 0.5em 1em;
`

<StyledDiv />
<StyledButton />
```

Nota que não tens adicionar a importação, a extensão Babel faz isto automaticamente! (a menos que estejas utilizando o macro de Babel, veja abaixo)

#### Utilização com a macro de Babel

Tu podes utilizar a [macro de Babel](/docs/tooling#macro-de-babel) para fazer este trabalho no `create-react-app`. Infelizmente, as macros de Babel só executam quando importadas então **a importação não pode ser adicionada automaticamente**. O código acima funciona perfeitamente se adicionares a importação para macro manualmente:

```jsx
import styled from 'styled-components/macro'

<div
  css={`
    background: papayawhip;
    color: ${props => props.theme.colors.text};
  `}
/>
<Button
  css="padding: 0.5em 1em;"
/>
```

#### Utilização com TypeScript

Para prevenir erros de TypeScript sobre a propriedade `css` sobre elementos arbitrários, instale `@types/styled-components` e adicione a seguinte importação uma vez no teu projeto:

```ts
import {} from 'styled-components/cssprop';
```

Consulte <https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-446011384> para mais informações.
