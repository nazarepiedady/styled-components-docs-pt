import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `createGlobalStyle` | v4 | web-only

Uma função auxiliar gerar um `StyledComponent` especial que manipula estilos globais. Normalmente, os componentes estilizados são isolados automaticamente para uma classe de CSS local e portanto isoladas dos outros componentes. No caso de `createGlobalStyle`, esta limitação é removida e coisas como redefinições de CSS ("CSS resets") ou folhas de estilos de base podem ser aplicadas.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>TaggedTemplateLiteral</Code>
    </Column>
    <Column>Um literal de modelo marcado com a tua CSS e interpolações.</Column>
  </Row>
</Table>

Retorna um `StyledComponent` que não aceita filhos. Coloca isto no princípio da tua árvore de React e os estilos globais serão injetados quando o componente for "interpretado".

```jsx
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

// mais tarde na tua aplicação

<React.Fragment>
  <GlobalStyle whiteColor />
  <Navigation /> {/* exemplo de outra coisa de alto nível */}
</React.Fragment>
```

Visto que o componente `GlobalStyle` é um `StyledComponent`, isto significa que ele também tem acesso a criação de temas do [componente `<ThemeProvider>`](/docs/api#themeprovider) se for fornecido.

```jsx
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
  }
`

// mais tarde na tua aplicação

<ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
  <React.Fragment>
    <Navigation /> {/* exemplo de outra coisa de alto nível */}
    <GlobalStyle whiteColor />
  </React.Fragment>
</ThemeProvider>
```
