import Table, { Row, Column } from 'components/Table'
import Code from 'components/Code'

### `StyleSheetManager`

Um componente auxiliar para modificação de como os teus estilos são processados. Para uma dada sub-árvore envolvendo os componentes estilizados, podes personalizar vários comportamentos tais como o processador (stylis) de tempo de execução de CSS manipula os estilos através extensões de `userland` e sobreposição de opção.

<Table head={['Props', 'Description']}>
  <Row>
    <Column>
      <Code>disableCSSOMInjection (v5+)</Code>
    </Column>
    <Column>
      Alterna para o sistema de injeção de CSS baseada em nó de texto mais lento para adição de estilos para o DOM. Útil para a integração com ferramentas de terceiros que foram atualizadas para consumirem estilos a partir das APIs da CSSOM.
    </Column>
  </Row>

<Row>
  <Column>
    <Code>disableVendorPrefixes (v5+)</Code>
  </Column>
  <Column>
    Optar que a dada sub-árvore deixe de adicionar as propriedades de CSS legadas para componentes interpretados.
  </Column>
</Row>

<Row>
  <Column>
    <Code>sheet</Code>
  </Column>
  <Column>
    Cria e fornece a tua própria folha de estilo se necessário para cenários de SSR avançados.
  </Column>
</Row>

<Row>
  <Column>
    <Code>stylisPlugins (v5+)</Code>
  </Column>
  <Column>
    Um arranjo de extensões à serem executadas pelo stylis durante a compilação. Consulte{' '}<a href="https://www.npmjs.com/search?q=keywords%3Astylis" target="_blank">
      que está disponível na npm
    </a>.
  </Column>
</Row>

  <Row>
    <Column>
      <Code>target</Code>
    </Column>
    <Column>
      Fornece um nó de DOM alternativo para injetar informações de estilos.
    </Column>
  </Row>
</Table>

Por exemplo se a tua aplicação executa apenas em navegadores modernos, talvez queiras desativar a prefixação ambulante para os teus estilos:

```react
// import styled, { StyleSheetManager } from 'styled-components'

const Box = styled.div`
  color: ${props => props.theme.color};
  display: flex;
`

render(
  <StyleSheetManager disableVendorPrefixes>
    <Box>If you inspect me, there are no vendor prefixes for the flexbox style.</Box>
  </StyleSheetManager>
)
```

Um outro exemplo seria a ativação da tradução "direita-para-esquerda" para os teus estilos através da extensão `stylis-plugin-rtl` da `userland`:

```react
// import styled, { StyleSheetManager } from 'styled-components'
// import stylisRTLPlugin from 'stylis-plugin-rtl';

const Box = styled.div`
  background: mediumseagreen;
  border-left: 10px solid red;
`

render(
  <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
    <Box>My border is now on the right!</Box>
  </StyleSheetManager>
)
```
