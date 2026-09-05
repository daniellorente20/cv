---
theme:
  overrides:
    h1: "text-black text-4xl font-bold tracking-tight mt-0 mb-2"
    h2: "text-black text-2xl font-bold mt-2 mb-3"
    h3: "text-black text-xl font-semibold mt-6 mb-2"
    p: "text-base leading-relaxed mb-4 text-black"
    a: "text-black underline"
    ul: "list-disc pl-8 mb-4"
    ol: "list-decimal pl-8 mb-4"
    li: "text-black mb-2"
    strong: "font-semibold"
    em: "italic"
    blockquote: "text-black italic"
    code: "text-black font-mono text-sm tracking-wide"
    hr: "border-t border-gray-200 mt-8 mb-8"
---

# Daniel Lorente Colmenares

Barcelona, Spain  
daniellorente20@gmail.com · [linkedin.com/in/daniellorente20](https://linkedin.com/in/daniellorente20) · [github.com/daniellorente20](https://github.com/daniellorente20)

---

I build the layer that lets engineering teams ship without thinking about it — including the layer their AI ships on.

Ten years in, my path has gone from full-stack developer to tech lead of a ten-person team to Senior AI Engineer at Factorial, where 200+ engineers work in one monorepo. The constant is where I end up: environments, pipelines, deployment tooling, the infrastructure under the product. The unglamorous layer where one fix compounds across every engineer who touches it.

At Factorial that cuts both ways. I work spec-first with coding agents, in a codebase where every pull request is reviewed by agentic checks — I write the spec, the agents write most of the code, and I keep my own time for the design, the verification and the judgement call about whether the result is right. And I run the infrastructure the company's own AI agent is tested on. Spec-driven development is what makes the first part safe; the second part is what makes me useful to the people building the agent.

---

## Selected Contributions

### Per-Domain Preview Environment Platform

Factorial's 200+ engineers ship from one monorepo organised into product domains, and each domain gets its own preview environment.

I built the per-domain preview platform from the first environment to the ninth. Each product domain gets an isolated environment on Azure and Kubernetes with its own MySQL schema, Redis, Kafka consumer groups and ClickHouse database, promoted through Kargo, synced by ArgoCD, routed through Cloudflare, with scoped RBAC for the operators and a runbook so the tenth environment does not need me. Along the way I fixed the things that only break at this scale: paused ScaledObjects freezing syncs, canary metrics aborting rollouts, replica floors sized for production rather than preview.

**Impact:** nine isolated preview environments, one per domain, in seven weeks. **Scale:** 200+ engineers; 73 pull requests in the infrastructure repository alone.

**Tech:** Terraform, Azure, Kubernetes, ArgoCD, Kargo, Kafka, Redis, MySQL, ClickHouse, Cloudflare

---

### AI Agent Infrastructure in Preview Environments

Factorial ships an AI agent as part of the product, and each preview environment runs its own instance of it.

I gave every preview environment a dedicated agent deployment, wired LLM tracing into the agent previews, and documented the capacity units the AI deployments consume on Azure so provisioning stopped being guesswork. I also contributed to the internal MCP development setup engineers use to build against the agent.

**Impact:** agent changes can be tested per domain, in isolation, with traces.

**Tech:** Kubernetes, ArgoCD, Azure AI, Langfuse, MCP

---

### Preview Deploy Pipeline: Workflows-as-Code, Seeding, Notifications and Dashboard

Factorial's CI is not hand-written YAML: a hundred-plus workflows are generated from TypeScript templates over a shared workflow abstraction. The preview pipeline lives inside that system.

I wrote the `preview-per-domain` workflow template and a tested TypeScript package behind it — domain resolution, preview identifiers, a Slack Block Kit notification builder and its sender, the domain-to-channel mapping — each module with its own unit tests. The notifications route to eight domain channels, name the domain, link to the running environment, and fire only when the rollout actually serves traffic. I built database autoprovisioning from a baked seed snapshot (reseeded once per image, not once per pod start) and a reseed flow with a database dropdown and confirm-before-wipe. I fixed two build bugs that only surfaced at this scale: preview builds ignoring the bundle image they had just produced, and builds not seeing the PR's own dependencies. I extended the shared workflow abstraction with configurable run names so a CI run says what it is deploying. And on the dashboard side I added a previews view to the delivery-status app: health checks, deployed-by and branch links, Actions run links, deploy time, a Datadog logs button per environment.

**Impact:** deploy, reseed and observe a domain preview without asking anyone.

**Tech:** GitHub Actions, TypeScript, workflows-as-code, Slack Block Kit, Docker / BuildKit, AWS ECR, Datadog

---

### Engineering Quality and SLA Dashboard

Engineering quality at Factorial is measured per domain and squad against SLAs derived from Jira.

I built the quality model and its dashboard: SLA facts derived from Jira per domain and squad, scores frozen at month end (resolution state and ticket priority as of the close, not live), quarterly results sealed in a step that is invocable, re-executable and auditable, historical data backfilled, and a "How it works" panel that explains every label so anyone can check the maths.

**Impact:** a quality score that does not move after the month closes, and that anyone can audit.

**Tech:** TypeScript, Bun, Drizzle ORM, Jira API

---

### Monolith to Microservices on Azure Kubernetes Service

At Pay Retailers, a payments company, the core applications were legacy .NET monoliths that were increasingly hard to scale and change safely.

As Tech Lead I drove the migration to a microservices architecture on AKS, owned the Azure and Kubernetes infrastructure (container orchestration, scaling policies, resource optimisation), and led the move of multiple services to .NET 10. I championed event-driven and asynchronous patterns to reduce coupling between services.

**Impact:** independently deployable services on a modern runtime, with infrastructure the team could reason about.

**Tech:** C# / .NET 10, Azure, AKS, Docker, event-driven architecture

---

### Test Coverage from 20% to 80%

The same codebase had 20% test coverage and no shared standard for what to test or how.

I established testing standards across the team, introduced integration testing as a gate before merge, and drove coverage to 80% over the course of the engagement. Coverage was the metric; the goal was being able to deploy to production without holding our breath.

**Impact:** 20% → 80% coverage; release confidence became a property of the system rather than of the person deploying.

**Tech:** .NET test tooling, CI pipelines

---

### Tech Lead: Release Ownership for a Ten-Person Team

For three and a half years I was the technical reference and escalation point for a cross-functional team of seven to ten engineers plus QA.

I owned the full release lifecycle — planning, coordination, production deployment, post-release support — and production incident resolution for business-critical applications. The job was to make the team faster and calmer at the same time.

---

### gestion-dental — Clinic Management System *(personal project)*

A full-stack dental clinic management application, built with a small team.

Separate frontend and backend repositories, pull-request-driven workflow, continuous delivery. It is where I try things before I trust them at work.

**Tech:** .NET 10, React, Next.js

---

## Professional Experience

### Factorial — Barcelona, Spain (Jun 2026 – present)

**Senior AI Engineer** — Built the per-domain preview environment platform (nine isolated environments on Azure and Kubernetes), the AI agent infrastructure that runs in them, the workflows-as-code pipeline and dashboard around them, and an engineering quality dashboard: 148 pull requests across 8 repositories in the first three months. The monorepo's CI is generated from TypeScript templates and every pull request is reviewed by agentic checks — architecture, correctness, database, performance, security — alongside a catalogue of skills that coding agents load per domain. I work spec-first inside that system, and I maintain and optimise the tooling it runs on. Also hands-on in the product where needed — ClickHouse migrations and adapter fixes, finance, contracts, billing, developer onboarding tooling.

**Tech:** Terraform, Azure, Kubernetes, ArgoCD, Kargo, Kafka, Redis, MySQL, ClickHouse, Cloudflare, Datadog, Langfuse, GitHub Actions, TypeScript, React

---

### Pay Retailers — Barcelona, Spain (2022 – 2026)

**Tech Lead (Aug 2022 – Mar 2026)**  
Led a cross-functional team of up to ten. Owned releases end to end. Drove the monolith-to-microservices migration on AKS, the .NET 10 upgrade, and the testing culture that took coverage from 20% to 80%. Hands-on in C# / .NET backend and React frontend throughout.

**Senior Software Engineer (Jun 2022 – Aug 2022)**  
Joined as a senior developer on the .NET backend; moved into the Tech Lead role after two months.

**Tech:** C# / .NET, Azure, AKS, Docker, React, SQL Server

---

### Nexus Energía — Barcelona, Spain (2020 – 2022)

**Full-Stack Developer** — .NET and Angular application development for an energy company. Refactored middleware and added integration tests to validate it. Worked directly with the client on requirements. Integrations with SAP, OpenText and Mailchimp.

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
