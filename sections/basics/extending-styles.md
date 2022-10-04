## Estendendo os Estilos

Muito podes frequentemente querer utilizar um componente, porém mudá-lo ligeiramente para um caso singular. Agora, poderias passar uma função interpolada e mudá-los com base em algumas propriedades, mas é muito esforço para sobrepor os estilos de uma vez.

Para facilmente criar um novo componente que herda os estilos de um outro, apenas envolva-o no construtor `styled()`. Cá utilizamos o botão da secção anterior e criamos um botão especial, estendendo-o com algum estilo relacionado de color:

```react
// O `Button` da secção anterior sem as interpolações
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// Um novo componente baseado no `Button`, com algumas sobreposições de estilos
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

Nós podemos ver que o novo `TomatoButton` continua assemelhar-se com `Button`, enquanto só temos adicionado duas regras novas.

Em alguns casos podes querer mudar qual marcador ou componente um componente estilizado interpreta. Isto é comum quando estás construindo uma barra de navegação por exemplo, onde existem uma mistura de ligações de âncoras e botões mas eles devem ser estilizados identicamente.

Para esta situação, temos uma escotilha de fuga. Tu podes utilizar a [propriedade polimórfica `"as"`](/docs/api#propriedade-polimórfica-as) para trocar dinamicamente o elemento que recebe os estilos que escreveste:

```react
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="#">Link with Button styles</Button>
    <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
  </div>
);
```

Isto também funciona perfeitamente bem com os componentes personalizados!

```react
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

render(
  <div>
    <Button>Normal Button</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);
```

> Se continuas sobre uma versão mais antiga do que v4, podes utilizar as APIs [`.withComponent`](/docs/api#withcomponent) ou [`.extend`](/docs/api#deprecated-extend) para alcançar o mesmo resultado da mesma maneira que com a [propriedade `"as"`](/docs/api#propriedade-polimórfica-as), mas nota que isto é desencorajado visto que na v4 a [`.extend` foi removida](/releases#breaking-changes) e `.withComponent` foi marcado como um candidato para futura depreciação.
