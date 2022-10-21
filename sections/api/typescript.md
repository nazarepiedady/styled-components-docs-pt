## TypeScript

A styled-components tem [definições de TypeScript](https://www.npmjs.com/package/@types/styled-components) organizadas pela comunidade sobre o [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) os quais alimentam a experiência de edição nas IDEs e podem fornecer tipos para os projetos de TypeScript. Para instalá-los, execute:

```sh
# Web
npm install --save @types/styled-components

# React Native
npm install --save @types/styled-components @types/styled-components-react-native
```

Apenas para React Native: se o teu `tsconfig` atribuir `types` então precisarás adicionar "styled-components-react-native" lá. Por exemplo:

```json
"types": ["jest", "styled-components-react-native"],
```

> Agora que a Babel 7 está lançada e a [definição de TypeScript](https://babeljs.io/docs/en/babel-preset-typescript) está disponível, agora é possível utilizar a [extensão de babel da styled-components](/docs/tooling#babel-plugin) combinada com a TypeScript.

Antes de poderes efetivamente iniciar utilizar TypeScript terás que fazer um pouco de configuração.

### Criar um ficheiro de declarações

As definições de TypeScript para styled-components podem ser estendidas utilizando a [fusão de declaração](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) desde a versão `v4.1.4` das definições.

Então o primeiro passo é a criação de um ficheiro de declarações. Vamos chamá-lo de `styled.d.ts` por exemplo:

```ts
// importa as declarações do módulo original
import 'styled-components';

// e estende-as!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}
```

A `DefaultTheme` está sendo utilizada como uma interface de `props.theme` fora da caixa. Por padrão a interface `DefaultTheme` está vazia então por isto que precisamos estendê-la.

### Criar um tema

Agora podemos criar um tema só utilizando a `DefaultTheme` declarada no passo acima.

```ts
// my-theme.ts
import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

export { myTheme };
```

React-Native:

```jsx
// styled-components.ts
import * as styledComponents from "styled-components/native";

import ThemeInterface from "./theme";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export { css, ThemeProvider };
export default styled;
```

### Estilizando componentes

É isto! Somos capazes de utilizar a styled-components só utilizando qualquer importação original.

```jsx
import styled, { createGlobalStyle, css } from 'styled-components';

// o tema agora está completamente tipado
export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

// o tema também está completamente tipado
export MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

// e este tema também está completamente tipado
export cssHelper = css`
  border: 1px solid ${props => props.theme.borderRadius};
`;
```

### Utilizando propriedades personalizadas

Se estiveres [adaptando os estilos com base nas propriedades](https://styled-components.com/docs/basics#adaptando-os-estilos-com-base-nas-propriedades), e estas propriedades não são parte do marcador / propriedades de componente de base, podes dizer a TypeScript o que estas propriedades adicionais são, com argumentos de tipo tal como este ([TypeScript `v2.9+` é obrigatório](https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#generic-type-arguments-in-generic-tagged-templates)):

```tsx
import styled from 'styled-components';
import Header from './Header';

interface TitleProps {
  readonly isActive: boolean;
}

const Title = styled.h1<TitleProps>`
  color: ${(props) => (props.isActive ? props.theme.colors.main : props.theme.colors.secondary)};
`;
```

Nota: se estilizares um marcador padrão (como `<h1>` no exemplo acima), a styled-components [não passará as propriedades personalizadas](https://styled-components.com/docs/basics#propriedades-passadas) (para evitar o [Aviso de Propriedade Desconhecida](https://reactjs.org/warnings/unknown-prop.html)).

No entanto, ele passará todas elas para um componente de React personalizado:

```tsx
import styled from 'styled-components';
import Header from './Header';

const NewHeader = styled(Header)<{ customColor: string }>`
  color: ${(props) => props.customColor};
`;
// Header também receberá "props.customColor"
```

Se a propriedade **customColor** não deveria ser transferida para o componente **Header**, podes influenciar as [propriedades transitórias](https://styled-components.com/docs/api#propriedades-transitórias), prefixando-o com um sinal de dólar ($):

```tsx
import styled from 'styled-components';
import Header from './Header';

const NewHeader2 = styled(Header)<{ $customColor: string }>`
  color: ${(props) => props.$customColor};
`;
// Header não recebe "props.$customColor"
```

Dependo do teu caso de uso, podes alcançar um resultado semelhante extraindo as propriedades personalizadas por ti mesmo:

```tsx
import styled from 'styled-components';
import Header, { Props as HeaderProps } from './Header';

const NewHeader3 = styled(({ customColor, ...rest }: { customColor: string } & HeaderProps) => <Header {...rest} />)`
  color: ${(props) => props.customColor};
`;
```

Ou utilizando [shouldForwardProp](https://styled-components.com/docs/api#shouldforwardprop):

```tsx
import styled from 'styled-components';
import Header from './Header';

const NewHeader4 = styled(Header).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['customColor'].includes(prop),
})<{ customColor: string }>`
  color: ${(props) => props.customColor};
`;
```

### Advertência com `className`

Quando estiveres definindo um componente que precisarás para marcar `className` como opcional na tua interface de propriedades:

```jsx
interface LogoProps {
  /* Esta propriedade é opcional, já que a TypeScript não saberá que é passada pelo envolvedor */
  className?: string;
}

class Logo extends React.Component<LogoProps, {}> {
  render() {
    return <div className={this.props.className}>Logo</div>;
  }
}

const LogoStyled = styled(Logo)`
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: 1.8rem;
`;
```

### Advertência com Componentes de Função

To use function components and have typechecking for the props you'll need to define
Para utilizar os componentes de função e tiveres verificação de tipo para as propriedades que precisarás para definir o componente junto de seu tipo. Isto não é especial a styled-components, isto é apenas como a React funciona:

```jsx
interface BoxProps {
  theme?: ThemeInterface;
  borders?: boolean;
  className?: string;
}

const Box: React.FunctionComponent<BoxProps> = (props) => <div className={props.className}>{props.children}</div>;

const StyledBox = styled(Box)`
  padding: ${(props) => props.theme.lateralPadding};
`;
```
