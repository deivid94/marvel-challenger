<div align="center">

<!-- BANNER -->
<img src="https://placehold.co/900x200/0f0f0f/e62429?text=MARVEL+HEROES+SEARCH&font=montserrat" alt="Marvel Heroes Search Banner" width="100%" />

<br/>

# 🦸 Marvel Heroes Search

**Pesquise, visualize e edite personagens do universo Marvel em tempo real.**

[![CI/CD](https://github.com/seu-usuario/marvel-character-search/actions/workflows/ci.yml/badge.svg)](https://github.com/seu-usuario/marvel-character-search/actions)
[![License](https://img.shields.io/github/license/seu-usuario/marvel-character-search?color=e62429)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/seu-usuario/marvel-character-search?style=social)](https://github.com/seu-usuario/marvel-character-search)

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat-square&logo=axios&logoColor=white)
![npm](https://img.shields.io/badge/npm-10.x-CB3837?style=flat-square&logo=npm&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Estilização-1572B6?style=flat-square&logo=css3&logoColor=white)

[**Demo ao Vivo**](https://marvel-heroes-search.vercel.app) · [**Reportar Bug**](https://github.com/seu-usuario/marvel-character-search/issues) · [**Solicitar Feature**](https://github.com/seu-usuario/marvel-character-search/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tech Stack](#-tech-stack)
- [Demonstração](#-demonstração)
- [Começando](#-começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
- [Como Funciona](#-como-funciona)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 💡 Sobre o Projeto

> Explore o universo Marvel diretamente no seu browser.

**Marvel Heroes Search** é uma aplicação React que consome a [API oficial da Marvel](https://developer.marvel.com/) para exibir personagens de forma interativa. O usuário pode pesquisar pelo nome, visualizar detalhes em um modal e ainda **editar nome e descrição** dos personagens localmente.

**Principais funcionalidades:**
- 🔍 **Pesquisa em tempo real** — filtre personagens pelo nome enquanto digita
- 🃏 **Modal de detalhes** — veja nome, imagem e descrição completa ao clicar
- ✏️ **Edição inline** — edite nome e descrição diretamente no modal
- 🔄 **Atualização reativa** — alterações refletem instantaneamente na lista
- 🦸 **20 personagens iniciais** — carregados automaticamente ao abrir a aplicação

---

## 🛠 Tech Stack

<div align="center">

| Camada | Tecnologia |
|--------|-----------|
| **UI** | React 18, JSX, CSS3 |
| **HTTP Client** | Axios |
| **API** | Marvel Developer API |
| **Build Tool** | Vite |
| **Package Manager** | npm |

</div>

---

## 🎬 Demonstração

<div align="center">
  <img src="https://placehold.co/800x450/0f0f0f/e62429?text=GIF+da+aplicação+aqui" alt="Demo Marvel Heroes Search" width="80%" />
</div>

> ☝️ Substitua pela URL real de um GIF ou screenshot do projeto.

---

## 🚀 Começando

### Pré-requisitos

```bash
node >= 18.x
npm  >= 10.x
```

Você também precisará de uma **chave de API da Marvel** — crie em [developer.marvel.com](https://developer.marvel.com/).

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/marvel-character-search.git
cd marvel-character-search

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
```

### Configuração

Edite o arquivo `.env` com suas chaves da API Marvel:

```bash
# .env
VITE_MARVEL_PUBLIC_KEY=sua_public_key_aqui
VITE_MARVEL_PRIVATE_KEY=sua_private_key_aqui
```

```bash
# Inicie o projeto em modo dev
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Como Funciona

```
1. Ao carregar a página → 20 personagens são buscados na API Marvel
2. O usuário digita na barra de pesquisa → lista é filtrada em tempo real
3. Clique em um personagem → modal abre com nome, imagem e descrição
4. Edite nome ou descrição no modal → alterações refletem na lista imediatamente
```

**Fluxo de dados:**

```
Marvel API → Axios → Estado React (useState) → Componentes → UI
                                    ↑
                           Edição do usuário
```

---

## 📁 Estrutura do Projeto

```
📦 marvel-character-search
├── 📂 public/
│   └── favicon.ico
├── 📂 src/
│   ├── 📂 components/
│   │   ├── CharacterCard.jsx      # Card de cada personagem
│   │   ├── CharacterModal.jsx     # Modal com detalhes e edição
│   │   └── SearchBar.jsx          # Barra de pesquisa
│   ├── 📂 services/
│   │   └── marvelApi.js           # Configuração do Axios + chamadas à API
│   ├── 📂 styles/
│   │   └── App.css                # Estilos globais
│   ├── App.jsx                    # Componente raiz
│   └── main.jsx                   # Entry point
├── 📜 .env.example
├── 📜 .gitignore
├── 📜 index.html
├── 📜 package.json
└── 📜 README.md
```

---

## 🔐 Variáveis de Ambiente

| Variável | Obrigatório | Descrição |
|----------|-------------|-----------|
| `VITE_MARVEL_PUBLIC_KEY` | ✅ | Chave pública da Marvel API |
| `VITE_MARVEL_PRIVATE_KEY` | ✅ | Chave privada (usada no hash MD5 para autenticação) |

> ⚠️ **Nunca** suba a `.env` com suas chaves reais para o repositório. O `.gitignore` já ignora este arquivo.

---

## 🗺 Roadmap

- [x] Listagem inicial de 20 personagens
- [x] Pesquisa por nome em tempo real
- [x] Modal com detalhes do personagem
- [x] Edição de nome e descrição
- [ ] Paginação da lista
- [ ] Favoritos com persistência (localStorage)
- [ ] Modo escuro
- [ ] Exibir quadrinhos relacionados ao personagem

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! 🎉

1. Fork o projeto
2. Crie sua branch: `git checkout -b feat/minha-feature`
3. Commit com mensagem semântica: `git commit -m "feat: adiciona minha feature"`
4. Push: `git push origin feat/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [`LICENSE`](./LICENSE) para mais informações.

---

## 📬 Contato

**Seu Nome** — [@seu_twitter](https://twitter.com/seu_twitter) — seu@email.com

🔗 **Projeto:** [https://github.com/seu-usuario/marvel-character-search](https://github.com/seu-usuario/marvel-character-search)

---

<div align="center">
  <sub>Feito com ❤️ e muito ☕ por <a href="https://github.com/seu-usuario">Seu Nome</a></sub>
  <br/>
  <sub>Dados fornecidos pela <a href="https://developer.marvel.com">Marvel API</a> © 2024 MARVEL</sub>
</div>
