// src/content/siteContent.ts — Base® v1
// Arquivo central de conteúdo textual para o site (Landing + Páginas)
// Objetivo: permitir trocar textos sem editar componentes.

export type CTA = { label: string; href: string };

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  trustNote: string;
}

export interface SolutionCard {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  href?: string; // exemplo: "/products/base-hospital"
}

export interface SolutionsSection {
  title: string;
  subtitle: string;
  cards: SolutionCard[];
}

export interface AboutHomeSection {
  title: string;
  paragraph1: string;
  paragraph2: string;
  highlights: string[];
}

export interface CTASection {
  title: string;
  subtitle: string;
  button: CTA;
}

export interface PricingPlan {
  name: string;
  blurb: string;
  benefits: string[];
}

export interface PricingSection {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface Testimonial { quote: string; author: string }
export interface FAQItem { question: string; answer: string }

export interface TeamSection {
  product: string;
  engineering: string;
  customerSuccess: string;
  implementation: string;
}

export interface ClientsSection { tagline: string }

export interface BlogHomeSection { title: string; subtitle: string }

export interface ContactSidebar {
  address: string;
  contactEmail: string;
  supportEmail: string;
}

export interface ContactPage {
  title: string;
  subtitle: string;
  formFields: string[]; // ["Nome completo", "Email", "Telefone", "Mensagem"]
  sidebar: ContactSidebar;
}

export interface BlogListPage { title: string; description: string }

export interface BlogPostDefaults {
  seoTitlePattern: string; // "{Título do post} | Grupo Base®"
  summaryHint: string;
  closingCTA: string;
}

export interface AuthSection {
  signIn: { title: string; subtitle: string; button: string; helperLink: string };
  signUp: { title: string; subtitle: string; benefits: string[] };
  forgotPassword: { title: string; instruction: string };
  resetPassword: { title: string; confirmation: string };
}

export interface NotFoundPage { title: string; message: string; button: string }

export interface FooterSection {
  mission: string;
  institutional: string[]; // ["Sobre", "Carreiras", "Contato"]
  resources: string[]; // ["Blog", "Documentação", "Status"]
  legal: string; // "Termos de uso e Política de privacidade"
}

export interface SEOEntry { title: string; description: string }

export interface SEOConfig {
  home: SEOEntry;
  about: SEOEntry;
  pricing: SEOEntry;
  contact: SEOEntry;
  blog: SEOEntry;
}

export interface PagesContent {
  about: { headline: string; paragraph1: string; paragraph2: string; valueBlock: string };
  pricing: { title: string; opening: string; note: string };
  contact: ContactPage;
  blogList: BlogListPage;
  blogPost: BlogPostDefaults;
  auth: AuthSection;
  notFound: NotFoundPage;
  footer: FooterSection;
  seo: SEOConfig;
}

export interface HomeContent {
  hero: HeroContent;
  solutions: SolutionsSection;
  about: AboutHomeSection;
  cta: CTASection;
  pricing: PricingSection;
  testimonials: Testimonial[];
  faq: FAQItem[];
  team: TeamSection;
  clients: ClientsSection;
  blogHome: BlogHomeSection;
}

export interface SiteContent {
  home: HomeContent;
  pages: PagesContent;
}

export const siteContent: SiteContent = {
  home: {
    hero: {
      title: "Plataforma de gestão empresarial para PMEs que querem escala",
      subtitle:
        "O Grupo Base® integra vendas, financeiro, fiscal, estoque e operação em um só lugar. Reduza ruído, aumente seu ROI e gere decisões com dados em tempo real.",
      primaryCta: { label: "Começar agora", href: "/signup" },
      secondaryCta: { label: "Ver planos", href: "/pricing" },
      trustNote: "LGPD-ready, arquitetura modular e time-to-value acelerado.",
    },

    solutions: {
      title: "Soluções 360º",
      subtitle:
        "Módulos Base® prontos para o seu segmento, resultando em simplificação das operações, ganho de eficiência e vantagem competitiva para o seu negócio.",
      cards: [
        {
          title: "Base® Clínica e Consultórios",
          subtitle: "Gestão Clínica 360º: eficiência e cuidado em um só lugar",
          description:
            "Prontuário eletrônico, agenda integrada, faturamento particular e convênios no padrão da saúde suplementar, controle de materiais e indicadores assistenciais.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-clinicas",
        },
        {
          title: "Base® Hospital",
          subtitle: "Hospital conectado: tecnologia para salvar tempo e vidas",
          description:
            "Gestão de leitos, internação e alta, centro cirúrgico, faturamento hospitalar, farmácia e almoxarifado com rastreabilidade e trilhas de auditoria.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-hospital",
        },
        {
          title: "Base® Comércio",
          subtitle: "Venda sem limites: controle total do seu comércio",
          description:
            "Frente de caixa fiscal, cadastro de produtos e variações, controle de estoque com curva ABC, promoções e fidelidade, conciliação de vendas.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-comercio",
        },
        {
          title: "Base® Serviços",
          subtitle: "Serviços em alta velocidade: organize, execute, fature",
          description:
            "Contratos e ordens de serviço, apontamento de horas, emissão de NFS-e, faturamento recorrente, SLA e margem por projeto.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-servicos",
        },
        {
          title: "Base® Agro",
          subtitle: "Do campo ao lucro: inteligência de gestão agrícola",
          description:
            "Gestão de safra e talhões, custos por área, estoque de insumos e defensivos, rastreabilidade de operações e emissão fiscal.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-agro",
        },
        {
          title: "Base® Food",
          subtitle: "Cozinha, balcão e delivery sincronizados num clique",
          description:
            "Frente de caixa para restaurantes, comandas e tela de cozinha (KDS), delivery com integrações, ficha técnica, CMV e compras inteligentes.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-food",
        },
        {
          title: "Base® Salões",
          subtitle: "Beleza inteligente: agende, gerencie, encante clientes",
          description:
            "Agenda inteligente, pacotes e comissionamento, catálogo de serviços, frente de caixa e fidelidade com relacionamento ativo.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-saloes",
        },
        {
          title: "Base® Barbearia",
          subtitle: "Barbearia moderna: agilidade, estilo e fidelização",
          description:
            "Agendamento on-line, assinaturas e fidelidade, comissões, frente de caixa ágil e gestão diária de caixa.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-barbearia",
        },
        {
          title: "Base® Pet",
          subtitle: "Gestão pet friendly: mais cuidado, mais receita",
          description:
            "Prontuário pet, vacinas com lembretes, banho e tosa, pet shop com frente de caixa, estoque de medicamentos e produtos.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-pet",
        },
        {
          title: "Base® Shop",
          subtitle: "E-commerce pronto para escalar do dia 1 ao infinito",
          description:
            "Loja on-line nativa, vitrine e carrinho, meios de pagamento, cálculo de frete e integrações logísticas ponta a ponta.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-shop",
        },
        {
          title: "Base® Indústria",
          subtitle: "Produção enxuta: controle industrial de ponta a ponta",
          description:
            "MRP e PPCP, lista de materiais (BOM), ordens de produção, apontamento de chão de fábrica, custo padrão e real, controle de qualidade.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-industria",
        },
        {
          title: "Base® Construtora e Incorporações",
          subtitle: "Obra no prazo: gestão de custos e equipes em tempo real",
          description:
            "Orçamentação, obras e medições, diário de obra, compras e contratos, cronograma físico-financeiro e curva de progresso.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-construtora",
        },
        {
          title: "Base® POS e Tecn",
          subtitle: "Checkout omnicanal: PDV, TEF e Pix integrados",
          description:
            "Frente de caixa omnicanal, integração com terminais de pagamento e Pix, emissão fiscal, conciliação e painéis operacionais de loja.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-pos",
        },
        {
          title: "Base by Asaas®",
          subtitle: "Receba no automático: boletos, Pix e cartão com régua de cobrança",
          description:
            "Cobrança recorrente, boletos, Pix e cartão, links de pagamento, régua de cobrança e conciliação automática integrada ao financeiro.",
          ctaLabel: "Ver detalhes",
          href: "/products/base-asaas", // ajuste se usar outro slug
        },
      ],
    },

    about: {
      title: "Conheça o Grupo Base®",
      paragraph1:
        "Somos uma startup de gestão empresarial completa e inteligente que se adapta a qualquer segmento. Nossa plataforma orquestra processos ponta a ponta e transforma dados em decisões acionáveis.",
      paragraph2:
        "Modular por design, escalável por padrão e com UX descomplicada para sua equipe operar com eficiência desde o dia um.",
      highlights: ["Implementação guiada.", "Suporte humano.", "Evolução contínua."],
    },

    cta: {
      title: "Sua operação no piloto automático",
      subtitle: "Acelere implantação, padronize rotinas e ganhe previsibilidade financeira.",
      button: { label: "Agendar demonstração", href: "/contact" },
    },

    pricing: {
      title: "Planos sob medida para cada fase",
      subtitle: "Comece pequeno, escale com segurança e pague apenas pelo que usar.",
      plans: [
        {
          name: "Start",
          blurb: "Para times que estão padronizando processos.",
          benefits: [
            "1 usuário",
            "Módulos essenciais",
            "Relatórios básicos",
            "Atualizações inclusas",
            "Suporte por chat",
          ],
        },
        {
          name: "Growth",
          blurb: "Para quem precisa tracionar e ganhar visibilidade.",
          benefits: [
            "Até 5 usuários",
            "Automações",
            "Dashboards avançados",
            "Integrações principais",
            "Suporte prioritário",
          ],
        },
        {
          name: "Scale",
          blurb: "Para operações com múltiplas frentes e alto volume.",
          benefits: [
            "Até 10 usuários",
            "Permissões avançadas",
            "SLA expandido",
            "Integrações premium",
            "Onboarding dedicado",
          ],
        },
      ],
    },

    testimonials: [
      {
        quote:
          "Finalmente enxergamos o negócio de ponta a ponta. Decisão com dados, não com achismo.",
        author: "Mariana, Varejo",
      },
      {
        quote:
          "Padronizamos faturamento e reduzimos erros. O time agradece.",
        author: "Carlos, Serviços",
      },
      {
        quote:
          "Escalamos sem perder controle. A plataforma cresceu junto com a operação.",
        author: "Bianca, Food",
      },
    ],

    faq: [
      {
        question: "Quanto tempo leva para implantar?",
        answer:
          "Em média de uma a duas semanas com nosso onboarding guiado.",
      },
      {
        question: "Consigo migrar dados do sistema atual?",
        answer:
          "Sim. Suportamos importação de clientes, produtos e históricos mediante arquivo CSV.",
      },
      {
        question: "Há limites de usuários ou módulos?",
        answer:
          "Os planos têm limites iniciais. Você pode expandir usuários e adicionar módulos conforme crescer.",
      },
      {
        question: "Quais integrações estão disponíveis?",
        answer:
          "Gateways de pagamento, marketplaces, BI e emissão fiscal. Solicite a lista completa na demonstração.",
      },
      {
        question: "Como funciona o suporte?",
        answer:
          "Atendemos por chat e email, com SLA de acordo com o plano contratado.",
      },
    ],

    team: {
      product: "Define roadmap orientado a valor e desenha experiências sem atrito.",
      engineering: "Garante performance, segurança e escalabilidade da plataforma.",
      customerSuccess:
        "Acompanha metas, indicadores e adoção de funcionalidades.",
      implementation: "Conduz setup, migração e treinamento do time.",
    },

    clients: {
      tagline:
        "Escolhido por operações de comércio, serviços, saúde, food e indústria leve que precisam escalar com controle.",
    },

    blogHome: {
      title: "Insights que viram prática",
      subtitle:
        "Conteúdo direto ao ponto sobre gestão, produtividade e dados aplicados ao dia a dia.",
    },
  },

  pages: {
    about: {
      headline: "Gestão empresarial sem complexidade desnecessária",
      paragraph1:
        "Nascemos para simplificar operações e destravar crescimento. Entregamos processos padronizados e medimos o que importa.",
      paragraph2:
        "Combinamos tecnologia, método e suporte humano para garantir adoção rápida e ganhos mensuráveis.",
      valueBlock: "Menos ruído, mais escala. Mais previsibilidade, melhor margem.",
    },

    pricing: {
      title: "Transparência e previsibilidade",
      opening:
        "Escolha o plano que acompanha seu momento e aumente ou reduza conforme a demanda.",
      note: "Todos os planos incluem atualizações, segurança e backups automáticos.",
    },

    contact: {
      title: "Vamos destravar sua operação",
      subtitle:
        "Conte os seus objetivos e montamos um plano de implantação sob medida.",
      formFields: ["Nome completo", "Email", "Telefone", "Mensagem"],
      sidebar: {
        address: "228 - Botafogo, Rio de Janeiro - RJ, 22250-906",
        contactEmail: "contato@grupobase.com.br",
        supportEmail: "suporte@grupobase.com.br",
      },
    },

    blogList: {
      title: "Aprenda, implemente e escale",
      description:
        "Guias práticos e estudos reais sobre gestão, operação e dados para PMEs.",
    },

    blogPost: {
      seoTitlePattern: "{Título do post} | Grupo Base®",
      summaryHint:
        "Um parágrafo objetivo com a tese do post e o resultado prático esperado para o leitor.",
      closingCTA:
        "Quer levar o tema para a sua operação? Fale com nosso time.",
    },

    auth: {
      signIn: {
        title: "Bem-vindo de volta",
        subtitle: "Acesse seu painel e continue de onde parou.",
        button: "Entrar",
        helperLink: "Esqueci minha senha",
      },
      signUp: {
        title: "Crie sua conta",
        subtitle: "Teste a plataforma e valide valor desde o primeiro dia.",
        benefits: [
          "Onboarding guiado",
          "Suporte por chat",
          "Cancelamento simples",
        ],
      },
      forgotPassword: {
        title: "Redefinir senha",
        instruction: "Enviaremos um link de recuperação para o seu email.",
      },
      resetPassword: {
        title: "Defina uma nova senha",
        confirmation: "Senha atualizada com sucesso. Você já pode entrar.",
      },
    },

    notFound: {
      title: "Página não encontrada",
      message: "O conteúdo que você busca foi movido ou não existe mais.",
      button: "Voltar para a Home",
    },

    footer: {
      mission:
        "Operação simples, dados confiáveis e crescimento sustentável para PMEs.",
      institutional: ["Sobre", "Carreiras", "Contato"],
      resources: ["Blog", "Documentação", "Status"],
      legal: "Termos de uso e Política de privacidade",
    },

    seo: {
      home: {
        title: "Grupo Base® | Plataforma de gestão empresarial para PMEs",
        description:
          "Integre vendas, financeiro, fiscal e operações em um só lugar. Implementação rápida, dados confiáveis e escala com segurança.",
      },
      about: {
        title: "Sobre o Grupo Base®",
        description:
          "Startup de gestão empresarial completa e inteligente para PMEs de qualquer segmento.",
      },
      pricing: {
        title: "Planos e Preços | Grupo Base®",
        description:
          "Escolha o plano certo para seu momento e escale sem fricção.",
      },
      contact: {
        title: "Fale conosco | Grupo Base®",
        description:
          "Agende uma demonstração e receba um plano de implantação sob medida.",
      },
      blog: {
        title: "Blog | Grupo Base®",
        description:
          "Conteúdos práticos sobre gestão, operação e dados para PMEs.",
      },
    },
  },
} as const;

export default siteContent;

