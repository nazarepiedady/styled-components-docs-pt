import Markdown from 'markdown-to-jsx';
import React from 'react';
import DocsLayout from '../components/DocsLayout';
import { getReadme } from '../utils/githubApi';
import escape from '../utils/escape';
import Loading from '../components/Loading';
import Link from '../components/Link';

const Ecosystem = ({ readme, sidebarPages }) => (
  <DocsLayout
    useDocsSidebarMenu={false}
    pages={sidebarPages}
    title="Ecossistema"
    description="Ecossistema de styled-components"
  >
    <p>
      Esta é uma lista incompleta de coisas incríveis construídas com styled-components. Se tiveres alguma coisa a
      partilhar, faça o favor de adicioná-la ao repositório{' '}
      <Link href="https://github.com/styled-components/awesome-styled-components" inline>
        awesome-styled-components
      </Link>{' '}
      na GitHub e ela será automaticamente exibida aqui!
    </p>
    {typeof readme !== 'string' ? (
      <Loading />
    ) : (
      <Markdown>{`
          ${readme}

  ### Contribute

  If you know any projects build with styled components contributions and suggestions are always welcome!
  Please read the [contribution guidelines](https://github.com/styled-components/awesome-styled-components/blob/master/contributing.md) first and submit a PR.

  ### Contribuir
  
  Se souberes de quaisquer projetos construídos com os componentes estilizados, contribuições e sugestões são sempre bem-vindos!
  Por favor leia primeiro as [diretrizes de contribuição](https://github.com/styled-components/awesome-styled-components/blob/master/contributing.md) e submeta um pedido para empurrar mudanças (PR).
        `}</Markdown>
    )}
  </DocsLayout>
);

Ecosystem.getInitialProps = async ({ res }) => {
  const readme = await getReadme('awesome-styled-components');
  const editedReadme = readme
    .replace(/\n---\n/g, '\n\n---\n\n')
    .slice(readme.indexOf('\n---\n### Built with styled-components'))
    .split('### Contribute')[0];

  const sidePages = collectPagesFromMd(readme);

  if (res) {
    // Revalidate this data once an hour
    res.setHeader('cache-control', 's-maxage=3600,stale-while-revalidate');
  }

  return {
    readme: editedReadme,
    sidebarPages: sidePages,
  };
};

export default Ecosystem;

function collectPagesFromMd(md) {
  const TocStartPos = md.indexOf('\n- [Built with styled-components]');
  const TocEndPos = md.indexOf('\n- [Contribute]', TocStartPos);
  const Toc = md.slice(TocStartPos, TocEndPos);
  const linesOfToC = Toc.split('\n');

  const headingIdentifier = '- ';
  const subHeadingIdentifier = '  - ';

  const sidePages = [];

  let lastHeadingIndex = 0;

  for (let line of linesOfToC) {
    if (line.startsWith(headingIdentifier)) {
      const { title } = parseMarkdownLink(line);
      // Add heading to the sidePages array
      sidePages.push({ title /* pathname */ });
      // Due a bug in our strigifier these Github
      // generated links does not work here :(

      // Set lastHeadingIndex so we can add sections later
      lastHeadingIndex = sidePages.length - 1;
    } else if (line.startsWith(subHeadingIdentifier)) {
      const { title, href } = parseMarkdownLink(line);

      const lastHeading = sidePages[lastHeadingIndex];
      // Check if it's there
      if (lastHeading) {
        lastHeading.sections = [...(lastHeading.sections || []), { title, href }];
      }
    }
  }

  return sidePages;
}

function parseMarkdownLink(mdString) {
  const [, title, href] = /\[([^\]]+)\]\(([^)]+)\)/.exec(mdString);
  return { title: escape(title), href: escape(href) };
}
