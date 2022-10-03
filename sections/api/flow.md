## Flow

Os componentes estilizados possuem suporte de primeira classe para [Flow](https://flowtype.org) para ajudar-te a encontrar erros de tipagem enquanto estiveres utilizando a nossa API publica.

Para utilizar Flow com a API publica dos componentes estilizados recomendamos que utilizes a definição de biblioteca em `flow-typed`.

Para instalá-la tu podes utilizar a interface de linha de comando de `flow-typed` ou descarregá-la manualmente a partir do repositório de git e guardá-la em uma pasta `flow-typed` no mesmo diretório com o teu `flowconfig`.

### Instalando as definições

```
npm i -g flow-typed # caso ainda não tiveres `flow-typed` instalado
flow-typed install styled-components@<version>
```

> Se estiveres utilizando uma versão do npm igual ou superior a 5.2, podes simplesmente utilizar [npx](https://github.com/zkat/npx).

### Ignorar a fonte de `styled-components`

Tu podes adicionar as seguintes linhas ao teu ficheiro `.flowconfig`, se tiveres erros de Flow, vindo do pacote `styled-components` dentro do teu diretório `node_modules`.

```
[ignore]
.*/node_modules/styled-components/.*
```
