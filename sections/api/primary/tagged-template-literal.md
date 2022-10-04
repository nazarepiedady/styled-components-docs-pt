import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

### `TaggedTemplateLiteral`

Isto é o que passas para as tuas chamadas estilizadas - um literal de modelo marcado. Isto é uma funcionalidade da especificação ECMAScript 6. Tu podes aprender mais a respeito deles na secção [Literais de Modelo Marcado](/docs/advanced#literais-de-modelo-marcado).

<Table head={['Inputs', 'Description']}>
  <Row>
    <Column>
      <Code>Rule</Code>
    </Column>
    <Column>Quaisquer regras de CSS (como sequências de caracteres)</Column>
  </Row>
  <Row>
    <Column>
      <Code>Interpolation</Code>
    </Column>
    <Column>
      Isto pode ser tanto uma sequência de caracteres ou uma função. As sequências de caracteres são combinadas com as regras como está. As funções receberão as propriedades do componente estilizado como primeiro e único argumento.
    </Column>
  </Row>
</Table>

Leia mais sobre como adaptar os estilos com base nas propriedades na secção [Adaptando com base nas propriedades](/docs/basics#adaptando-com-base-nas-propriedades).

As propriedades que são passados para uma função interpolada são atribuídas a uma propriedade especial, `theme`, que é injetada por um componente de alto nível `ThemeProvider`. Consulte a secção sobre a [Criação de Temas](/docs/advanced#criação-de-temas) para mais informações a respeito disto.

```react
// import styled from 'styled-components'

const padding = '3em'

const Section = styled.section`
  color: white;

  /* Passa as variáveis como entradas */
  padding: ${padding};

  /* Ajusta o fundo a partir das propriedades */
  background: ${props => props.background};
`

render(
  <Section background="cornflowerblue">
    ✨ Magic
  </Section>
)
```

Tu também podes retornar objetos de interpolações ou objetos de entrada diretamente, e serão tratados como estilos em linha. No entanto isto é altamente desencorajado, porque a sintaxe de CSS tem suporte para pseudo seletores, consultas de media, encaixamento, etc., o que a sintaxe de objeto não suporta.
