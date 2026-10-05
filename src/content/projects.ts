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
    slug: "metaverso-simulados",
    name: "Metaverso Simulados",
    year: "2026",
    summary: {
      pt: "Plataforma para criar simulados escolares e corrigir cartões-resposta automaticamente a partir de uma foto.",
      en: "Platform to build school mock exams and automatically grade answer sheets from a photo.",
    },
    problem: {
      pt: "Corrigir cartões-resposta de turmas inteiras à mão é lento e fácil de errar, e as ferramentas prontas são caras ou engessadas.",
      en: "Grading answer sheets for whole classes by hand is slow and error-prone, and off-the-shelf tools are expensive or rigid.",
    },
    solution: {
      pt: "Uma aplicação Rails com Hotwire para montar simulados e cadastrar alunos, mais um serviço Python de leitura óptica (OMR) que lê o cartão fotografado e devolve as respostas.",
      en: "A Rails + Hotwire app to build exams and manage students, plus a Python optical mark recognition (OMR) service that reads a photographed sheet and returns the answers.",
    },
    highlights: {
      pt: [
        "Arquitetura com três containers (Rails, PostgreSQL 17 e OMR em Python) orquestrados com Docker Compose",
        "Interface reativa sem SPA, usando Turbo e Stimulus",
        "Hot reload com Hotwire Spark para um ciclo de desenvolvimento rápido",
      ],
      en: [
        "Three-container architecture (Rails, PostgreSQL 17 and a Python OMR service) orchestrated with Docker Compose",
        "Reactive UI without a SPA, using Turbo and Stimulus",
        "Hot reload with Hotwire Spark for a fast development loop",
      ],
    },
    stack: ["Ruby on Rails 8.1", "Hotwire", "Tailwind CSS", "PostgreSQL 17", "Python", "Docker"],
    repo: "https://github.com/HugoCruz97/metaverso-simulados",
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
  {
    slug: "library-backend",
    name: "Library API",
    year: "2025",
    summary: {
      pt: "API Rails para gestão de biblioteca: livros, alunos e empréstimos.",
      en: "Rails API for library management: books, students and loans.",
    },
    problem: {
      pt: "Controlar o acervo e os empréstimos de uma biblioteca escolar sem planilhas soltas.",
      en: "Track a school library's collection and loans without scattered spreadsheets.",
    },
    solution: {
      pt: "API REST em Rails 8.1 com pipeline de CI, análise de segurança e deploy em container pronto com Kamal.",
      en: "A Rails 8.1 REST API with a CI pipeline, security scanning and container deploys set up with Kamal.",
    },
    highlights: {
      pt: [
        "CI no GitHub Actions com RuboCop, Brakeman e bundler-audit",
        "Dockerfile de produção e configuração de deploy com Kamal",
        "Solid Queue e Solid Cache, sem depender de Redis",
      ],
      en: [
        "GitHub Actions CI with RuboCop, Brakeman and bundler-audit",
        "Production Dockerfile and deploy configuration with Kamal",
        "Solid Queue and Solid Cache, no Redis required",
      ],
    },
    stack: ["Ruby on Rails 8.1", "PostgreSQL", "Docker", "Kamal", "GitHub Actions"],
    repo: "https://github.com/HugoCruz97/library-backend",
  },
];
