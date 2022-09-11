## Estilizando qualquer componente

O método `styled` funciona perfeitamente sobre todos os teus ou qualquer componente de terceiro enquanto eles anexarem a propriedade `className` passada para um elemento de DOM.

> Se estiveres utilizando `react-native` lembra-te de utilizar `style` no lugar de `className`.

```react
// Isto poderia ser por exemplo o `Link` do `react-router-dom`
const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

render(
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
);
```

> Tu também podes passar nomes de marcador para uma chamada de produção `styled()`, desta maneira: `styled("div")`. De fato, os auxiliares de `styled.tagname` são apenas pseudónimos que fazem o mesmo.
