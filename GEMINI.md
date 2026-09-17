# Gabriel Carvalho — Portfolio Workspace (`portfolio-gabriel`)

Contexto operacional permanente para desenvolvimento e evolução do portfólio pessoal de Gabriel Carvalho (`gabrielcarvalho.vercel.app`).

---

## 1. Arquétipo & Narrativa
- **Identidade**: Gabriel Carvalho — Engenheiro de Computação (CEFET-MG) & Engenheiro de Software.
- **Pilar Corporativo**: GOL Linhas Aéreas — Líder de Projetos, BPR, BI Estratégico e Sustentação da rede corporativa Aerotech TV.
- **Pilar Empreendedor / Web**: Fundador da CTTLAB — Engenharia web de alta conversão, 1.1s no 4G, 97 Lighthouse e Meta Conversions API (CAPI).

---

## 2. Regras de Curadoria & Restrições Inegociáveis
1. **Case Alessandra Nogueira**: Projeto PDF-First editorial. O botão de ação dispara o download/abertura do PDF oficial (`Alem_das_Aparencias_Alessandra_Nogueira.pdf`). **NUNCA** redirecionar para a URL do Vercel como se fosse um site mobile.
2. **Case Saúde Mater**: Case principal de produção ([saudemater.com.br](https://saudemater.com.br)). Destaque para métricas de performance (1.1s no 4G, 97 Lighthouse, Apache GZIP/Cache, Meta CAPI).
3. **Case BrickStore**: Next.js 15, React 19, Prisma ORM, Tailwind CSS. Imagem com Gabriel construindo a alvenaria.
4. **Case Musique**: React, Web Audio API, Dark Neon.
5. **Miller Car**: NÃO exibir fotos da bancada/cabos.
6. **euteamofernanda.vercel.app**: Projeto estritamente pessoal e afetivo. PROIBIDO listar no portfólio profissional.
7. **Git**: NUNCA executar `git commit` ou `git push` automaticamente. Gabriel gerencia o Git manualmente após inspecionar localmente.

---

## 3. Estrutura Técnica do Código
- **Framework**: React 19 + Vite.
- **Estilos**: CSS Modules (`.module.css`) + variáveis centralizadas em `src/App.css`.
- **i18n**: 3 idiomas sincronizados em `src/Languages/pt.js`, `en.js`, `fr.js`.
- **Theme**: Dark Mode (`#0b0f19`) e Light Mode (`#f8fafc`) via `ThemeContext`.
- **Build**: Validar sempre com `npm run build`.

---

## 4. Documentação de Referência
- [PORTFOLIO_STRATEGY.md](./PORTFOLIO_STRATEGY.md) — Diretrizes detalhadas de negócio e posicionamento.
- [SKILL.md](./.agents/skills/portfolio-strategist/SKILL.md) — Skill de estrategista de portfólio.
