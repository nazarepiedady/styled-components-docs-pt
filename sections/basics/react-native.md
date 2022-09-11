## React Native

As `styled-components` podem ser utilizadas com a React Native da mesma maneira e com a mesma importação. Experimente este exemplo com [Snack by Expo](https://snack.expo.io/@danielmschmidt/styled-components).

```jsx
import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

class MyReactNativeComponent extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    )
  }
}
```

Nós também suportamos estilos mais complexos (tais como `transform`), que normalmente seria um arranjo (*array*, em Inglês), e abreviações (por exemplo para `margin`) graças ao [`css-to-react-native`](https://github.com/styled-components/css-to-react-native)!

> Nota que a propriedade `flex` funciona tal como a abreviação de CSS, e não como a propriedade legada `flex` em React Native. A definição de `flex: 1` define `flexShrink` para `1` além de definir `flexGrow` para `1` e `flexBasis` para `0`.

Imagina como escreverias a propriedade na React Native, adivinha como a transferirias para a CSS, e provavelmente estás certo:

```jsx
const RotatedBox = styled.View`
  transform: rotate(90deg);
  text-shadow-offset: 10px 5px;
  font-variant: small-caps;
  margin: 5px 7px 2px;
`
```


Algumas das diferenças em relação a versão de web são, que não podes utilizar os auxiliares `keyframes` e `createGlobalStyle` visto que a React Native não suporta `keyframes` ou estilos globais. Nós também iremos avisar-te se utilizares consultas de media (*media queries*, em Inglês) ou encaixares o teu CSS.

> Na versão 2 nós suportamos percentagens. Para tornar isto possível nós precisamos forçar unidades para todas abreviações. Se estiveres migrando para a versão 2, [um `codemod` está disponível](https://github.com/styled-components/styled-components-native-code-mod).

### Utilização simplificada com o empacotador metro

Se preferirias apenas importar a `styled-components` no lugar de `styled-components/native`, podes adicionar uma [configuração para `resolverMainFields`](https://facebook.github.io/metro/docs/configuration#resolvermainfields) que inclui `"react-native"`. Isto costumava a ser suportado no `metro` por padrão (e atualmente funciona em pilhagem) mas parece ter sido removido algum momento.
