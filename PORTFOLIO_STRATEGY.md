# 🏛️ Estratégia de Posicionamento & Regras de Negócio — Portfólio Gabriel Carvalho (v2.0)

Este documento registra formalmente a linha de pensamento estratégico, regras de negócio, limites de confidencialidade e decisões de design aplicadas na evolução do portfólio pessoal de **Gabriel Carvalho** (`C:\Users\Gabriel Carvalho\Projects\portfolio-gabriel` / `gabrielcarvalho.vercel.app`).

---

## 1. O Arquétipo Profissional ("Engenheiro Integral")

### De Onde Viemos (v1.0 - 2025)
- Apresentação estilo iniciante/estudante júnior.
- Avatar em cartoon/spider (homenagem à professora Letícia e ao cosplay de Miles Morales).
- Projetos de cursos introdutórios (Jogo do Número Secreto, Decodificador de Texto).
- Falta de conexão com as entregas corporativas reais (GOL Linhas Aéreas) e comerciais (CTTLAB).

### Onde Estamos (v2.0 - Pleno/Sênior)
O posicionamento de Gabriel é fundamentado na **tríade de valor**:
1. **Rigor Técnico & Ciências Exatas (CEFET-MG)**: Graduando em Engenharia de Computação, com base sólida em sistemas operacionais, redes, arquitetura de computadores e algoritmos.
2. **Liderança & Otimização Corporativa (GOL Linhas Aéreas)**: Atuação como Líder de Projetos e Consultor Interno de Processos (BPR), mitigação de gargalos e riscos operacionais (*Bus Factor = 1*), criação de Business Intelligence estratégico e sustentação técnica contínua da rede corporativa Aerotech TV.
3. **Engenharia de Software & Performance Real (CTTLAB)**: Fundador da CTTLAB, desenvolvendo ecossistemas web de altíssimo desempenho (1.1s no 4G móvel), SEO técnico 100/100, arquitetura de servidores Apache e telemetria avançada de ponta a ponta (Meta Conversions API e GA4).

---

## 2. Regras Rígidas de Negócio & Curadoria de Cases

| Projeto / Tema | Status no Portfólio | Regra de Negócio & Linha de Pensamento |
| :--- | :--- | :--- |
| **Saúde Mater** | 🌟 **Destaque Principal (Case 1)** | Case comercial comprovado com domínio `.com.br`. Foco nas métricas de engenharia: 1.1s no 4G, 97/100 Lighthouse, Meta CAPI via PHP e servidor Apache com GZIP e cache imutável. Botão direciona para o site oficial [saudemater.com.br](https://saudemater.com.br). |
| **Radar Acadêmico** | 🎓 **Case SaaS & Comunidade (Case 2)** | Plataforma colaborativa universitária (CEFET-MG). Permite que mais de 1.200 estudantes avaliem disciplinas e professores antes da matrícula. Demonstração de modelagem de dados, arquitetura SaaS completa e interface dark neon de alto impacto. |
| **Além das Aparências (Alessandra Nogueira)** | 📄 **Case Editorial & Media Kit (Case 3)** | **REGRA CRÍTICA**: O site foi construído estritamente como *PDF-First* (backup editorial para apresentações e captação de palestras). **NUNCA** apontar para o deploy da Vercel como se fosse um site comum, pois ele não é responsivo no mobile. O botão deve **baixar / abrir diretamente o PDF oficial** em alta definição. Utiliza a capa oficial de alta resolução `AlemDasAparencias.png`. |
| **BrickStore** | 🧱 **Case E-commerce & Varejo (Case 4)** | E-commerce brasileiro de materiais de construção. Demonstração de catálogo de produtos, categorização intuitiva, carrinho dinâmico de compras, cálculo de entrega e interface comercial focada em conversão. Utiliza captura real limpa `BrickStore_clean.png`. |
| **Musique & Trilha Federal** | 📦 **Projetos Suporte / Reservas** | Mantidos nos repositórios para consultas técnicas de Web Audio e plataformas educacionais públicas, cedendo espaço na vitrine principal para a força de dados do Radar Acadêmico. |
| **GOL Linhas Aéreas / Aerotech TV** | 💼 **Seção Trajetória & Liderança** | Pelo caráter corporativo interno e confidencialidade de telas e dados de aviação, a atuação na GOL é apresentada em cartões de trajetória/experiência no Hero, destacando o valor gerado (BPR, BI, mitigação de riscos) sem expor interfaces proprietárias. |
| **Miller Car** | ⛔ **Oculto / Excluído de Fotos** | Embora haja trabalho de hardware/setup, Gabriel determinou que a mesa/cabeamento do local não atinge o padrão estético desejado para exibição visual. Não incluir fotos. |
| **euteamofernanda.vercel.app** | 🔒 **Estritamente Pessoal / Proibido** | Homenagem afetiva criada para a sua namorada Fernanda. É um projeto sagrado e íntimo que **jamais deve ser incluído em currículos ou portfólio profissional**. |
| **Número Secreto & Decodificador** | 🚫 **Descartados Definitivamente** | Projetos de tutorial introdutório (Alura) que enfraquecem a percepção de senioridade. Totalmente excluídos da vitrine para preservar o padrão Pleno/Sênior. |

---

## 3. Diretrizes Técnicas de Código & Arquitetura

1. **Autonomia Total do Desenvolvedor no Git (Regra de Ouro)**:
   - Assistentes de IA **NUNCA** devem executar `git commit`, `git push` ou comandos de sincronização remota sem ordem expressa.
   - Gabriel inspeciona, roda `npm run dev`, avalia visualmente e realiza os commits e deploys manualmente.
2. **Internacionalização Obrigatória (i18n)**:
   - Toda e qualquer alteração de texto deve ser refletida simultaneamente nos 3 arquivos de idioma: `src/Languages/pt.js`, `en.js` e `fr.js`.
   - O alternador de bandeiras alterna ciclicamente entre Português, Inglês e Francês.
3. **Temas Dark e Light**:
   - As variáveis em `src/App.css` mantêm paletas coesas. O tema escuro prioriza tons de ardósia espacial (`#0b0f19` e `#111827`) e o claro prioriza branco técnico (`#f8fafc`).
4. **Isolamento de Estilos via CSS Modules**:
   - Cada seção possui seu próprio arquivo `.module.css` para prevenir vazamento de regras globais.

---

## 4. Tom de Voz & Comunicação

- **Postura**: Engenheiro focado em valor, resolução de problemas reais de negócios e infraestrutura de alta confiabilidade.
- **Linguagem**: Sem afetações vazias ou "buzzwords" sem substância; uso de termos técnicos precisos (ex.: *latência de rede, TTFB, First Contentful Paint, Meta Conversions API, modelagem dimensional DAX, Business Process Reengineering*).
- **Equilíbrio**: Humilde em relação à jornada de aprendizado contínuo (reconhecendo o status de acadêmico do CEFET-MG), mas seguro quanto aos resultados práticos já entregues no mercado e na indústria.
