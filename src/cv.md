# Daniel Lorente Colmenares

Barcelona, Spain  
daniellorente20@gmail.com · [linkedin.com/in/daniellorente20](https://linkedin.com/in/daniellorente20) · [github.com/daniellorente20](https://github.com/daniellorente20)

---

I build the layer that lets engineering teams ship without thinking about it — including the layer their AI ships on.

Ten years in, my path has gone from full-stack developer to tech lead of a ten-person team to Senior AI Engineer at Factorial, where 200+ engineers work in one monorepo. The constant is where I end up: environments, pipelines, deployment tooling, the infrastructure under the product. The unglamorous layer where one fix compounds across every engineer who touches it. I work spec-first with coding agents: I write the spec, the agents write most of the code, and I keep my own time for the design, the verification and the judgement call about whether the result is right.

---

## Selected Contributions

### Isolated Test Environments for a 200-Engineer Monorepo

Factorial ships from one monorepo organised into product domains, and testing happened in shared environments, where one team's deploy could break another team's testing.

I built the platform that gives each domain its own complete, isolated copy of the product to test on (a preview environment): its own MySQL schema, Redis, Kafka consumer groups and ClickHouse database on Azure and Kubernetes, promoted through Kargo, synced by ArgoCD, routed through Cloudflare, with scoped RBAC for the operators and a runbook so the tenth environment does not need me. Along the way I fixed the things that only break at this scale: paused autoscalers freezing deployments, canary metrics aborting rollouts, replica floors sized for production rather than testing.

**Impact:** nine isolated environments, one per domain, in seven weeks; teams test and demo real changes without stepping on each other. **Scale:** 200+ engineers; 73 pull requests in the infrastructure repository alone.

**Tech:** Terraform, Azure, Kubernetes, ArgoCD, Kargo, Kafka, Redis, MySQL, ClickHouse, Cloudflare

---

### Preview Tooling: Deploy Pipeline, AI Agent Infrastructure and Quality Dashboard

Around the platform I built the tooling that makes it usable day to day, inside Factorial's workflows-as-code CI (a hundred-plus workflows generated from TypeScript templates).

I wrote the `preview-per-domain` workflow template and the tested TypeScript package behind it: domain resolution, Slack notifications to eight domain channels that fire only when the rollout actually serves traffic, database autoprovisioning from a baked seed snapshot with a confirm-before-wipe reseed flow, and a previews view in the delivery-status dashboard. Every preview also runs a dedicated instance of Factorial's AI agent, with LLM tracing wired in and the Azure capacity units documented so provisioning stopped being guesswork. And I built the engineering quality dashboard: SLA facts derived from Jira per domain and squad, scores frozen at month end, sealed quarterly, auditable by anyone.

**Impact:** deploy, reseed and observe a domain preview without asking anyone; agent changes testable per domain, in isolation, with traces.

**Tech:** GitHub Actions, TypeScript, Kubernetes, ArgoCD, Azure AI, Langfuse, MCP, Slack Block Kit, Datadog, Jira API

---

### Monolith to Microservices on AKS, Test Coverage from 20% to 80%

At Pay Retailers, a payments company, the core applications were legacy .NET monoliths with 20% test coverage and no shared standard for what to test.

As Tech Lead I drove the migration to a microservices architecture on AKS, owned the Azure and Kubernetes infrastructure, led the move of multiple services to .NET 10, and championed event-driven patterns to reduce coupling. In parallel I established the team's testing standards, made integration tests a gate before merge, and drove coverage to 80%.

**Impact:** independently deployable services on a modern runtime; release confidence became a property of the system rather than of the person deploying.

**Tech:** C# / .NET 10, Azure, AKS, Docker, event-driven architecture

---

### Tech Lead: Release Ownership for a Ten-Person Team

For three and a half years I was the technical reference and escalation point for a cross-functional team of seven to ten engineers plus QA.

I owned the full release lifecycle — planning, coordination, production deployment, post-release support — and was part of the 24/7 on-call rotation for the whole period, resolving production incidents for high-volume clients such as bet365. The job was to make the team faster and calmer at the same time.

---

### B2C Customer Portal for an Energy Company

At Nexus Energía, an electricity provider, I built the web application
where B2C customers view their electricity consumption, invoices and
supply details.

I developed it full-stack, .NET backend and Angular frontend on SQL
Server, working directly with the client on requirements.

**Tech:** C# / .NET, Angular, SQL Server

---

### gestion-dental — Clinic Management System *(personal project)*

A full-stack dental clinic management application, built with a small team: separate frontend and backend repositories, pull-request-driven workflow, continuous delivery. It is where I try things before I trust them at work.

**Tech:** .NET 10, React, Next.js

---

## Professional Experience

### Factorial — Barcelona, Spain (Jun 2026 – present)

**Senior AI Engineer** — Own the per-domain preview environment platform and the AI agent infrastructure that runs in it, plus the workflows-as-code pipeline and dashboards around them: 148 pull requests across 8 repositories in the first three months. Every pull request in the monorepo is reviewed by agentic checks — architecture, correctness, database, performance, security — and I work spec-first inside that system while maintaining and optimising the tooling it runs on. Also hands-on in the product where needed: ClickHouse migrations and adapter fixes, finance, contracts, billing, developer onboarding tooling.

**Tech:** Terraform, Azure, Kubernetes, ArgoCD, Kargo, Kafka, Redis, MySQL, ClickHouse, Cloudflare, Datadog, Langfuse, GitHub Actions, TypeScript, React

---

### Pay Retailers — Barcelona, Spain (2022 – 2026)

**Tech Lead (Aug 2022 – Mar 2026)**  
Led a cross-functional team of up to ten. Owned releases end to end — planning, coordination, production deployment, post-release support — and production incident resolution for business-critical applications. Hands-on in C# / .NET backend and React frontend throughout.

**Senior Software Engineer (Jun 2022 – Aug 2022)**  
Joined as a senior developer on the .NET backend; moved into the Tech Lead role after two months.

**Tech:** C# / .NET, Azure, AKS, Docker, React, SQL Server

---

### Nexus Energía — Barcelona, Spain (2020 – 2022)

**Full-Stack Developer** — .NET and Angular development for an energy company. Refactored middleware and added integration tests to validate it. Worked directly with the client on requirements. Integrations with SAP, OpenText and Mailchimp.

**Tech:** C# / .NET, Angular, SQL Server

---

### Aldaba — A Coruña, Spain (2018 – 2020)

**Software Engineer** — Java and .NET development across several parts of a large system. Code reviewer for the team. Built internal tooling. Oracle and MySQL.

**Tech:** Java, C# / .NET, Angular, Oracle, MySQL

---

### Earlier roles — Caracas, Venezuela (2016 – 2018)

Full-stack and operations engineering at **Itech**, **Hunatec Technologies** and **Elemétrica**: Laravel APIs, machine-to-machine integrations in Python, payment integrations, WordPress and Shopify builds, Ionic mobile. Started as a data warehouse intern at **Citibank** working in PL/SQL.

---

## Education

**Universidad Católica Andrés Bello (UCAB) — Caracas, Venezuela**  
Software Engineering, 2011 – 2017

---

## Skills

**How I work**  
Spec first, then implementation. Own the release. Measure before and after. Prefer the fix that removes a class of problems over the one that closes a ticket. Write the runbook.

**AI**  
Spec-driven development with coding agents as the default way of working: design the spec, delegate the implementation, verify the result. Daily work inside an agentic CI — AI review gates on every pull request, skill-driven agents per domain — maintaining and optimising that tooling. Infrastructure for LLM agents in production-like environments: dedicated deployments, tracing with Langfuse, capacity planning on Azure AI. MCP tooling.

**Cloud & Infrastructure**  
Azure, AWS, Kubernetes, ArgoCD, Kargo, Terraform, Docker / BuildKit, Cloudflare, GitHub Actions, Datadog. Workflows-as-code; preview and ephemeral environments; CI/CD pipeline design.

**Backend**  
C# / .NET (Core through 10), Node.js / TypeScript. Earlier: Java, PHP (Laravel), Python.

**Frontend**  
React, Next.js, TypeScript, Angular.

**Data**  
MySQL, PostgreSQL, SQL Server, ClickHouse, Redis, Kafka, Oracle, MongoDB.

**Architecture**  
Microservices, event-driven and asynchronous patterns, REST and GraphQL APIs, monorepo tooling, environment isolation.

**Languages**  
Spanish (native), English (C1).
