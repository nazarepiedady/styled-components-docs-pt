import { Content } from 'components/Layout'
import { AlignCenter, Badge, ExampleButton, SecondButton } from './components'
import NextPage from '../../components/NextPage'

export default ({ children }) => (
  <Content data-e2e-id="content">
    <AlignCenter>
      <a href="https://github.com/styled-components/styled-components">
        <Badge src="/api/proxy/stars.svg" alt="Estrelas na GitHub" />
      </a>
      <a href="https://www.npmjs.com/package/styled-components">
        <Badge src="/api/proxy/npm-v.svg" alt="Versão atual" />
      </a>
      <Badge src="/api/proxy/downloads.svg" alt="Monthly downloads" />
      <Badge src="/api/proxy/size.svg" alt="Tamanho Gzipado" />
      <a href="https://discord.gg/hfGUrbrxaU">
        <Badge alt="Discord" src="https://img.shields.io/discord/818449605409767454" />
      </a>
    </AlignCenter>
    {children}
  </Content>
)

# Começar

## Instalação

Para descarregar a `styled-components` execute:

```
npm install --save styled-components
```

É tudo que precisas fazer, agora estás pronto para utilizá-la na tua aplicação! (sim, e sem necessidade da etapa de construção 👌).

> É recomendado (mas não obrigatório) também utilizar a [extensão de Babel de `styled-components`](https://github.com/styled-components/babel-plugin-styled-components) se poderes. Ela oferece muitos benefícios tais como nomes de classe mais legíveis, compatibilidade com a interpretação feita no lado do servidor, pacotes menores, e muito mais.

## O teu primeiro componente estilizado

Vamos dizer que queres criar um componente `<Button />` simples e reutilizável que podes utilizar por toda tua aplicação. Existirá um versão normal e uma grande e uma versão `primária` para os botões importantes. Isto é como ela deve se parecer quando interpretado: (isto é um exemplo ao vivo, clique neles!)

<AlignCenter>
  <ExampleButton
    onClick={() => {
      alert('You clicked the normal button!')
    }}
  >
    Normal button
  </ExampleButton>
  <ExampleButton
    primary
    onClick={() => {
      alert('You clicked the primary button!')
    }}
  >
    Primary button
  </ExampleButton>
</AlignCenter>

Primeiro, vamos importar a `styled-components` e criar um `styled.button`:

```jsx
import styled from 'styled-components'

const Button = styled.button``
```

Agora esta variável `Button` é um componente de React que podes utilizar como qualquer outro componente de React! Esta sintaxe estranha de acento grave é uma nova funcionalidade de JavaScript chamada de [literal de modelo marcado](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).

Tu sabes como podes chamar funções com parênteses? (`myFunc()`) Bem, agora também podes chamar funções com acentos graves! ([aprenda mais sobre os literais de modelo marcado](/docs/advanced#tagged-template-literals))

Se agora interpretares o nosso componente adorável (tal como qualquer outro componente: `<Button />`) isto é o que terás:

<AlignCenter>
  <button>I'm a &lt;Button /&gt;!</button>
</AlignCenter>

Ele interpreta um botão! Não é lá um botão adorável 😕 nós podemos fazer melhor do que isto, vamos dá-lo um pouco de estilo e revelar a beleza interna escondido!

```jsx
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

<AlignCenter>
  <SecondButton>I'm a styled &lt;Button /&gt;</SecondButton>
</AlignCenter>

Como podes ver, `styled-components` te permite de fato escrever CSS no teu JavaScript. Isto significa que podes utilizar todas as funcionalidades de CSS que amas, incluindo (mas não limitando-se aos mesmos) consultas de media (*media queries*, em Inglês), todos pseudo-seletores, encaixamento, etc.

O último passo é que nós precisamos definir com que um botão primário se parece. Para fazer isto nós também importamos `{ css }` de  `styled-components` e interpolamos uma função dentro do nosso literal de modelo, para o qual é passado as propriedades do nosso componente: 

```jsx
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`
```

Aqui estamos dizendo que quando a propriedade `primary` é definida nós queremos adicionar mais `css` ao nosso componente, neste caso mude a cor do texto e do fundo.

É tudo, terminamos! Observe o nosso componente acabado:

```react
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

render(
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
);
```

Boa 😍 isto também é um editor de atualização ao vivo, assim brinque com ele um pouco para teres uma ideia de como é trabalhar com `styled-components`! Uma vez que estiveres pronto, mergulhe dentro da documentação para aprender mais sobre todas coisas fantásticas que a `styled-components` pode fazer por ti:

<NextPage title="Documentação" href="/docs" />
