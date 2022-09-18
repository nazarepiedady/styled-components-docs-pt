## Literais de Modelo Marcado

Os literais de modelo marcado são uma nova funcionalidade na ES6. Elas permitem-te definir regras de interpolação de sequência de caracteres personalizadas, que é como somos capazes de criar componentes estilizados.

Se passares nenhuma interpolação, o primeiro argumento que a tua função recebe é um arranjo com uma sequência de caracteres nela.

```jsx
// Estes são equivalentes:
fn`some string here`;
fn(['some string here']);
```

Uma vez que passas as interpolações, o arranjo contém a sequência de caracteres passada, separa nas posições das interpolações. O resto dos argumentos serão as interpolações, em ordem.

```jsx
const aVar = 'good';

// Estes são equivalentes:
fn`this is a ${aVar} day`;
fn(['this is a ', ' day'], aVar);
```

Isto é um pouco desconfortável de se trabalhar, mas significa que podemos receber variáveis, funções, ou combinações (auxiliar `css`) nos componentes estilizados e podem alisar esta para CSS pura.

Falando de que, durante o alisamento, `styled-components` ignora as interpolações que avaliam para `undefined`, `null`, `false`, ou uma sequência de caracteres vazia (`""`), o que significa que estás livre para utilizar a [avaliação de curto circuito](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#Short-circuit_evaluation) para adicionar regras de CSS condicionalmente.

```jsx
const Title = styled.h1`
  /* A centralização do texto não quebrará se "props.upsidedown" for falso */
  ${props => props.upsidedown && 'transform: rotate(180deg);'}
  text-align: center;
`;
```

Se quiseres aprender mais a respeito de literais de modelo marcado, consulte o artigo escrito por Max Stoiber: [A magia por trás 💅🏾 dos `styled-components`](https://mxstbr.blog/2016/11/styled-components-magic-explained/)
