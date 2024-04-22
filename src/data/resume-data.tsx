import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Bruno Pinheiro",
  subTitle: "Desenvolvedor Web Full Stack | Cientista de Dados",
  initials: "BP",
  location: "Recife, Pernambuco - Brasil",
  locationLink: "https://www.google.com/maps/place/Recife",
  about:
    "Sou desenvolvedor web full stack, formado em Arqueologia onde aprendi e desenvolvi bastante minha comunicação, auto gestão e trabalho em equipe. Atualmente foco meus estudos na área de ciência e análise de dados.",
  summary:
    "Profissional em transição de carreira, combinando uma formação acadêmica sólida em Arqueologia com experiência prática em Desenvolvimento Web. Possuo vivências educacionais na graduação em Arqueologica, onde desenvolvi capacidade analítica, habilidades de pesquisa e atenção aos detalhes. Essa experiência foi complementada pela educação prática, através de projetos, em Desenvolvimento Web, combinando um conhecimento técnico com a capacidade de resolução de problemas para construir experiências digitais engajantes e voltadas ao usuário. Buscando combinar essas proficiências diversas em uma nova e impactante trajetória profissional, busco ser adaptável, motivado e pronto para contribuir com um conjunto único de habilidades para um time diverso.",
  avatarUrl: "https://avatars.githubusercontent.com/u/93209918?v=4",
  personalWebsiteUrl: "https://github.com/brunoopinheiro",
  contact: {
    email: "bruno.opinheiro@outlook.com",
    tel: "+5581992286856",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/brunoopinheiro",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brunoopinheirojr/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Residência em Robótica e Inteligência Artifical | CIn UFPE - Softex",
      link: "https://residenciarobotica.cin.ufpe.br/",
      degree: "Pós Graduação em Robótica e Inteligência Artifical",
      start: "05/2024",
      end: "03/2025",
    },
    {
      school: "Santander Coders 2023.2 | ADA Tech",
      link: "https://ada.tech/sou-aluno/programas/santander-coders-2023",
      degree: "Data Science",
      start: "01/2024",
      end: "05/2024",
    },
    {
      school: "TRYBE",
      link: "https://www.betrybe.com/formacao-desenvolvimento-web",
      degree: "Desenvolvimento Web Full Stack",
      start: "07/2022",
      end: "06/2023",
    },
    {
      school: "UFPE - Universidade Federal de Pernambuco",
      link: "https://www.ufpe.br/arqueologia-bacharelado-cfch",
      degree: "Bacharelado em Arqueologia",
      start: "07/2016",
      end: "09/2020",
    },
    {
      school: "UFRPE - Universidade Federal Rural de Pernambuco",
      link: "https://www.ufrpe.br/br/content/bacharelado-em-ci%C3%AAncia-da-computa%C3%A7%C3%A3o",
      degree: "Bacharelado em Ciências da Computação (Interrompido)",
      start: "07/2013",
      end: "10/2015",
    }
  ],
  work: [
    {
      company: "CIn UFPE - Softex",
      link: "https://residenciarobotica.cin.ufpe.br/",
      badges: ["Presencial"],
      title: "Residente - Desenvolvedor",
      start: "05/2024",
      end: "03/2025",
      description: "Residente da Pós Graduação em Robótica e Inteligência Artifical pelo CIn (Universidade Federal de Pernambuco) em parceria com a Softex-PE."
    },
    {
      company: "Hie Tec",
      link: "http://hie.tec.br/",
      badges: ["Híbrido"],
      title: "Desenvolvedor Júnior",
      start: "11/2023",
      end: "04/2024",
      description:
        "Desenvolvimento Web Full Stack; modelagem e gerenciamento de bancos de dados; desenvolvimento de relatorios dinâmicos com MS SQL Reporting Service; integrações com ambientes Microsoft como SQL Server; Implementação de testes unitários. Back-end com Flask. Technologies: React, Javascript, C#, SQL Server, SS Reporting Services, Robot Framework, Python.",
    },
    {
      company: "Freelancer",
      link: "",
      badges: ["Remoto"],
      title: "Game Designer",
      start: "2021",
      end: "2023",
      description: "Desenvolvimento de soluções sob demanda para regras, opções e soluções de RPGs (Role Playing Games)",
    },
    {
      company: "UFPE",
      link: "",
      badges: ["Presencial"],
      title: "Monitor - Arqueomática I",
      start: "01/2019",
      end: "06/2019",
      description: "Monitoria durante a graduação em Arqueologia, facilitando a integração do conhecimento arqueológico com ferramentas computacionais.",
    },
    {
      company: "UFPE",
      link: "",
      badges: ["Presencial"],
      title: "Monitor - Arqueomática II",
      start: "07/2019",
      end: "12/2019",
      description: "Monitoria durante a graduação em Arqueologia, focando na aplicação de Sistemas de Informação Geográficas (SIG), geoprocessamento e banco de dados no contexto arqueológico.",
    },
  ],
  skills: [
    "Desenvolvimento Web Full Stack",
    "Engenharia de Software",
    "Desenvolvimento Ágil",
    "Testes Unitários",
    "Testes de Integração",
    "Testes End-to-End",
    "Linux",
    "Git",
    "MS SQL",
    "Reporting Service",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "HTML5",
    "CSS3",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "MongoDB",
    "Sequelize",
    "Docker",
    "Jest",
    "Cypress",
    "Mocha",
    "Robot Framework",
    "Pandas",
    "Machine Learning Models",
  ],
  projects: [
    {
      title: "Warfare Unit Card",
      techStack: [
        "Side Project",
        "Javascript",
        "React",
      ],
      description: "Solução rápida para criação de Cartões de Unidade para um suplemento de TTRPG (Kingdoms & Warfare)",
      link: {
        label: "warfare-unit-cards",
        href: "https://warfare-unit-card.vercel.app/",
      },
    },
    {
      title: "Trybe FC",
      techStack: [
        "Study",
        "Typescript",
        "Docker",
        "Node.js",
        "Express",
        "MySQL",
        "Mocha | Sinon | Chai",
      ],
      description: "Projeto back-end para estudo pessoal. Feito durante a formação da TRYBE.",
      link: {
        label: "Trybe FC",
        href: "https://github.com/brunoopinheiro/projeto-trybefc",
      },
    }
  ],
} as const;
