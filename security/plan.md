# Plano de Segurança — Base®

## Ações imediatas (Semana 0)
- Revogar e rotacionar todos os tokens/chaves expostos em materiais de referência.
- Migrar segredos para cofre gerenciado (Vault/KMS) com acesso por papel e rotação automática.
- Habilitar MFA obrigatório para contas administrativas.
- Ativar WAF e CSP estritos no frontdoor (site, console, APIs).

## Controles mínimos (Mês 1)
- Autenticação: OIDC/OAuth2, SSO, MFA, bloqueio por IP/anomalia.
- Autorização: RBAC + ABAC leve; política de menor privilégio; segregação de funções.
- Dados: RLS por tenant; criptografia em trânsito (TLS 1.2+) e em repouso (KMS); DLP para PHI/PII.
- Auditoria: logs imutáveis, trilhas para ações sensíveis; exportação para SIEM; retenção por vertical regulada.
- Backup & DR: política de retenção; testes mensais de restauração; objetivos RPO/RTO documentados.
- Webhooks: assinatura HMAC (SHA-256), idempotência, reentrega com backoff e DLQ.

## Segurança no SDLC
- Pipelines com SBOM, SAST/DAST, verificação de dependências e assinatura de artefatos.
- IaC com escaneamento e revisões obrigatórias; ambientes efêmeros por PR.

## Conformidade
- LGPD: consentimento explícito, base legal catalogada, minimização de dados, política de retenção e descarte.
- Saúde: requisitos CFM/SBIS; segregação de dados sensíveis; controle de acesso granular; trilhas e assinaturas digitais.

## SLOs e Telemetria de Segurança
- Taxa de aceitação de webhook assinado ≥ 99.9%.
- MTTR para incidentes P1 < 4h.
- Falhas de autenticação por usuário/dia com limiares e alertas.