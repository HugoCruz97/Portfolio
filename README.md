# Portfólio · Hugo Pinto

Site pessoal em PT/EN feito com Next.js 16 (App Router), TypeScript, Tailwind CSS 4 e Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000. O `src/proxy.ts` redireciona para `/pt` ou `/en` conforme o idioma do navegador.

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Textos da interface (PT/EN) | `src/i18n/dictionaries/pt.json`, `en.json` |
| Dados pessoais, links, stack | `src/content/profile.ts` |
| Projetos em destaque (cases) | `src/content/projects.ts` |
| Experiência profissional | `src/content/experience.ts` |

A seção "Mais no GitHub" busca seus repositórios públicos automaticamente (revalidação diária). Os que já aparecem como destaque ficam de fora.

## Deploy na Vercel

1. Suba este repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. Não é preciso configurar nada.
3. Opcional: crie a variável de ambiente `GITHUB_TOKEN` (um token sem permissões extras) para não esbarrar no limite da API do GitHub.
4. Depois do primeiro deploy, atualize `siteUrl` em `src/content/profile.ts`.

Cada push na branch `main` gera um novo deploy, e cada pull request ganha uma URL de preview.
