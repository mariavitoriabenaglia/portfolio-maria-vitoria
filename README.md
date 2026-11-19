# Portfólio — Maria Vitoria Benaglia

Portfólio de uma empreendedora e profissional independente que oferece acompanhamento personalizado para pessoas e pequenos negócios e desenvolvimento de sites por projeto.

## Tecnologia e estrutura

O site mantém HTML5 e CSS3, com JavaScript puro para melhoria progressiva da navegação. Não utiliza framework nem bibliotecas em produção.

- `index.html`: conteúdo semântico, metadados e dados estruturados.
- `style.css`: tokens de identidade, componentes e regras mobile-first.
- `script.js`: menu mobile, seção ativa e entradas suaves opcionais.
- `components/WhatsAppFloatingButton.js`: Web Component reutilizável do contato flutuante.
- `images/`: fotografia e screenshots reais, com originais preservados.
- `fonts/`: DM Sans variável e Playfair Display itálica hospedadas localmente, com suas licenças OFL. Os arquivos da fonte anterior foram preservados.
- `scripts/build.mjs`: validação e geração do site estático em `dist/`.
- `data/web-offers.json`: escopos compartilhados e valores das ofertas por mercado.
- `vercel.json`: build e diretório de publicação na Vercel.

## Executar o build

Requer Node.js 24, a mesma versão configurada na Vercel. Não há dependências para instalar.

```sh
npm run build
```

O build verifica a sintaxe do JavaScript, IDs duplicados, referências locais, âncoras, dados estruturados, a proteção de links externos e a correspondência dos preços publicados com a configuração. Em seguida, copia os arquivos públicos para `dist/`.

Para uma consulta rápida, abra `index.html` no navegador. Para revisar o build com carregamento de fontes e comportamento equivalente à publicação, sirva `dist/` por um servidor HTTP estático.

## Direção de UI/UX

O CSS de referência foi adaptado às classes reais do site em `style.css`, mantendo uma única definição de tokens e uma base global. A implementação permanece em HTML, CSS e JavaScript puro.

- Azul-marinho `#0D192B` no fundo, superfícies `#11223A` e `#152943`, azul royal `#326BFA` nas ações e azul claro `#8FB5FF` nos detalhes.
- DM Sans na interface; Playfair Display itálica nos destaques editoriais do Hero, do Sobre e do Contato.
- Container fluido com limite de 1680 px e margens adaptáveis de 20 a 64 px: amplo em telas comuns e controlado em monitores maiores.
- Escala única de tipografia, espaçamento, bordas e transições. Sem importar o CSS de referência como uma segunda camada global.
- Hero com retrato real, recorte em arco e hierarquia editorial, em escala menor que a referência para preservar o equilíbrio da página.
- Serviços com composições distintas, palavras-chave e atividades completas em detalhes expansíveis; fluxo financeiro conectado com limites do serviço sempre visíveis.
- Contratação em timeline de cinco etapas: horizontal no desktop e vertical nas telas menores, seguida pelos três combinados de comunicação, reuniões e acompanhamento.
- Pacotes em superfícies azul-marinho com profundidade e brilho discreto; Profissional destacado com o selo solicitado “Mais escolhido”, sem alteração de preço ou escopo.
- Rodapé compacto em duas linhas no desktop e empilhado no mobile; contato flutuante com espaço reservado no final da página.
- Sobre com superfície suave e citação tipográfica; projetos administrativos em dupla, Capacita Manaus em destaque e Studio Dona Bella em composição reversa aberta.
- Screenshots completos e ampliáveis, sem o corte `object-fit: cover` sugerido na referência para esses projetos.
- Contato com gradiente azul discreto e links diretos, sem repetir os cards das demais seções.
- Menu mobile e lógica de navegação existentes preservados. Nenhuma animação adicional de rolagem.

### Correspondência com os componentes existentes

