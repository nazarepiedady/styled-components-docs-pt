import DocsLayout from '../../components/DocsLayout'
import NextPage from '../../components/NextPage'

import BabelPlugin from '../../sections/tooling/babel-plugin.md'
import BabelMacro from '../../sections/tooling/babel-macro.md'
import TypeScriptPlugin from '../../sections/tooling/typescript-plugin.md'
import Jest from '../../sections/tooling/jest.md'
import Stylelint from '../../sections/tooling/stylelint.md'
import StyledTheming from '../../sections/tooling/styled-theming.md'
import SyntaxHighlighting from '../../sections/tooling/syntax-highlighting.md'

export default ({ children }) => (
  <DocsLayout
    title="Ferramental"
    description="Ferramentas Adicionais para styled-components, extensões de Babel e TypeScript, testagem"
  >
    {children}
  </DocsLayout>
)

<BabelPlugin />
<BabelMacro />
<TypeScriptPlugin />
<Jest />
<Stylelint />
<StyledTheming />
<SyntaxHighlighting />

<NextPage href="/docs/faqs" title="FAQs" />
