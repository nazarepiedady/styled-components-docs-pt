import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `StyledComponent`

Um componente de React estilizado. Isto é retornado quando chamas `styled.tagname` ou `styled(Component)` com estilos.

Este componente pode receber qualquer propriedade. Ele passa-a sobre o nó de HTML se for um atributo válido, de outro modo só passa-a para funções interpoladas. (Consulte [Literal de Modelo Marcado](/docs/advanced#literais-de-modelo-marcado))

Tu podes passar um nome de classe arbitrário para um componente estilizado sem problema e ele será aplicado depois aos estilos definidos pela chamada estilizada. (Por exemplo, `<MyStyledComp className="bootstrap__btn" />`)

#### .attrs

Isto é um método encadeável que atribuí algumas propriedades à um componente estilizado. O primeiro e único argumento é um objeto que será combinado com o resto das propriedades do componente. O objeto `attrs` aceita os seguintes valores:

<Table head={['Values', 'Description']}>
  <Row>
    <Column>
      <Code>Prop Value</Code>
    </Column>
    <Column>
      Estes podem ser de qualquer tipo, exceto funções. Continuarão estáticos e serão combinados com as propriedades do componente existente.
    </Column>
  </Row>

  <Row>
    <Column>
      <Code>Prop Factory</Code>
    </Column>
    <Column>
      Uma função que recebe as propriedades que são passadas para o componente e calcula um valor, que é depois será combinada com as propriedades do componente existente.
    </Column>
  </Row>
</Table>

Retorna um outro `StyledComponent`.

```react
// import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`

render(
  <>
    <Input small placeholder="Small" />
    <Input placeholder="Normal" />
    <Input padding="2em" placeholder="Padded" />
  </>
)
```

Learn more about this constructor in the [Attaching Additional Props](/docs/basics#attaching-additional-props) section.
Aprenda mais sobre este construtor na secção [Atribuindo Propriedades Adicionais](/docs/basics#atribuindo-propriedades-adicionais).

#### .withComponent

Isto é um método que cria um novo `StyledComponent` com um marcador diferente ou componente aplicado a ele, mas todas as mesmas regras de um é chamada sobre outra.

<Table head={['Arguments', 'Description']}>
  <Row>
    <Column>
      1. <Code>component</Code> / <Code>tagname</Code>
    </Column>
    <Column>Pode ser tanto um componente de react válido ou um nome de marcador como `'div'`</Column>
  </Row>
</Table>

Retorna um novo `StyledComponent` com um novo marcador ou um componente sendo aplicado quando é utilizado.

> Desde `styled-components` v4 a API `withComponent` é agora uma candidata para depreciação. O mais provável é que, provavelmente queiras utilizar a nova [propriedade `"as"`](#propriedade-polimórfica-as) para simplesmente mudar o elemento ou componente sendo interpretado visto que a API `withComponent` é destrutiva para os estilos se o componente envolvido inferior for um `StyledComponent`.

#### propriedade polimórfica `"as"` | v4

Se quiseres manter todos os estilos que tens aplicado a um componente mas só mudar o que está sendo finalmente interpretado (seja ele um marcador de HTML diferente ou um componente personalizado diferente), podes utilizar a propriedade `"as"` para fazer isto em tempo de execução.

```react
// import styled from "styled-components";

const Component = styled.div`
  color: red;
`;

render(
  <Component
    as="button"
    onClick={() => alert('It works!')}
  >
    Hello World!
  </Component>
)
```

Este tipo de coisa é muito útil em casos de uso como uma barra de navegação onde alguns dos itens devem ser ligações e alguns apenas botões, mas todos são estilizados da mesma maneira.

#### propriedade "forwardedAs" | v4.3

Se escolheres envolver um outro componente com o HOC de `styled()` que também aceita uma propriedade `"as"`, utilize `"forwardedAs"` para passar juntamente com a propriedade desejada para o componente envolvido.

#### propriedades transitórias | v5.1

Se quiseres prevenir que as propriedades destinadas a serem consumidas pelos componentes estilizados de serem passadas para o nó de React subjacente ou interpretados para o elemento de DOM, podes prefixar o nome de propriedade com um sinal de dólar (`$`), tornando-a em uma propriedade transitória.

Neste exemplo, `$draggable` não é interpretado para o DOM como `draggable` é.

```react
const Comp = styled.div`
  color: ${props =>
    props.$draggable || 'black'};
`;

render(
  <Comp $draggable="red" draggable="true">
    Drag me!
  </Comp>
);
```

#### shouldForwardProp | v5.1

Isto é um mecanismo de filtragem mais dinâmico e granular do que as propriedades transitórias. É prático em situações onde vários componentes ordem mais elevada estão sendo compostos juntos e parecem partilhar o mesmo nome de propriedade. `shouldForwardProp` funciona muito como a resposta predicada de `Array.filter`. Uma propriedade que falha o teste não é passada para baixo para os componentes subjacentes, tal como uma propriedade transitória.

Lembra-te de que, como neste exemplo, outros métodos encadeiáveis devem sempre ser executados depois de `.withConfig`.

```react
const Comp = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
      !['hidden'].includes(prop)
      && defaultValidatorFn(prop),
}).attrs({ className: 'foo' })`
  color: red;
  &.foo {
    text-decoration: underline;
  }
`;

render(
  <Comp hidden draggable="true">
    Drag Me!
  </Comp>
);
```

Opcionalmente, `shouldForwardProp` pode receber um segundo parâmetro que provê acesso à função de validação padrão. Esta função pode ser utilizada como um retorno, e claro, ela também funciona como um predicado, filtrando com base nos atributos de HTML conhecidos.
