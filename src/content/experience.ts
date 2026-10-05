import type { Localized } from "@/i18n/config";

export type Experience = {
  company: string;
  role: Localized;
  start: string; // "MM/YYYY"
  end?: string; // omit for current position
  highlights: Localized<string[]>;
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Inetum",
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    start: "02/2022",
    highlights: {
      pt: [
        "Responsável técnico pelo sistema Coliseu: novas features em MVC, correção de bugs, procedures, views e tabelas no banco",
        "Migração de código legado para React, com ganhos de performance, escalabilidade e experiência do usuário",
        "Configuração dos servidores de produção e homologação em Windows Server e Red Hat, com Nginx e Docker",
        "Rotinas automatizadas com Rake tasks, scripts .bat e agendamento no Task Scheduler",
        "Contato direto com o cliente para levantar demandas, estimar esforço e definir cronogramas",
      ],
      en: [
        "Technical lead for the Coliseu system: new features in MVC, bug fixes, and database procedures, views and tables",
        "Migrating legacy code to React to improve performance, scalability and user experience",
        "Set up production and staging servers on Windows Server and Red Hat, with Nginx and Docker",
        "Automated jobs with Rake tasks, .bat scripts and Task Scheduler",
        "Worked directly with the client to scope requests, estimate effort and set timelines",
      ],
    },
    stack: ["React", "Ruby on Rails", "PL/SQL", "PostgreSQL", "Docker", "Nginx", "Windows Server", "Red Hat"],
  },
  {
    company: "Inetum",
    role: { pt: "Estagiário de Desenvolvimento Web", en: "Web Development Intern" },
    start: "08/2021",
    end: "02/2022",
    highlights: {
      pt: [
        "Novas features com foco em desempenho, arquitetura e experiência do usuário",
        "Atualizações de banco de dados em produção e correção de bugs",
        "Participação em reuniões com o cliente sobre novas funcionalidades",
      ],
      en: [
        "Built new features focused on performance, architecture and user experience",
        "Production database updates and bug fixes",
        "Took part in client meetings about new functionality",
      ],
    },
    stack: ["ASP.NET", "VB.NET", "SQL Server"],
  },
  {
    company: "ENEVA",
    role: { pt: "Estagiário de Arquitetura de Sistemas e SI", en: "Systems Architecture & IS Intern" },
    start: "10/2019",
    end: "07/2021",
    highlights: {
      pt: [
        "Aplicativos internos low-code criados do zero (monitoramento de temperatura, atas com órgãos públicos, controle de viagens de HSE), integrados com Power Automate e SharePoint",
        "Documentação de projetos de TI para as usinas no Ceará, Maranhão, Amazonas e Roraima: salas de TI, equipamentos, servidores e conectividade",
      ],
      en: [
        "Built internal low-code apps from scratch (temperature monitoring, minutes of meetings with public agencies, HSE travel tracking), integrated with Power Automate and SharePoint",
        "Documented IT projects for power plants in Ceará, Maranhão, Amazonas and Roraima: server rooms, equipment, servers and connectivity",
      ],
    },
    stack: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "HTML", "CSS"],
  },
];

export type Education = {
  institution: string;
  title: Localized;
  period?: string;
  kind: "degree" | "course";
};

export const education: Education[] = [
  {
    institution: "UniCarioca",
    title: { pt: "Bacharelado em Ciência da Computação", en: "B.Sc. in Computer Science" },
    period: "2019 — 2023",
    kind: "degree",
  },
  { institution: "Origamid", title: { pt: "Next.js", en: "Next.js" }, kind: "course" },
  { institution: "Origamid", title: { pt: "Front End & UX/UI Design", en: "Front End & UX/UI Design" }, kind: "course" },
];
