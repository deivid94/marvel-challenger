# Marvel Heroes Search
![Marvel Heroes Search](assets/caputure.png)
Este projeto é uma aplicação React que permite pesquisar, visualizar e editar personagens do universo Marvel. Ele utiliza a [A API da Marvel](https://developer.marvel.com/)
 para carregar dados dos personagens e exibi-los de forma interativa.

## Funcionalidades

- **Pesquisa de Personagens**: O usuário pode pesquisar personagens pelo nome.
- **Exibição de Detalhes**: Ao clicar em um personagem, um modal é exibido com detalhes como nome, imagem e descrição.
- **Edição de Nome e Descrição**: O usuário pode editar o nome e a descrição do personagem diretamente no modal e as alterações são refletidas na lista de personagens.

## Tecnologias

- **React**: Framework JavaScript para construir a interface de usuário.
- **Axios**: Para fazer as requisições HTTP à API da Marvel.
- **CSS**: Para estilização da aplicação.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/marvel-character-search.git
   ```

2. Navegue até o diretório do projeto"

```bash
cd marvel-character-search
```
3. Instale as dependencias

```bash
npm install
```
4. Start o projeto

```bash
npm run dev
```
## COMO FUNCIONA 

1. Ao carregar a página, a lista inicial de 20 personagens é exibida.
2. O usuário pode digitar o nome de um personagem na barra de pesquisa para filtrar a lista.
3. Ao clicar em um personagem, um modal é aberto mostrando mais detalhes, como nome, imagem e descrição.
4. O usuário pode editar o nome e a descrição do personagem. As alterações são aplicadas na lista de personagens e no modal.