| Área da referência | Classes utilizadas no projeto                                  |
| ------------------ | -------------------------------------------------------------- |
| Header             | `.cabecalho`, `.header-inner`, `.navegacao-principal`          |
| Hero               | `.hero-conteudo`, `.hero-texto`, `.hero-visual`, `.hero-photo` |
| Serviços           | `.servico`, `.servico-principal`, `.service-finance`           |
| Sobre              | `.about-grid`, `.about-story`, `.about-intro blockquote`       |
| Projetos           | `.projeto`, `.project-wide`, `.project-reverse`                |
| Contato            | `.contato`, `.contact-grid`, `.contact-channels`               |

## Projetos

1. Painel Comercial.
2. Gestão de Alunos e Pagamentos.
3. Capacita Manaus — Site Institucional: https://capacita-manaus.vercel.app/
4. Studio Dona Bella — Site-vitrine: https://studio-dona-bella.vercel.app/

Os quatro projetos são reais, desenvolvidos individualmente pela autora, com participação nas decisões junto aos clientes. Imagens, descrições, funcionalidades e tecnologias foram preservadas na revisão de posicionamento. Não foram acrescentadas métricas de resultado ou qualificações não confirmadas.

## Posicionamento e contratação

- Acompanhamento contínuo com três áreas: assistência pessoal e virtual; organização administrativa e processos; organização financeira administrativa.
- A proposta considera necessidades, prioridades, orçamento e escopo, sem planos mensais padronizados.
- O apoio financeiro utiliza extratos e documentos fornecidos pelo cliente em um aplicativo sem conexão bancária. Não inclui acesso às contas, solicitação de senhas, movimentações financeiras, contabilidade, consultoria de investimentos ou gestão de patrimônio.
- Sites com preços promocionais de lançamento para o Brasil: Essencial R$ 90, Profissional R$ 250 e Premium R$ 600, com limites próprios de páginas, seções e ajustes.
- Domínio e hospedagem pagos são separados. A configuração do domínio está no Premium; compra e renovação não estão incluídas.
- A seção Como funciona reúne as cinco etapas da contratação e os combinados de comunicação, reuniões, documentos e relatórios. O briefing gratuito é destinado a potenciais clientes com demanda alinhada e intenção de contratar.
- A essência da comunicação é “O bom e belo básico, bem feito.”

### Oferta internacional preparada

Em `data/web-offers.json`, o mercado US está marcado como não publicado: Essential US$ 70, Professional US$ 100 e Premium US$ 300. Os dois mercados referenciam os mesmos escopos, sem tradução automática. O site em português mostra apenas reais.

O arquivo de configuração não é copiado para `dist/`. Para alterar uma oferta brasileira, mantenha o card em `index.html` e os valores da configuração correspondentes; o build rejeita divergências de valor ou moeda. Uma futura versão em inglês poderá utilizar os dados internacionais com os mesmos limites de escopo.

## Acessibilidade e desempenho

- Link para pular ao conteúdo, foco visível, navegação por teclado e estado da seção ativa.
- Menu mobile com `aria-expanded`, fechamento por Escape, seleção e clique externo.
- Navegação, detalhes dos serviços e projetos e link flutuante utilizáveis sem JavaScript.
- Preferência `prefers-reduced-motion` respeitada; conteúdo revelado imediatamente quando recebe foco pelo teclado.
- Imagens com dimensões explícitas e textos alternativos; carregamento lazy nos projetos.
- Screenshots em WebP para exibição, com PNG como alternativa e acesso aos originais. Os quatro arquivos de exibição passaram de 8.488.324 para 552.872 bytes, redução de 93,5%.
- Fontes e ícones locais, sem requisições a bibliotecas ou serviços de fontes.

## Verificação da reformulação — 19/11/2026

Build executado com sucesso. Verificação de navegador em Edge/Chromium nas larguras 320, 390, 640, 768, 1024, 1060, 1280, 1440, 1920 e 2560 px, incluindo menu por teclado, seção ativa, imagens WebP, detalhes expansíveis e destinos do WhatsApp.

