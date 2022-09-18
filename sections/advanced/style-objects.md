## Objetos de Estilo

A `styled-components` suporta opcionalmente a escrita de CSS como objetos de JavaScript no lugar de sequências de caracteres. Isto é particularmente útil quando tens objetos de estilo existente e queres movê-los gradualmente para `styled-components`.

```react
// Objeto estático
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});

// Adaptando com base nas propriedades
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

render(
  <div>
    <Box />
    <PropsBox background="blue" />
  </div>
);
```
