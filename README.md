# Minimal App Posts
___

🌟 Este projeto demonstra a utilização das principais features do `react` e `react-router-dom`.
___

## Funcionalidades

Neste projeto, você encontrará:

- ✅ **Navegação entre rotas:** Demonstra como navegar entre diferentes componentes da aplicação.
- ✅ **Passagem de parâmetros entre rotas:** Explica como enviar e receber parâmetros ao navegar entre páginas.
- ✅ **Adição de novos posts:** Interface para criação de novos posts.
- ✅ **Visualização de detalhes dos posts:** Exibe detalhes específicos de um post.
- ✅ **Lista de posts:** Mostra uma lista de todos os posts criados.
- ✅ **Utilização do hook `useLoaderData`:** Usado para carregar, listar e visualizar posts de forma assíncrona.
___

## Configuração do Roteamento

Abaixo está a configuração do roteamento no arquivo `router.js`, que ilustra as features abordadas:

```jsx
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../routes/RootLayout.jsx'
import Posts, { loader as postsLoader } from '../routes/Posts.jsx'
import NewPost, { action as newPost } from '../routes/NewPost.jsx'
import PostDetails, {
  loader as postDetailsLoader
} from '../routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPost },
          {
            path: '/edit-post/:postId',
            element: <PostDetails />,
            loader: postDetailsLoader
          }
        ]
      }
    ]
  }
])

export default router

```

___
## Instalação e Execução do Projeto

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone git@github.com:silviobassi/minimal-app-posts.git
```

1. Instale as dependências e inicie o backend:

```bash
cd minimal-app-posts/backend
npm install
npm run start
```

1. Instale as dependências e inicie o backend:

```bash
cd minimal-app-posts/frontend
npm install
npm run start
```
---
![GitHub](https://img.shields.io/badge/GitHub-App_Posts-blue?logo=github)
![React](https://img.shields.io/badge/React-gray?logo=react)
![React_Router](https://img.shields.io/badge/React_Router-gray?logo=react-router)
![Status](https://img.shields.io/badge/Status-Concluído-green)