import styled, { css } from 'styled-components';

import rem from '../../utils/rem';
import DocsLayout from '../../components/DocsLayout';
import { Header } from '../../components/Layout';
import Link from '../../components/Link';
import titleToDash from '../../utils/titleToDash';
import json from '../docs.json';
import { mobile, phone } from '../../utils/media';
import { headerFont } from '../../utils/fonts';

const { pages } = json;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Column = styled.div`
  width: 33%;
  max-width: 33%;
  flex-basis: 33%;
  padding-right: ${rem(15)};

  ${mobile(css`
    width: 50%;
    max-width: 50%;
    flex-basis: 50%;
  `)} ${phone(css`
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  `)};
`;

const SubHeader = styled.h3`
  display: block;
  margin: ${rem(8)} 0;
  font-size: ${rem(18)};
  font-weight: normal;
  font-family: ${headerFont};
`;

const Documentation = () => (
  <DocsLayout
    title="Documentação"
    description="Aprenda como utilizar a styled-components e a estilizar as tuas aplicações sem pressão"
  >
    <p>
      Utilizar literais de modelo marcado (uma adição recente à JavaScript) e o poder da CSS, styled-components permite-te escrever código de CSS para estilizar os teus componentes. Ela também remove o mapeamento entre os componentes e estilos – utilizando componentes como um construtor de estilos de baixo nível não poderia ser mais fácil!
    </p>

    <Row>
      {pages.map(({ title, pathname, sections }) => (
        <Column key={title}>
          <Header>
            <Link href={`/docs/${pathname}`}>{title}</Link>
          </Header>

          {sections.map(({ title }) => (
            <SubHeader key={title}>
              <Link href={`/docs/${pathname}#${titleToDash(title)}`}>{title}</Link>
            </SubHeader>
          ))}
        </Column>
      ))}
    </Row>
  </DocsLayout>
);

export default Documentation;
