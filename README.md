# Portfólio — Maria Vitória Benaglia

Portfólio de uma empreendedora e profissional independente que oferece acompanhamento personalizado para pessoas e pequenos negócios e desenvolvimento de sites por projeto.

## Tecnologia e estrutura

O site mantém HTML5 e CSS3, com JavaScript puro para melhoria progressiva da navegação. Não utiliza framework nem bibliotecas em produção.

- `index.html`: conteúdo semântico, metadados e dados estruturados.
- `style.css`: tokens de identidade, componentes e regras mobile-first.
- `script.js`: menu mobile, seção ativa e entradas suaves opcionais.
- `images/`: fotografia e screenshots reais, com originais preservados.
- `fonts/`: Manrope variável hospedada localmente, com licença OFL.
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

- Fundo azul-acinzentado escuro `#142132`, textos claros suaves e azul royal `#2563EB` para ações.
- Largura fluida, com margens adaptáveis de 18 a 48 px. A página não utiliza mais um container central com largura máxima fixa.
- Serviços, ofertas e projetos em áreas abertas, com divisórias discretas em vez de grandes caixas. Títulos, imagens e espaçamentos foram reduzidos.
- Manrope para clareza de interface e serifas pontuais para dar personalidade à apresentação.
- Fotografia real no Hero, em vez de painéis decorativos.
- Acompanhamento contínuo e personalizado em destaque; desenvolvimento web como contratação por projeto.
- Projetos em composição compacta com imagens completas ao lado das descrições; em telas pequenas os elementos se reorganizam. As capturas originais podem ser ampliadas.
- Detalhes nativos expansíveis mantêm as funcionalidades e a participação no projeto disponíveis sem sobrecarregar a leitura inicial.
- Contato com uma ação principal no WhatsApp e canais secundários identificados.

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
- Navegação e detalhes dos projetos utilizáveis sem JavaScript.
- Preferência `prefers-reduced-motion` respeitada; conteúdo revelado imediatamente quando recebe foco pelo teclado.
- Imagens com dimensões explícitas e textos alternativos; carregamento lazy nos projetos.
- Screenshots em WebP para exibição, com PNG como alternativa e acesso aos originais. Os quatro arquivos de exibição passaram de 8.488.324 para 552.872 bytes, redução de 93,5%.
- Fontes e ícones locais, sem requisições a bibliotecas ou serviços de fontes.

## Verificação da reformulação — 19/11/2026

Build executado com sucesso. Verificação de navegador em Edge/Chromium nas larguras 320, 390, 640, 768, 1024, 1060, 1280, 1440 e 1920 px, incluindo menu por teclado, seção ativa, imagens WebP, detalhes expansíveis e destinos do WhatsApp.

Auditoria axe-core nas regras WCAG 2 A/AA e 2.1 A/AA em 390 e 1440 px: nenhuma violação automatizada detectada após as correções. Essa auditoria complementa a revisão visual e por teclado; não equivale a uma certificação de acessibilidade.

Experiência sem JavaScript e preferência por redução de movimento também verificadas.

Na atualização visual escura, a largura fluida e o contraste foram verificados nas mesmas nove larguras, preservando textos, preços e dados dos projetos. A indicação da seção ativa foi ajustada para funcionar também quando a seção de contato compacta fica próxima ao final da página.

No refinamento de copy, também foram verificados os três preços brasileiros, os valores internacionais não publicados, os escopos e mensagens dos botões de contratação, o fluxo em cinco etapas e a preservação das informações dos quatro projetos.

Os sites Capacita Manaus e Studio Dona Bella e os perfis GitHub e Instagram responderam com HTTP 200. O LinkedIn retornou HTTP 999 para a consulta automatizada; seu endereço original foi preservado.

## Publicação

- Vercel: https://portfolio-maria-vitoria.vercel.app/
- GitHub Pages: https://mariavitoriabenaglia.github.io/portfolio-maria-vitoria/
- Repositório: https://github.com/mariavitoriabenaglia/portfolio-maria-vitoria

A Vercel executa `npm run build` e publica `dist/`. O GitHub Pages pode continuar servindo os arquivos estáticos da raiz na branch `main`.

## Uso de inteligência artificial

A inteligência artificial foi utilizada como apoio no planejamento, na estruturação do conteúdo, no desenvolvimento, na reformulação de UI/UX e nas verificações técnicas. Informações pessoais, serviços e projetos foram preservados a partir dos dados fornecidos pela autora.
