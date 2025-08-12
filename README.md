# Base® — Arquitetura e Flow-Oriented

Este repositório contém os entregáveis imediatos da arquitetura proposta.

- Documentação principal: `docs/architecture-flow-oriented.md`
- OpenAPI Leads/Webhooks: `specs/openapi/leads.yaml`
- Catálogo de eventos (AsyncAPI): `specs/asyncapi/events.yaml`
- Matriz RBAC: `rbac/matrix.yaml`
- Plano de Segurança: `security/plan.md`

## Visualizar specs
- OpenAPI: use ferramentas como Insomnia/Swagger UI para carregar `specs/openapi/leads.yaml`.
- AsyncAPI: use o AsyncAPI Studio para `specs/asyncapi/events.yaml`.

## Próximos passos sugeridos
- Gerar SDKs cliente/servidor a partir das specs.
- Criar serviço de Leads com verificação HMAC e publicação do evento `LeadCreated`.
- Provisionamento automático de tenant trial no evento de lead qualificado.
