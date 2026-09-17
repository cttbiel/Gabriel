---
name: portfolio-strategist
description: >-
  Strategic positioning, presentation rules, curation criteria, and code conventions for Gabriel Carvalho's personal portfolio (portfolio-gabriel).
  Use whenever modifying, reviewing, or discussing Gabriel's resume, portfolio, professional narrative, or case studies.
---

# Portfolio Strategist Skill — Gabriel Carvalho

Esta skill define as diretrizes estratégicas, limites de apresentação, regras de curadoria e boas práticas para manter o portfólio de Gabriel Carvalho (`C:\Users\Gabriel Carvalho\Projects\portfolio-gabriel`) no nível pleno/sênior de **Engenharia de Computação & Software**.

---

## 1. Posicionamento de Gabriel Carvalho

Gabriel Carvalho é posicionado no mercado sob o arquétipo do **Engenheiro Integral**:
- **Formação**: Engenharia de Computação no **CEFET-MG** (sistemas, hardware, computação distribuída).
- **Atuação Corporativa**: **GOL Linhas Aéreas** — Líder de Projetos e Consultor de Otimização de Processos (BPR, modelagem DAX em Power BI, mitigação de gargalos operacionais e sustentação da rede corporativa Aerotech TV).
- **Iniciativa Comercial / Startup**: Fundador da **CTTLAB** — Engenharia de software, performance web extrema (1.1s no 4G), SEO 100/100, servidores Apache de alta disponibilidade e telemetria ponta a ponta (Meta Conversions API & GA4).

---

## 2. Regras Rígidas de Curadoria de Projetos

Ao sugerir ou atualizar qualquer projeto no portfólio, respeite estritamente:

1. **Saúde Mater**:
   - Case principal de performance web e CRO.
   - Enfatizar números reais: 1.1s de carregamento no 4G, 97/100 Lighthouse, Meta CAPI e Apache.
   - Link oficial no ar: `https://saudemater.com.br`.

2. **Além das Aparências (Alessandra Nogueira)**:
   - **REGRA INEGOCIÁVEL**: O projeto foi desenhado sob o paradigma **PDF-First** (apresentação editorial para captação de palestras).
   - **NUNCA** redirecionar o usuário para a URL da Vercel como site responsivo padrão, pois ele não foi adaptado para mobile.
   - O botão de ação deve sempre **baixar / abrir diretamente o PDF oficial** (`Alem_das_Aparencias_Alessandra_Nogueira.pdf`).

3. **BrickStore**:
   - Case Full-stack moderno: **Next.js 15, React 19, Prisma ORM e Tailwind CSS**.
   - Ilustrado com Gabriel construindo a alvenaria com o logo circular.

4. **Musique**:
   - Case Front-End & Áudio: **HTML5 Web Audio API, React e Interface Dark Neon**.
   - Demonstra domínio de APIs de browser e reatividade.

5. **Miller Car**:
   - **NÃO exibir fotos de setup ou bancada**, conforme determinação de Gabriel sobre padrão estético de cabos/mesa.

6. **euteamofernanda.vercel.app**:
   - Projeto estritamente íntimo e afetivo criado para sua namorada. **Proibido** incluir em qualquer material corporativo ou portfólio.

7. **Projetos Introdutórios (Número Secreto, Decodificador)**:
   - Mantidos fora dos cartões principais de destaque para não diluir a percepção de maturidade profissional.

---

## 3. Diretrizes de Código & Git

1. **Zero Git Automatizado**:
   - **JAMAIS** rodar `git commit` ou `git push` no repositório do portfólio. Gabriel realiza a revisão local (`npm run dev`) e controla os commits manualmente.
2. **Sincronia Tripla de Idiomas**:
   - Qualquer nova chave de texto precisa ser adicionada simultaneamente em `src/Languages/pt.js`, `src/Languages/en.js` e `src/Languages/fr.js`.
3. **Design System**:
   - Cores centralizadas em variáveis CSS no `src/App.css`.
   - Cartões com cantos arredondados (`border-radius: 20px`), bordas sutis e efeito hover responsivo.
   - Tipografia: `Plus Jakarta Sans` para textos e `Rubik` para títulos expressivos.
