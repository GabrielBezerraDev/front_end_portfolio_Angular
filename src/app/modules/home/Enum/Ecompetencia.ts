import { ICompetencias } from "../interfaces/Icompetencias";

export class ECompetencia{

  public readonly COMPETENCIAS: Array<ICompetencias> =
  [
    {
      titulo: "Front-End",
      estilo:"svg-img-front",
      id: "front",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-front-end/angular-svgrepo-com.svg",
          tech: "Angular",
          level: 3,
          resumo: `Tenho ampla experiência com Angular, especialmente adquirida durante meu
          primeiro estágio, onde trabalhei em sistemas desenvolvidos com Angular e Spring Boot.
          Dentre os projetos, destaque para a construção de um sistema interno de registro de boletins
          de ocorrência da polícia, no qual fui responsável pelo front-end utilizando esta tecnologia.`
        },
        {
          iconSvg: "assets/svg/svg-front-end/css-3-svgrepo-com.svg",
          tech: "CSS3", 
          level: 3,
          resumo: `
            CSS é outra tecnologia que sempre esteve presente na minha trajetória como desenvolvedor web. Utilizei CSS na maioria dos meus projetos com front-end, incluindo diversos projetos corporativos durante meus estágios. Trabalhei bastante com recursos como Flexbox para criar layouts adaptativos, media queries para sites responsivos e keyframes para desenvolver animações especiais.
          `
        },
        {
          iconSvg: "assets/svg/svg-front-end/html-5-svgrepo-com.svg",
          tech: "HTML5",
          level: 3,
          resumo: `
            HTML é uma tecnologia que sempre acompanhou meu aprendizado em desenvolvimento web. Já a utilizei inúmeras vezes, tanto em projetos pessoais quanto profissionais, além de trabalhar com algumas de suas variantes, como EJS. Também usei extensivamente HTML em frameworks, principalmente no Angular, e em algumas ocasiões, com Express e Next.js.
          `
        },
        {
          iconSvg: "assets/svg/svg-front-end/bootstrap-svgrepo-com.svg",
          tech: "Boostrap",
          level: 2,
          resumo: "Atualmente, não utilizo tanto o Bootstrap nos meus projetos, pois substituí por outras bibliotecas de utilitários CSS e componentes para front-end. No entanto, ainda gosto de usá-lo em projetos de pequeno porte, onde não é necessária uma estilização tão complexa. Também o utilizei em alguns projetos corporativos, tanto no meu primeiro, quanto no meu segundo estágio."
        }
      ]
    },
    {
      titulo: "Back-End",
      estilo:"svg-img-front",
      id: "back",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-back-end/nodejs-svgrepo-com.svg",
          tech: "NodeJs",
          level: 3,
          resumo:"Uso o Node.js para desenvolver backends com TypeScript para sistemas mais simples, recorro à biblioteca Express quando não há necessidade de uma estrutura robusta. Mas também utilizo node quando há alguma necessidade de uso específico, como utilizar a biblioteca do Node.js Puppeteer  para tarefas como web scraping, testes automatizados, captura de screenshots, geração de PDFs e análise de desempenho."
        },
        {
          iconSvg: "assets/svg/svg-back-end/nestjs-svgrepo-com.svg",
          tech: "NestJs",
          level: 2,
          resumo: "O NestJS é uma tecnologia que escolhi para fazer parte da minha stack para backend de TypeScript, pois, sendo muito familiarizado com o Angular, é super tranquilo implementá-lo devido à semelhança na arquitetura entre ambos. Além de utilizá-lo no meu estágio atual, criando back-end mais robusto com micro-services."
        },
        {
          iconSvg: "assets/svg/svg-back-end/express-svgrepo-com.svg",
          tech: "Express.Js",
          level: 2,
          resumo:"Minha experiência com o Express.js, embora não seja profundamente aprofundada, tem sido valiosa e influente na minha jornada de desenvolvimento. O Express é conhecido por sua simplicidade e facilidade de uso, tornando-o uma escolha popular para a construção de aplicações web, especialmente para projetos mais simples. Sua estrutura descomplicada e seu conjunto de recursos fáceis de entender me permitiram criar rapidamente aplicações funcionais e começar a explorar os conceitos de roteamento e middleware. O Express tem sido uma escolha eficaz para projetos nos quais a simplicidade e a rapidez de implementação são essenciais. Uma das facetas interessantes da minha experiência com o Express é a compreensão de que o Nest.js, que também faz parte do meu repertório de habilidades, utiliza o Express.js por baixo dos panos. Isso me proporcionou uma compreensão mais profunda do funcionamento interno do Nest.js, fortalecendo minha capacidade de criar sistemas web escaláveis e robustos."
        },
        {
          iconSvg: "assets/svg/svg-back-end/spring-boot-svgrepo-com.svg",
          tech: "Spring Boot",
          level: 2,
          resumo:"Utilizei bastante o Spring Boot, principalmente em projetos no meu primeiro estágio, em um sistema de registro de boletins internos da polícia. Fiquei responsável principalmente pela manutenção de serviços dentro do Spring Boot. Com essa experiência, aprimorei significativamente minhas habilidades e conceitos de back-end, além de melhorar minhas habilidades de codificação em Java."
        }
      ]
    },
    {
      titulo: "Versionamento",
      estilo:"versionamento",
      id:"git",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-versionamento/github-svgrepo-com.svg",
          tech: "GitHub",
          level: 3,
          resumo: "O GitHub é uma parte fundamental do meu dia a dia como desenvolvedor, desempenhando um papel essencial no gerenciamento de projetos e na otimização do desenvolvimento. Minha relação com essa plataforma tem sido verdadeiramente árdua, resultando em um fluxo de trabalho de desenvolvimento altamente eficaz e produtivo. Todos os meus projetos, desde os mais simples até os mais complexos, estão cuidadosamente guardados em meus repositórios do GitHub. Meu perfil no GitHub é uma parte importante da minha presença online como desenvolvedor. Lá, compartilho meu trabalho passado e atual, demonstrando minhas conquistas e meu progresso como profissional de software. Utilizar o GitHub de maneira eficaz requer um compromisso com o aprendizado contínuo. A plataforma está em constante evolução, apresentando novos recursos e aprimoramentos. Estou sempre explorando essas novidades e ajustando meu fluxo de trabalho para aproveitar ao máximo essa ferramenta essencial."
        },
        {
          iconSvg: "assets/svg/svg-versionamento/git-svgrepo-com.svg",
          tech: "Git",
          level: 3,
          resumo: "O Git é uma parte central e inegociável do meu fluxo de trabalho como desenvolvedor. Minha relação com essa ferramenta de controle de versão é profundamente arraigada, e seu uso é a base sobre a qual construo todos os meus projetos. O Git me proporciona total controle sobre a qualidade do software, a organização e o desenvolvimento. O controle de versão robusto oferecido pelo Git é fundamental. Ele é mais do que apenas uma ferramenta para rastrear mudanças no código-fonte; é uma âncora que me permite entender a evolução de um projeto, identificar mudanças específicas e, mais importante, corrigir erros ou regressões dos projetos."
        }
      ]
    },
    {
      titulo: "Linguagens de Programação",
      estilo: "programming",
      id: "lp",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-programming/typescript-svgrepo-com.svg",
          tech: "TypeScript",
          level: 3,
          resumo: "O TypeScript desempenhou um papel importante nas minhas habilidade como programador. Essa tecnologia trouxe uma dimensão adicional nas habilidades como programador, permitindo que eu construísse aplicações com um nível de robustez e segurança que anteriormente apenas o JavaScript não oferecia. A introdução da tipagem estática no TypeScript forneceu uma camada adicional de segurança em meus projetos, mas também permitiu que eu detectasse erros e problemas potenciais em tempo de desenvolvimento, muito antes de um código ser executado. Isso não apenas acelerou o processo de depuração, mas também me permitiu criar código mais confiável e com maior manutenibilidade. A programação orientada a objetos com TypeScript foi um grande adicional. Isso me permitiu aplicar conceitos sólidos de design de software, organizar meu código de maneira mais estruturada e implementar design patterns avançados. O resultado foi uma melhoria significativa na legibilidade e na manutenção do meu código."
        },
        {
          iconSvg: "assets/svg/svg-programming/php-svgrepo-com.svg",
          tech: "PHP",
          level: 3,
          resumo: "Trabalhei e trabalho bastante com PHP. Em ambos os meus estágios, trabalhei utilizando um framework chamado Yii2, um framework full-stack em PHP. No primeiro estágio com PHP, fui responsável pela manutenção de um sistema de gerenciamento de armamentos da polícia com PHP. No segundo, trabalho com a manutenção de um sistema que administra as linhas de produção da empresa."
        },
        {
          iconSvg: "assets/svg/svg-programming/icons8-c-programming.svg",
          tech: "C",
          level: 2,
          resumo: "Meu uso e aprendizado da linguagem C desempenham um papel fundamental na construção de uma base sólida de conhecimento em programação. Não se trata apenas de adicionar mais uma linguagem ao meu repertório, mas sim de uma exploração profunda dos princípios fundamentais da programação e das estruturas de dados.O estudo do C me permite dominar os conceitos essenciais, como variáveis, loops, condicionais e estruturas de controle, que servem como alicerce para qualquer linguagem de programação. Além disso, o C é a plataforma perfeita para aprender e implementar estruturas de dados complexas, como grafos, listas encadeadas e mapas de hash. Essa experiência enriquece minha compreensão de como os dados são organizados e acessados na programação, aprimorando minhas habilidades na resolução de problemas e no desenvolvimento de algoritmos eficientes. A linguagem C também é um ambiente ideal para o aprimoramento da lógica de programação, exigindo pensamento estruturado e cuidadoso. A busca por eficiência e desempenho no C não apenas fortalece minhas habilidades na linguagem em si, mas também influencia positivamente meu trabalho com outras linguagens, tornando-me um desenvolvedor mais versátil e focado em otimização."
        },
        {
          iconSvg:"assets/svg/svg-programming/icons8-java.svg",
          tech: "Java",
          level: 2,
          resumo: "Trabalhei bastante com Java, especialmente durante meu primeiro estágio, onde meu foco principal era o front-end de um sistema que utilizava Angular e Java. No entanto, por necessidades do projeto, precisava ocasionalmente mudar meu foco para o back-end. Isso me levou a aprender e me adaptar ao uso de Java, realizando manutenções no sistema que utilizava Spring Boot."
        },
        {
          iconSvg: "assets/svg/svg-programming/javascript-svgrepo-com.svg",
          tech: "JavaScript",
          level: 4,
          resumo: "JavaScript é mais do que apenas uma linguagem de programação em minha trajetória como desenvolvedor, pois é a linguagem que deu início a essa jornada e continua sendo a mais importante e influente. Quando comecei a explorar o mundo da programação, foi com JavaScript que mergulhei de cabeça nos conceitos fundamentais, como variáveis, estruturas condicionais, loops e funções. Foi por meio de JavaScript que aprendi a programar e a compreender os princípios essenciais da lógica e da estruturação de código, conhecimentos que são aplicáveis em várias linguagens. Tenho diversos projetos pessoais desenvolvidos com JavaScript e também a utilizei em diversos sistemas reais, tanto no meu primeiro estágio na Polícia quanto no meu estágio atual na fábrica do Distrito."
        }
      ]
    },
    {
      titulo: "Data base",
      estilo: "dataBase",
      id:"db",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-dataBase/mongodb-logo-svgrepo-com.svg",
          tech: "MongoDB",
          level: 2,
          resumo: "Minha experiência com o MongoDB representa uma exploração inicial e valiosa dos bancos de dados NoSQL. Compreendi a flexibilidade, a escalabilidade e os princípios fundamentais dessa tecnologia por meio de projetos práticos. Embora meu envolvimento com a tecnologia tenha sido limitado, trabalhei com MongoDB no meu primeiro estágio, em um sistema de gerenciamento interno de militares na polícia. Fui responsável por implementar e otimizar operações de banco de dados, utilizando a flexibilidade do MongoDB para armazenar e consultar dados não estruturados de maneira eficiente. "
        },
        {
          iconSvg: "assets/svg/svg-dataBase/mysql-logo-svgrepo-com.svg",
          tech: "MySQL",
          level: 2,
          resumo: "MySQL foi o primeiro banco de dados relacional com o qual tive contato, tanto na faculdade quanto no meio profissional. Foi com MySQL que aprendi a linguagem SQL e os fundamentos de bancos de dados relacionais, como os princípios ACID, modelagem entidade-relacionamento, além de conceitos como chave primária, chave estrangeira e entre outros."
        }
      ]
    },
    {
      titulo: "DevOps",
      estilo: "devOps",
      id:"devOps",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-devOps/docker-svgrepo-com.svg",
          tech: "Docker",
          level: 2,
          resumo: "Utilizo o Docker para criar ambientes de maneira rápida, automatizada e eficiente, o que me permite evitar o trabalho de preparação de ambiente e focar mais no desenvolvimento do projeto. Uso bastante o Docker no ambiente corporativo, tanto no meu primeiro estágio quanto no segundo, em que atuo atualmente."
        }
      ]
    },
    {
      titulo: "PaaS",
      estilo: "sis",
      id:"paas",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-paas/google-cloud-svgrepo-com.svg",
          tech: "Google Cloud",
          level: 2,
          resumo: "Trabalhei com o Google Cloud no meu primeiro estágio, onde nossa equipe o empregava para hospedar o sistema em uma VPS, além de aproveitar outros recursos da plataforma, como pipeline e Artifact Registry para o gerenciamento de containers Docker."
        }
      ]
    },
    {
      titulo: "Sistemas Operacionais",
      estilo: "sis",
      id:"so",
      maestrias:
      [
        {
          iconSvg: "assets/svg/svg-sistemaOperacional/linux-svgrepo-com.svg",
          tech: "Linux",
          level: 2,
          resumo: "Utilizo Linux principalmente pelo WSL. Além da leveza do sistema, também o utilizo pelo fato de muitos sistemas e ferramentas serem baseados em Linux, como o próprio Docker, Kubernetes, Git. E também pelo fato de ser o sistema mais utilizado em servidores. A compatibilidade com essas tecnologias e a estabilidade do Linux torna a minha escolha de SO como desenvolvedor."
        },
        {
          iconSvg: "assets/svg/svg-sistemaOperacional/windows-applications-svgrepo-com.svg",
          tech: "Windows",
          level: 1,
          resumo: "Embora minha preferência seja pelo Linux como ambiente de desenvolvimento, minha experiência com o Windows representa uma alternativa que também é relevante para minha jornada como desenvolvedor. Embora tenha menos experiência com o Windows, tenho a capacidade de me desenrolar quando necessário. Pois, o Windows oferece suporte para ambientes de desenvolvimento populares, como Visual Studio. Embora minha preferência esteja no Linux, estou ciente da importância da flexibilidade. O Windows me permite adaptar meu ambiente de desenvolvimento para atender às necessidades específicas de projetos e equipes que operam em um ecossistema Windows. Minha capacidade de alternar entre o Windows e o Linux quando necessário é uma habilidade valiosa que me permite colaborar efetivamente em diferentes contextos de desenvolvimento e equipes, garantindo que minha experiência seja relevante em uma variedade de cenários."
        }
      ]
    }
  ];
}
