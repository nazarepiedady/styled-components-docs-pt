import DocsLayout from '../../components/DocsLayout'
import NextPage from '../../components/NextPage'

export default function({ children }) {
  return (
    <DocsLayout
      title="Utilização Avançada"
      description="Criação de Temas, referências, segurança, css existente, literais de modelo marcado, interpretação no lado do servidor, e objetos de estilo"
    >
      {children}
    </DocsLayout>
  )
}

import Theming from '../../sections/advanced/theming.md'
import Refs from '../../sections/advanced/refs.md'
import Security from '../../sections/advanced/security.md'
import ExistingCSS from '../../sections/advanced/existing-css.md'
import TaggedTemplateLiterals from '../../sections/advanced/tagged-template-literals.md'
import ServerSideRendering from '../../sections/advanced/server-side-rendering.md'
import ComponentsAsSelectors from '../../sections/advanced/components-as-selectors.md'
import StyleObjects from '../../sections/advanced/style-objects.md'

<Theming />
<Refs />
<Security />
<ExistingCSS />
<TaggedTemplateLiterals />
<ServerSideRendering />
<ComponentsAsSelectors />
<StyleObjects />

<NextPage href="/docs/api" title="Referência da API" />
