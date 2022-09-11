## Anexando propriedades adicionais | v2

Para evitar envolvedores desnecessários que só passam algumas propriedades para o componente interpretado, ou elemento, podes utilizar o [construtor `.attrs`](/docs/api#attrs). Isto permite-te prender propriedades adicionais (ou "atributos") para um componente.

Desta maneira podes por exemplo prender propriedades estáticas à um elemento, ou passar uma propriedade de terceiro como `activeClassName` para o componente `Link` da React Router. Além disto também podes prender mais propriedades dinâmicas à um componente. O objeto `.attrs` também recebe funções, que recebem as propriedades que o componente recebe. O valor de retorno também será combinado com as propriedades resultantes.

Cá interpretamos um componente `Input` e prendemos alguns atributos estáticos e dinâmicos nele:

```react
const Input = styled.input.attrs(props => ({
  // podemos definir propriedades estáticas
  type: "text",

  // ou podemos definir propriedades dinâmicas
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* cá utilizamos a propriedade computada dinamicamente */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

render(
  <div>
    <Input placeholder="A small text input" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
```

Como podes ver, acessamos as nossas propriedades criadas recentemente nas interpolações, e o atributo `type` é passado ao elemento.

### Sobrepondo `.attrs`

Repare que quando estiveres envolvendo os componentes estilizados, os `.attrs` são aplicados desde o componente estilizado mais interno até o componente estilizado mais externo.

Isto permite que cada envolvedor **sobrepor** usos encaixados de `.attrs`, da mesma forma como as propriedades de css definidas depois em uma folha de estilo sobrepõem declarações anteriores.

Os `.attrs` do `Input` são aplicados primeiro, e depois os `.attrs` do `PasswordInput`:

```react
const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

// Os atributos do `Input` serão aplicados primeiro, e depois este objeto de atributos
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // da mesma maneira, a borda irá sobrepor a borda do `Input`
  border: 2px solid aqua;
`;

render(
  <div>
    <Input placeholder="A bigger text input" size="2em" />
    <br />
    {/* Repare que ainda podemos utilizar o atributo `size` de `Input` */}
    <PasswordInput placeholder="A bigger password input" size="2em" />
  </div>
);
```
Isto porque `PasswordInput` é de um tipo de senha, mas ainda utiliza o atributo `size` de `Input`.
