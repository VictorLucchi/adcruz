/**
 * Arquivo central de dados e imagens do site de homenagem
 * "Adriano & Cruz: Os Papais do T.I."
 * 
 * Para adicionar ou alterar qualquer foto, basta colocar o arquivo na pasta
 * `/client/public/images/` ou atualizar os caminhos abaixo.
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag?: string;
}

export interface DisciplineInfo {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  accentColor: string; // Tailwind color token or hex
  highlights: string[];
}

export const siteConfig = {
  title: "ADRIANO & CRUZ",
  subtitle: "OS PAPAIS DO T.I.",
  tagline: "Uma homenagem aos professores que sobreviveram às nossas dúvidas, códigos, TCCs e perguntas inesperadas.",
  heroQuote: "Uma pequena homenagem a quem fez parte da nossa caminhada.",
  footerQuote: "Powered by Teams, GitHub, Amazon Q e decisões questionáveis.",
  footerSignature: "Feito com carinho pelos alunos.",
  
  // Imagens principais e seções específicas
  images: {
    adrianoHero: "/images/adriano.jpg",
    cruzHero: "/images/cruz.jpg",
    adrianoCard: "/images/adriano-card.jpg",
    cruzCard: "/images/cruz-card.jpg",
    tccRescue: "/images/resgate-tcc.jpg",
    surpriseBeer: "/images/professor-bebe.jpg",
    finalTribute: "/images/dupla-final.jpg",
    papaisHero: "/images/papais_TI.jpg",
  },

  // Ficha de Personagem: Adriano
  teacherAdriano: {
    name: "ADRIANO",
    title: "Especialista em IA & Mestre da Gaita",
    specialty: "INTELIGÊNCIA ARTIFICIAL",
    specialSkill: "GAITA",
    humorQuote: "Capaz de explicar Inteligência Artificial e, em algum momento, aparecer tocando gaita.",
    classType: "TECH WIZARD & BARD",
    stats: [
      { label: "Inteligência Artificial", value: 100, color: "from-purple-500 to-indigo-500" },
      { label: "Tecnologia", value: 98, color: "from-blue-500 to-cyan-500" },
      { label: "Criatividade", value: 95, color: "from-pink-500 to-rose-500" },
      { label: "Habilidade com Gaita", value: 99, color: "from-amber-400 to-orange-500" },
    ],
    perks: [
      "Prompt Engineering Místico",
      "Solo de Gaita no Intervalo",
      "Imunidade a Alucinações de LLM",
      "Paciência Quântica"
    ]
  },

  // Ficha de Personagem: Cruz
  teacherCruz: {
    name: "CRUZ",
    title: "Especialista em Lógica & Operador Multitarefa",
    specialty: "LÓGICA",
    specialSkill: "FAZ TUDO",
    humorQuote: "Se existe um problema, provavelmente o Cruz dá um jeito.",
    classType: "MASTER ARCHITECT & FIXER",
    stats: [
      { label: "Lógica Pura", value: 100, color: "from-cyan-500 to-blue-500" },
      { label: "Programação", value: 99, color: "from-emerald-500 to-teal-500" },
      { label: "Resolução de Problemas", value: 100, color: "from-indigo-500 to-blue-600" },
      { label: "Capacidade de Fazer Tudo", value: 100, color: "from-amber-500 to-yellow-500" },
    ],
    perks: [
      "Debug Instantâneo com o Olhar",
      "Resolução de Conflitos Git",
      "Refatoração em 30 Segundos",
      "Onipresença no Laboratório"
    ]
  },

  // Disciplinas com identidade própria
  disciplines: [
    {
      id: "pbd",
      code: "PBD",
      name: "Projeto de Banco de Dados",
      tagline: "Onde os dados começam a fazer sentido.",
      description: "Modelagem conceitual, entidades, relacionamentos e a clássica pergunta: 'Professor, essa chave primária é estrangeira também?'",
      image: "/images/pbd.jpg",
      imageAlt: "Foto ou memória das aulas de PBD",
      accentColor: "#38bdf8",
      highlights: ["Normalização sem surtos", "SELECT * FROM memórias", "Diagramas ER salvos no limite"]
    },
    {
      id: "dsa1",
      code: "DSA1",
      name: "Desenvolvimento de Sistemas e Aplicações I",
      tagline: "O início da jornada.",
      description: "Os primeiros passos no mundo real do código, sintaxes novas e a descoberta de que um ponto e vírgula esquecido pode abalar uma estrutura inteira.",
      image: "/images/dsa1.jpg",
      imageAlt: "Foto ou memória das aulas de DSA1",
      accentColor: "#a855f7",
      highlights: ["Primeiros 'Hello World'", "Lógica passo a passo", "O início dos Papais do T.I."]
    },
    {
      id: "dsa2",
      code: "DSA2",
      name: "Desenvolvimento de Sistemas e Aplicações II",
      tagline: "Agora ficou sério.",
      description: "A complexidade aumentou, as arquiteturas começaram a se conectar e os prazos começaram a parecer desafios épicos de sobrevivência.",
      image: "/images/dsa2.jpg",
      imageAlt: "Foto ou memória das aulas de DSA2",
      accentColor: "#ec4899",
      highlights: ["Estruturas robustas", "APIs e integrações", "Noites de compilação"]
    },
    {
      id: "dsa3",
      code: "DSA3",
      name: "Desenvolvimento de Sistemas e Aplicações III",
      tagline: "Vocês chegaram longe demais.",
      description: "Módulo avançado: aplicações completas, polimento de sistemas e o sentimento de orgulho ao ver o projeto finalmente rodando sem telas vermelhas.",
      image: "/images/dsa3.jpg",
      imageAlt: "Foto ou memória das aulas de DSA3",
      accentColor: "#f59e0b",
      highlights: ["Sistemas completos", "Deploy e testes reais", "Nível quase profissional"]
    },
    {
      id: "lip3",
      code: "LIP3",
      name: "Linguagens e Paradigmas III",
      tagline: "Lógica, linguagem e sobrevivência.",
      description: "Paradigmas profundos, regras de sintaxe exigentes e o exercício diário de pensar como computadores sem perder a humanidade e o bom humor.",
      image: "/images/lip3.jpg",
      imageAlt: "Foto ou memória das aulas de LIP3",
      accentColor: "#10b981",
      highlights: ["Sobrevivência sintática", "Raciocínio lógico puro", "Desafios superados juntos"]
    }
  ] as DisciplineInfo[],

  // Frases que entraram para a história
  quotes: [
    {
      id: "papais",
      text: "Papais do T.I.",
      author: "Turma toda, unânime",
      badge: "Apelido Oficial",
      description: "Mais do que professores de tecnologia: mentores, guias e guardiões da nossa sanidade no curso.",
      hasImage: false,
    },
    {
      id: "palavrao",
      text: "Professor fala palavrão?????",
      author: "Dúvida clássica da turma",
      badge: "Arquivo Confidencial",
      description: "Uma lenda urbana que ecoou pelos corredores dos laboratórios após longas horas de depuração.",
      hasImage: false,
      isEasterEgg: true,
    },
    {
      id: "bebe",
      text: "Professor, você bebe?????",
      author: "Momento descontraído da sala",
      badge: "Top Secret Interativo",
      description: "A revelação que todo aluno de T.I. sempre quis presenciar em uma sexta-feira pós-aula.",
      hasImage: true,
      imageKey: "surpriseBeer",
      isInteractive: true,
    },
    {
      id: "teams-github",
      text: "Teams e GitHub!!!",
      author: "Adriano & Cruz em uníssono",
      badge: "Mantra Diário",
      description: "Se não está no Teams não existe; se não está commitado no GitHub, nunca foi codificado.",
      hasImage: false,
    },
    {
      id: "amazon-q",
      text: "Amazon Q",
      author: "O oráculo dos laboratórios",
      badge: "IA Convocada",
      description: "A inteligência artificial que virou piada interna, salvação e meme de suporte técnico de plantão.",
      hasImage: false,
      isAmazonQ: true,
    }
  ],

  // Tecnologias essenciais e métricas humorísticas
  techStats: [
    { name: "GITHUB", percent: 100, desc: "Commits no prazo (às 23h59)", icon: "github", color: "from-slate-400 to-slate-200" },
    { name: "TEAMS", percent: 100, desc: "Notificações 'Professor, deu erro'", icon: "teams", color: "from-blue-500 to-indigo-600" },
    { name: "AMAZON Q", percent: 90, desc: "Tentativas de explicar o código da turma", icon: "bot", color: "from-amber-400 to-orange-500" },
    { name: "GAITA", percent: 100, desc: "Sintonia harmônica do professor Adriano", icon: "music", color: "from-purple-500 to-pink-500" },
    { name: "CAFÉ", percent: 100, desc: "Combustível primordial dos laboratórios", icon: "coffee", color: "from-amber-600 to-yellow-600" },
    { name: "PACIÊNCIA COM A TURMA", percent: 35, desc: "Nível oscilante após o 10º git merge quebrado", icon: "alert", color: "from-red-500 to-rose-600" },
  ],

  // Linha do tempo da jornada
  timelineSteps: [
    { step: "01", code: "PBD", title: "Fundamentos de Banco de Dados", desc: "A primeira vez que entendemos que dados não surgem por mágica." },
    { step: "02", code: "DSA1", title: "O Início da Programação", desc: "Primeiras funções, estruturas condicionais e o encanto do primeiro código funcionando." },
    { step: "03", code: "DSA2", title: "Conexões e Desafios Reais", desc: "Integrando front com back, enfrentando bugs e aprendendo a não ter medo do terminal." },
    { step: "04", code: "DSA3", title: "Sistemas Completos", desc: "Projetos de ponta a ponta, maturidade técnica e autonomia de desenvolvimento." },
    { step: "05", code: "LIP3", title: "Linguagens e Sobrevivência", desc: "A consolidação do pensamento lógico e da capacidade de resolver qualquer desafio." },
    { step: "06", code: "🚨 RESGATE", title: "Operação TCC de Emergência", desc: "Cruz consertando a lógica, Adriano alinhando a IA e a turma finalmente respirando aliviada." },
    { step: "07", code: "❤️ MEMÓRIAS", title: "Legado & Gratidão", desc: "Momentos que saíram da sala de aula e se tornaram histórias para a vida inteira." },
  ],

  // Faixas do Carrossel Infinito
  carouselTrack1: [
    { id: "c1-1", src: "/images/gallery/foto-01.jpg", alt: "Momento da turma 01", caption: "Aulas práticas no laboratório de informática", tag: "Laboratório" },
    { id: "c1-2", src: "/images/gallery/foto-02.jpg", alt: "Momento da turma 02", caption: "Explicações no quadro que salvaram o dia", tag: "Aulas" },
    { id: "c1-3", src: "/images/gallery/foto-03.jpg", alt: "Momento da turma 03", caption: "Momento clássico: professor Adriano e a gaita", tag: "Música & IA" },
    { id: "c1-4", src: "/images/gallery/foto-04.jpg", alt: "Momento da turma 04", caption: "Professor Cruz resolvendo tudo em 3 minutos", tag: "Lógica" },
    { id: "c1-5", src: "/images/gallery/foto-05.jpg", alt: "Momento da turma 05", caption: "Concentração coletiva antes da entrega do projeto", tag: "Foco Total" },
  ] as GalleryImage[],

  carouselTrack2: [
    { id: "c2-1", src: "/images/gallery/foto-06.jpg", alt: "Momento da turma 06", caption: "Risadas e desespero saudável na semana de provas", tag: "Sobrevivência" },
    { id: "c2-2", src: "/images/gallery/foto-07.jpg", alt: "Momento da turma 07", caption: "Apresentação dos projetos com bancada técnica", tag: "Apresentação" },
    { id: "c2-3", src: "/images/gallery/foto-08.jpg", alt: "Momento da turma 08", caption: "Rascunhos de arquitetura e lógica no papel", tag: "Bastidores" },
    { id: "c2-4", src: "/images/gallery/foto-09.jpg", alt: "Momento da turma 09", caption: "A turma reunida celebrando mais uma conquista", tag: "Turma" },
    { id: "c2-5", src: "/images/gallery/foto-10.jpg", alt: "Momento da turma 10", caption: "Foto oficial de final de ciclo e gratidão", tag: "Para Sempre" },
  ] as GalleryImage[],

  // Texto emocional de agradecimento final
  tributeFinalText: {
    title: "❤️ OBRIGADO",
    paragraphs: [
      "Obrigado, Adriano e Cruz.",
      "Por todas as aulas, explicações, dúvidas respondidas, problemas resolvidos e momentos que acabaram virando histórias.",
      "Algumas coisas a gente aprende na sala.",
      "Outras a gente só percebe depois que aquela fase acabou.",
      "Obrigado por fazerem parte da nossa caminhada."
    ],
    signature: "Com carinho,\nseus alunos."
  }
};
