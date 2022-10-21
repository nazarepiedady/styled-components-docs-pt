## Como eu utilizo a styled-components com a `create-react-app`?

A funcionalidade básica da biblioteca deve funcionar fora da caixa como qualquer outra biblioteca.

No entanto, se quiseres realizar a interpretação no lado do servidor ou tirar vantagem de algumas das capacidades avançadas da [extensão da babel de styled-components](/docs/tooling#extensão-de-babel) sem ejetar precisarás configurar [`react-app-rewired`](https://github.com/timarney/react-app-rewired) e [`react-app-rewire-styled-components`](https://github.com/withspectrum/react-app-rewire-styled-components).

### Macro de Babel

Desde a `create-react-app` v2, já existe uma alternativa para configuração de `react-app-rewired` através do uso de "macros de babel". Consulte a [documentação para a macro de babel da styled-components](/docs/tooling#macro-de-babel) por configuração e utilização.
