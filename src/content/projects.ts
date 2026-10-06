import type { Localized } from "@/i18n/config";

export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  highlights: Localized<string[]>;
  stack: string[];
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "corrige",
    name: "Corrige",
    year: "2026",
    summary: {
      pt: "Plataforma para criar simulados escolares e corrigir cartões-resposta automaticamente a partir de uma foto.",
      en: "Platform to build school mock exams and automatically grade answer sheets from a photo.",
    },
    problem: {
      pt: "Corrigir cartões-resposta de turmas inteiras à mão é lento e fácil de errar, e as ferramentas prontas são caras ou engessadas. Feito para uma professora, que já o usa com cartões reais.",
      en: "Grading answer sheets for whole classes by hand is slow and error-prone, and off-the-shelf tools are expensive or rigid. Built for a teacher who already uses it with real answer sheets.",
    },
    solution: {
      pt: "Uma aplicação Rails com Hotwire para montar simulados, cadastrar turmas e gerar relatórios, mais um serviço Python de leitura óptica (OMR) que encontra a grade de respostas na foto e devolve as marcações.",
      en: "A Rails + Hotwire app to build exams, manage classes and generate reports, plus a Python optical mark recognition (OMR) service that finds the answer grid in the photo and returns the marks.",
    },
    highlights: {
      pt: [
        "Leitura óptica com OpenCV sem template fixo: detecta a grade na foto e valida contra o número de questões e alternativas do simulado",
        "Envio de várias fotos de uma vez, leitura em segundo plano e atualização da tela em tempo real com Turbo Streams",
        "Gabaritos de inglês e espanhol, provas adaptadas, importação de alunos por Excel e relatório de notas da turma em Excel e PDF",
      ],
      en: [
        "Template-free optical reading with OpenCV: it finds the grid in the photo and checks it against the exam's question and option counts",
        "Bulk photo upload, background processing and live screen updates with Turbo Streams",
        "English and Spanish answer keys, adapted tests, student import from Excel and class grade reports in Excel and PDF",
      ],
    },
    stack: ["Ruby on Rails 8.1", "Hotwire", "Tailwind CSS", "PostgreSQL 17", "Python", "OpenCV", "FastAPI", "Docker"],
    repo: "https://github.com/HugoCruz97/gabarito",
  },
  {
    slug: "biblioteca",
    name: "Biblioteca",
    year: "2026",
    summary: {
      pt: "Sistema full stack de gestão de biblioteca escolar: acervo, alunos, empréstimos e devoluções com controle de atraso.",
      en: "Full stack school library system: collection, students, loans and returns with late tracking.",
    },
    problem: {
      pt: "Controlar o acervo e os empréstimos de uma biblioteca escolar sem planilhas soltas, sabendo na hora o que está disponível e o que está atrasado.",
      en: "Track a school library's collection and loans without scattered spreadsheets, knowing at a glance what's available and what's overdue.",
    },
    solution: {
      pt: "Monorepo com uma API REST em Rails 8.1 e uma SPA em React + Vite. A API concentra as regras de negócio; o front-end mostra os erros de validação direto no campo do formulário.",
      en: "A monorepo with a Rails 8.1 REST API and a React + Vite SPA. The API owns the business rules; the front end shows validation errors right on the matching form field.",
    },
    highlights: {
      pt: [
        "Disponibilidade calculada a partir dos empréstimos em aberto, com lock de linha para evitar emprestar o último exemplar duas vezes",
        "41 testes (Minitest e Vitest) e CI separado por app com RuboCop, Brakeman, bundler-audit, Oxlint e checagem de tipos",
        "Ambiente completo com um comando (docker compose up): PostgreSQL, API e front-end com hot reload",
      ],
      en: [
        "Availability computed from open loans, with a row lock so the last copy can't be lent twice",
        "41 tests (Minitest and Vitest) and per-app CI with RuboCop, Brakeman, bundler-audit, Oxlint and type checking",
        "Whole environment in one command (docker compose up): PostgreSQL, API and front end with hot reload",
      ],
    },
    stack: ["Ruby on Rails 8.1", "PostgreSQL", "React", "TypeScript", "Vite", "TanStack Query", "Docker", "GitHub Actions"],
    repo: "https://github.com/HugoCruz97/biblioteca",
  },
  {
    slug: "unifood",
    name: "Unifood",
    year: "2023",
    summary: {
      pt: "Plataforma full stack de delivery: restaurantes, cardápio, carrinho, pedidos e favoritos.",
      en: "Full stack food delivery platform: restaurants, menus, cart, orders and favorites.",
    },
    problem: {
      pt: "Conectar clientes e restaurantes com um fluxo completo de pedidos, e dar ao restaurante autonomia para gerenciar o próprio cardápio.",
      en: "Connect customers and restaurants with a complete ordering flow, and let restaurants manage their own menu.",
    },
    solution: {
      pt: "Front-end SPA em React com estado global e carrinho persistente, e uma API Fastify com autenticação JWT, upload de imagens e PostgreSQL via Prisma.",
      en: "A React SPA with global state and a persistent cart, backed by a Fastify API with JWT auth, image uploads and PostgreSQL through Prisma.",
    },
    highlights: {
      pt: [
        "Formulários tipados com React Hook Form + Zod, validados nos dois lados",
        "Redux Toolkit + Redux Persist para o carrinho sobreviver a recarregamentos",
        "Modelagem relacional e migrations versionadas com Prisma",
      ],
      en: [
        "Typed forms with React Hook Form + Zod, validated on both ends",
        "Redux Toolkit + Redux Persist so the cart survives page reloads",
        "Relational modeling and versioned migrations with Prisma",
      ],
    },
    stack: ["React", "TypeScript", "Vite", "Redux Toolkit", "Fastify", "Prisma", "PostgreSQL", "JWT"],
    repo: "https://github.com/HugoCruz97/Unifood-Front",
  },
  {
    slug: "txai",
    name: "TXAI Challenge",
    year: "2024",
    summary: {
      pt: "Desafio técnico full stack: gestão de usuários e produtos com login, publicado na Vercel.",
      en: "Full stack technical challenge: user and product management with login, deployed on Vercel.",
    },
    problem: {
      pt: "Entregar em poucos dias um CRUD completo com autenticação, paginação e uma interface caprichada.",
      en: "Ship, in a few days, a complete CRUD with authentication, pagination and a polished interface.",
    },
    solution: {
      pt: "API em NestJS organizada em módulos (controller, service e repository) com Prisma, e front-end React com componentes shadcn/ui.",
      en: "A NestJS API organized into modules (controller, service and repository) with Prisma, and a React front end built on shadcn/ui components.",
    },
    highlights: {
      pt: [
        "Camada de repositório separando regra de negócio do acesso a dados",
        "DTOs para validar a entrada da API",
        "Seed de banco e deploy do front-end na Vercel",
      ],
      en: [
        "Repository layer separating business rules from data access",
        "DTOs to validate API input",
        "Database seeding and front-end deployed on Vercel",
      ],
    },
    stack: ["NestJS", "Prisma", "React", "TypeScript", "shadcn/ui", "Vercel"],
    repo: "https://github.com/HugoCruz97/teste-txai",
    live: "https://teste-txai.vercel.app",
  },
];
