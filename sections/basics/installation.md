## Instalação

A instalação de `styled-components` é feita em apenas um comando e depois estás pronto para avançar:

```
# com o npm
npm install --save styled-components

# com o yarn
yarn add styled-components
```

Se utilizas um gestor de pacote como [yarn](https://yarnpkg.com/) que suporta o campo "resolutions" no `package.json`, nós também recomendamos fortemente que adiciones uma entrada para ele bem como a correspondência ao limite de versão mais importante. Isto ajuda a evitar uma classe inteira de problemas que surgem a partir de múltiplas versões de `styled-components` sendo instaladas no teu projeto.

No `package.json`:

```json
{
  "resolutions": {
    "styled-components": "^5"
  }
}
```

> É altamente recomendo (mas não obrigatório) à também utilizar a [extensão Babel](/docs/tooling#babel-plugin). Ele oferece muitos benefícios como nomes de classe mais legíveis, compatibilidade com a interpretação feita no lado do servidor, pacotes mais pequenos, e muito mais.

<details>
  <summary>Clique aqui para ver instruções de instalação de CDN alternativa</summary>

Se não estiveres utilizando um empacotador de módulo ou gestor de pacote, neste caso nós também temos um construção ("UMD") global hospedada no CDN [unpkg](https://unpkg.com). Simplesmente adicione o seguinte marcador `<script>` no final do teu ficheiro HTML:

```html
<script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>
```

Uma vez adicionado o `styled-components` terás acesso a variável global `window.styled`.

```js
const Component = window.styled.div`
  color: red;
`
```

> Esta forma de utilização requer que os [pacotes de CDN de react](https://reactjs.org/docs/cdn-links.html) e o [pacote de CDN `react-is`](https://unpkg.com/react-is/umd/react-is.production.min.js) estejam na página bem como (antes do marcador `script` de `styled-components`.)

</details>
