## Animações

As animações de CSS com `@keyframes` não estão limitadas a um único componente mas ainda assim não irás querer que sejam globais para evitar colisões de nome. É por isso que nós exportamos um auxiliar `keyframes` que gerará uma única instância que poderás utilizar em toda a tua aplicação:

```react
// Cria os `keyframes`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Cá nós criamos um componente que girará tudo que nós passarmos para ele em dois segundos
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(
  <Rotate>&lt; 💅🏾 &gt;</Rotate>
);
```

> As `keyframes` não são suportadas pela `react-native`. No lugar dela, utilize a [API `ReactNative.Animated`](https://stackoverflow.com/questions/50891046/rotate-an-svg-in-react-native/50891225#50891225).

As `keyframes` são preguiçosamente injetadas quando são utilizadas, que é como elas podem ter seu código fragmentado, assim precisas utilizar [o auxiliar `css`](/docs/api#css) para fragmentos de estilo partilhado:

```javascript
const rotate = keyframes``

// ❌ Isto lançará um erro!
const styles = `
  animation: ${rotate} 2s linear infinite;
`

// ✅ Isto funcionará como é suposto
const styles = css`
  animation: ${rotate} 2s linear infinite;
`
```

> Isto costumava a funcionar na versão 3 para baixo onde nós não fragmentávamos o código de `keyframes`. Se estiveres atualizando a partir da versão 3, certifica-te de que todos os teus fragmentos de estilo partilhados estejam a utilizar o auxiliar `css`!
