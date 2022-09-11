## Começar

A `styled-components` utiliza modelos literais marcados para estilizar os teus componentes.

Ela remove o mapeamento entre os componentes e estilos. Isto significa que quando estás definindo os teus estilos, estás na realidade criando um componente de React normal, que tem os teus estilos anexados a ele.

Este exemplo cria dois componentes simples, um `wrapper` e um `title`, com alguns estilos anexados a eles:

```react
// Cria um componente `Title` que tornar-se-á em um marcador `<h1>` com alguns estilos
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Cria um componente `Wrapper` que tornar-se-á em um marcador `<section>` com alguns estilos
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Utilize `Title` e `Wrapper` como qualquer outro componente de React – exceto que são estilizados!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

Isto é um editor ao vivo, então faça experimentos com o código para teres a sensação de como é trabalhar com `styled-components`!

> As regras de estilos são prefixadas automaticamente, a `styled-components` cuida disto por ti!
>
> Os componentes estilizados utilizam o pacote [stylis.js](https://stylis.js.org/) nos bastidores para aplicação de prefixos às regras de estilos.
>
> Para obter informação sobre os prefixos suportados em **stylis.js** visite o seu [repositório](https://github.com/thysultan/stylis.js).
