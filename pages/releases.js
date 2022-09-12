import Markdown from 'markdown-to-jsx';
import React from 'react';
import styled from 'styled-components';
import Anchor from '../components/Anchor';
import DocsLayout from '../components/DocsLayout';
import Loading from '../components/Loading';
import { getReleases } from '../utils/githubApi';
import components from '../utils/mdx-components';
import rem from '../utils/rem';

const ReleaseAnchor = styled(Anchor)`
  &::after {
    color: rosybrown;
    content: attr(data-created-at);
    display: block;
    font-size: 16px;
    margin-top: ${rem(-5)};
  }
`;

const Releases = ({ releases, sidebarPages }) => (
  <DocsLayout useDocsSidebarMenu={false} pages={sidebarPages} title="Lançamentos" description="Lançamentos de Componentes Estilizados">
    <Markdown options={{ wrapper: 'p' }}>
      Atualizar componentes estilizados normalmente é tão simples quanto `npm install`. Só as versões importantes possuem o potencial de introduzir mudanças com quebras de compatibilidade (mencionado nas seguintes notas de lançamento).
    </Markdown>
    {releases ? (
      releases.map((release) => (
        <section key={release.id}>
          <ReleaseAnchor id={release.name} data-created-at={release.created_at.replace(/T.*?$/, '')}>
            {release.name}
          </ReleaseAnchor>

          <Markdown overrides={components}>{release.body}</Markdown>
        </section>
      ))
    ) : (
      <Loading />
    )}
  </DocsLayout>
);

Releases.getInitialProps = async ({ res }) => {
  const releases = await getReleases();

  if (res) {
    // Revalidate this data every 30 seconds
    res.setHeader('cache-control', 's-maxage=30,stale-while-revalidate');
  }

  return {
    releases,
    sidebarPages: releases.map((release) => ({
      title: release.name,
      href: release.name,
    })),
  };
};

export default Releases;