Auditoria axe-core nas regras WCAG 2 A/AA e 2.1 A/AA em 390 e 1440 px: nenhuma violação automatizada detectada após as correções. Essa auditoria complementa a revisão visual e por teclado; não equivale a uma certificação de acessibilidade.

Experiência sem JavaScript e preferência por redução de movimento também verificadas.

Na atualização visual escura, a largura fluida e o contraste foram verificados nas mesmas dez larguras, preservando textos, preços e dados dos projetos. A indicação da seção ativa foi ajustada para funcionar também quando a seção de contato compacta fica próxima ao final da página.

No refinamento de copy, também foram verificados os três preços brasileiros, os valores internacionais não publicados, os escopos e mensagens dos botões de contratação, o fluxo em cinco etapas e a preservação das informações dos quatro projetos.

Os sites Capacita Manaus e Studio Dona Bella e os perfis GitHub e Instagram responderam com HTTP 200. O LinkedIn retornou HTTP 999 para a consulta automatizada; seu endereço original foi preservado.

Na adaptação do design system, foram confirmados o carregamento das duas fontes locais, um único bloco `:root` e a ausência de `@import`. A comparação com a versão anterior confirmou a preservação dos textos, dos 40 links e das imagens, além dos escopos e preços.

## Refinamento de serviços, contratação, pacotes e rodapé

- `index.html`: serviços com ícones e detalhes expansíveis, fluxo financeiro e transparência, timeline, destaque do pacote Profissional, rodapé e link flutuante.
- `style.css`: estilos dessas áreas nos blocos existentes, com breakpoints, foco e redução de movimento.
- `components/WhatsAppFloatingButton.js`: classe `WhatsAppFloatingButton`, registrada como `<whatsapp-floating-button>`. Os atributos opcionais `href` e `label` permitem reutilização; sem `href`, utiliza o contato já cadastrado no cabeçalho. O HTML existente mantém o link disponível sem JavaScript.
- `images/whatsapp.svg`: símbolo oficial preto, preservado sem alterações, obtido no pacote de [recursos da marca WhatsApp da Meta](https://www.meta.com/brand/resources/whatsapp/whatsapp-brand/), arquivo `Digital_Glyph_Black_RGB_2026.svg`.
- `scripts/build.mjs`: validação e cópia do componente para `dist/`.
- `README.md`: documentação e verificações.

Foram preservados os 40 links existentes, os dados dos quatro projetos e todos os preços e escopos. Foi acrescentado apenas o link flutuante, que abre o contato cadastrado em nova aba. As atividades completas dos serviços permanecem disponíveis em “Ver atividades”; os limites do apoio financeiro estão visíveis sem expansão.

O botão usa o verde da marca, foco visível e rótulo acessível. Mostra “Vamos conversar” no desktop e apenas o símbolo no mobile. Não envia mensagens automaticamente.

Verificação nas dez larguras indicadas acima: ausência de rolagem horizontal, menu por teclado, detalhes expansíveis, timeline responsiva, carregamento do símbolo e botão fixo sem sobrepor o link de retorno ao topo. Auditoria axe-core sem violações nas regras verificadas em 390 e 1440 px. Build e validação do HTML concluídos com sucesso.

## Publicação

- Vercel: https://portfolio-maria-vitoria.vercel.app/
- GitHub Pages: https://mariavitoriabenaglia.github.io/portfolio-maria-vitoria/
- Repositório: https://github.com/mariavitoriabenaglia/portfolio-maria-vitoria

A Vercel executa `npm run build` e publica `dist/`. O GitHub Pages pode continuar servindo os arquivos estáticos da raiz na branch `main`.

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio no planejamento, na estruturação do conteúdo, no desenvolvimento, na reformulação de UI/UX e nas verificações técnicas. Informações pessoais, serviços e projetos foram preservados a partir dos dados fornecidos pela autora.
