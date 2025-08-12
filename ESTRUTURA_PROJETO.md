# Estrutura do Projeto SaaS Vercel

## Páginas e Rotas Implementadas

### Páginas Principais
- **Home** (`/`) - Página inicial com hero, features e CTA
- **Sobre** (`/about`) - Informações sobre a empresa
- **Planos** (`/pricing`) - Planos de preços e assinaturas
- **Contato** (`/contact`) - Formulário de contato
- **Blog** (`/blogs`) - Lista de artigos do blog
- **Post Individual** (`/blogs/[slug]`) - Artigo específico do blog

### Páginas de Autenticação
- **Login** (`/signin`) - Página de login
- **Cadastro** (`/signup`) - Página de registro
- **Esqueci Senha** (`/forgot-password`) - Recuperação de senha
- **Redefinir Senha** (`/reset-password/[token]`) - Redefinição com token

### Páginas Especiais
- **Erro** (`/error`) - Página de erro personalizada
- **404** (`not-found.tsx`) - Página não encontrada

## Estrutura de Arquivos

\`\`\`
src/
├── app/
│   ├── (site)/
│   │   ├── (auth)/
│   │   │   ├── signin/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   └── reset-password/[token]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── blogs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── error/page.tsx
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── register/route.ts
│   │   ├── payment/route.ts
│   │   └── forgot-password/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── providers.tsx
└── components/
    ├── Header/
    ├── Footer/
    ├── Auth/
    ├── Blog/
    ├── Common/
    └── ui/
\`\`\`

## Navegação

O menu principal inclui:
- Home
- About (Sobre)
- Pricing (Planos)
- Contact (Contato)
- Blog (Blogue)
- Pages (submenu com todas as páginas)

## Branches Recomendados para Desenvolvimento

### Branch Principal
- `main` - Código de produção

### Branches de Desenvolvimento
- `develop` - Branch de desenvolvimento
- `feature/auth` - Melhorias na autenticação
- `feature/blog` - Funcionalidades do blog
- `feature/payments` - Sistema de pagamentos
- `hotfix/critical-fix` - Correções urgentes

## Tecnologias Utilizadas

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Autenticação**: NextAuth.js
- **Banco de Dados**: Supabase/PostgreSQL
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Domínio Configurado

O projeto está preparado para o domínio: `groupbasebytecn.com.br`

## Próximos Passos

1. Configurar variáveis de ambiente
2. Configurar autenticação social (Google, GitHub)
3. Implementar sistema de pagamentos (Stripe)
4. Configurar email transacional
5. Deploy para produção
