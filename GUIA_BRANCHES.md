# Guia de Branches do Git

## Diferença: Branches vs Páginas

### Branches do Git (Controle de Versão)
- `main` - Código de produção
- `develop` - Desenvolvimento ativo
- `feature/nova-funcionalidade` - Desenvolvimento de features
- `hotfix/correcao-urgente` - Correções críticas

### Páginas/Rotas do Aplicativo
- `/` - Página inicial
- `/about` - Página sobre
- `/pricing` - Página de planos
- `/contact` - Página de contato
- `/blogs` - Página do blog
- `/signin` - Página de login
- `/signup` - Página de cadastro

## Workflow Recomendado

### 1. Desenvolvimento de Nova Funcionalidade
\`\`\`bash
git checkout -b feature/nova-funcionalidade
# Desenvolver a funcionalidade
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push origin feature/nova-funcionalidade
# Criar Pull Request para main
\`\`\`

### 2. Correção de Bug
\`\`\`bash
git checkout -b hotfix/correcao-bug
# Corrigir o bug
git add .
git commit -m "fix: corrige bug crítico"
git push origin hotfix/correcao-bug
# Criar Pull Request para main
\`\`\`

### 3. Deploy para Produção
\`\`\`bash
git checkout main
git pull origin main
# Deploy automático via Vercel
\`\`\`

## Configuração Atual

O projeto está configurado com:
- Branch principal: `main`
- CI/CD: GitHub Actions
- Deploy automático: Vercel
- Todas as páginas implementadas e funcionais
