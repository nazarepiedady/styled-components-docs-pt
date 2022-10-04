## Motivação

A **`styled-components` é o resultado do pensamento de como poderíamos melhorar a CSS para estilização de sistemas de componente de React**. Focando-se sobre um único caso de uso conseguimos otimizar a experiência para os programadores bem como o resultado para os utilizadores finais.

Para além da experiência melhorada para os programadores, a `sstyled-components` fornecem:

- **CSS Crítica Automática**: a `styled-components` continua a rastrear quais componentes são interpretados em uma página e injeta seus estilos e nada mais, completamente e automaticamente. Combinada com a separação de código, isto significa que os utilizadores carregam a menor quantidade de código possível ou necessária.

- **Sem bugs de nome de classe**: a `styled-components` gera nomes de classe únicos para os teus estilos. Tu nunca tens que preocupar-te a respeito de duplicação, sobreposição ou erros ortográficos.

- **Deteção de CSS mais fácil**: pode ser difícil saber se um nome de classe é utilizado em algum lugar na tua base de código. A `styled-components` torna óbvio, já que todo pedaço de estilo está preso a um componente especifico. Se o componente estiver sem utilizar-se (o que ferramental consegue detetar) é eliminado, e todos os seus estilos são apagados com ele.

- **Estilização dinâmica simples**: a adaptação dos estilos de um componente com base em suas propriedades ou um tema global é simples e intuitiva sem a necessidade de lidar com montes de classes manualmente.

- **Manutenção indolor**: nunca tens que caçar através de ficheiros diferentes para encontrares a estilização que está afetando o teu componente, assim a manutenção é um pedaço de bolo não importa quão grande seja a tua base de código.

- **Prefixação automática**: escreva o teu CSS para padrão atual e deixe a `styled-components` lidar com o resto.

Tu recebes todos estes benefícios enquanto continuas escrevendo a CSS que sabes e amas, só vincule-os a componentes individuais.
