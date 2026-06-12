## Sistema-Integrado-de-Precifica-o-e-Pipeline-ETL-para-E-commerce
Desenvolvimento de um sistema automatizado para simulação de preços, proteção de margem de lucro e estruturação de dados logísticos em múltiplos canais de venda (Mercado Livre, Amazon e Shein). O projeto integra conceitos de engenharia de dados, modelagem financeira e automação de processos para a tomada de decisão gerencial.

## O Problema de Negócio
A precificação multicanal no varejo digital sofre com a falta de padronização nas matrizes de frete das diferentes plataformas e com regras de comissionamento dinâmicas. O escopo principal deste projeto consistiu em eliminar a imprecisão no cálculo do divisor de markup, mapear e isolar falsos custos (como subsídios de pagamento) e automatizar o tratamento de tabelas logísticas desestruturadas para assegurar previsibilidade de lucro líquido e escalabilidade operacional.

## Arquitetura e Solução Técnica
A solução foi arquitetada baseada no conceito de separação de camadas, dividindo o sistema em processamento de dados, motor de regras e automação de registros.

1. Processamento e Pipeline ETL (Data Engineering)
Extração e Transformação: Construção de um pipeline interno utilizando funções matriciais avançadas (ARRAYFORMULA, SPLIT, FLATTEN).
Unpivot de Matrizes: Desenvolvimento de uma lógica de achatamento para matrizes logísticas complexas e bidimensionais (envolvendo variáveis de peso, dimensão regional e reputação de conta).
Carga Estruturada: Transformação dos dados brutos em um modelo relacional padronizado de sete colunas, unificando as documentações dispersas das plataformas em um banco de dados centralizado e apto para consultas.

2. Motor de Cálculo e Interface (Front-End)
Parametrização de Variáveis: Módulo de configuração global que isola indicadores macroeconômicos (carga tributária, custos operacionais e lucro alvo), prevenindo corrupção no motor de cálculo.
Auditoria de Regras de Negócio: Modelagem matemática rigorosa do divisor de markup. Foi aplicada uma correção na lógica padrão de mercado para desconsiderar subsídios de atração bancados pela plataforma (ex: Subsídio Pix), impedindo a inflação irreal do preço de venda e garantindo competitividade ao produto.

3. Automação e Armazenamento (Back-End)
Desenvolvimento de Script: Implementação de um módulo de automação utilizando Google Apps Script (JavaScript).
Governança e Persistência de Dados: O script executa rotinas de validação de integridade dos inputs do usuário e realiza a extração e carga contínua (append) dos resultados validados em um banco de dados histórico. Este repositório tabular atua como fonte de verdade para futuras modelagens preditivas e auditorias financeiras.

## Tecnologias e Competências Utilizadas
Processamento ETL (Extração, Transformação e Carga)
Google Apps Script (JavaScript)
Modelagem de Dados Relacional
Análise de Documentação e Regras de Negócio
Lógica Condicional e Validação de Dados

## Estrutura do Repositório
/src: Contém o código-fonte em JavaScript (codigo_automacao.gs) desenvolvido para atuar no back-end da aplicação. 
/docs: Diretório reservado para diagramas de arquitetura e capturas de tela demonstrando o fluxo do ETL, a interface limpa do front-end e o banco de dados final.
README.md: Documentação técnica central do projeto.

## Acesso ao Projeto
O ambiente de produção foi desenvolvido sobre a infraestrutura do Google Workspace.
[https://docs.google.com/spreadsheets/d/1OdpQMCr-UZferYtuud5EPWKJszdYhtTehKEGcZ7ztaY/edit?usp=sharing]
