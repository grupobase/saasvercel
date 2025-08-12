# Configuração do Domínio groupbasebytecn.com.br

## Passos para Configuração Completa

### 1. Configuração no Painel da Vercel

1. **Acesse o painel da Vercel**: https://vercel.com/dashboard
2. **Selecione seu projeto**: saasvercel
3. **Vá para Settings > Domains**
4. **Adicione o domínio**: `groupbasebytecn.com.br`
5. **Configure os registros DNS** conforme instruído pela Vercel

### 2. Configuração DNS (no seu provedor de domínio)

Adicione os seguintes registros DNS:

\`\`\`
Tipo: A
Nome: @
Valor: 76.76.19.61

Tipo: CNAME  
Nome: www
Valor: cname.vercel-dns.com
\`\`\`

### 3. Configuração de Variáveis de Ambiente

1. **No painel da Vercel**, vá para Settings > Environment Variables
2. **Adicione as seguintes variáveis**:
   - `NEXT_PUBLIC_SITE_URL`: `https://groupbasebytecn.com.br`
   - `NEXT_PUBLIC_SITE_NAME`: `GroupBase ByteCN`

### 4. Verificação SSL

- O certificado SSL será automaticamente provisionado pela Vercel
- Aguarde alguns minutos após a configuração DNS
- Verifique em https://groupbasebytecn.com.br

### 5. Teste das Funcionalidades

Após a configuração, teste:
- [ ] Acesso ao domínio principal
- [ ] Redirecionamentos funcionando
- [ ] Certificado SSL ativo
- [ ] Todas as rotas acessíveis
- [ ] Integrações funcionando (Supabase, etc.)

### 6. Configuração de Redirects (Opcional)

Se migrando de outro domínio, adicione redirects no `next.config.mjs`:

\`\`\`javascript
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'old-domain.com' }],
      destination: 'https://groupbasebytecn.com.br/:path*',
      permanent: true,
    },
  ];
}
\`\`\`

## Troubleshooting

### DNS não propagou
- Aguarde até 48h para propagação completa
- Use `dig groupbasebytecn.com.br` para verificar

### SSL não ativo
- Verifique se DNS está correto
- Aguarde alguns minutos após configuração DNS
- Contate suporte Vercel se persistir

### Redirects não funcionando
- Verifique configuração no next.config.mjs
- Teste em modo incógnito
- Limpe cache do navegador
