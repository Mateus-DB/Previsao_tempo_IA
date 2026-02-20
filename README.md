🌤️ PREVISÃO-IA

🔷 Aplicação de Clima com Inteligência Artificial

O Previsão-IA é uma aplicação web que une dados meteorológicos em tempo real com Inteligência Artificial, entregando não apenas temperatura e umidade, mas também uma sugestão inteligente de vestuário baseada nas condições climáticas da região pesquisada.

A aplicação permite busca por texto ou pesquisa por voz, tornando a experiência moderna e interativa.

🚀 DEMONSTRAÇÃO

🔗 Deploy: https://previsao-tempo-ia.vercel.app/

🔗 Repositório: https://github.com/Mateus-DB/Previsao_tempo_IA

✨ FUNCIONALIDADES
🌎 Busca Global

O usuário pode pesquisar qualquer cidade, estado ou país do mundo.

🎤 Pesquisa por Voz

Integração com reconhecimento de voz do navegador para facilitar a busca.

🌡️ Dados Climáticos em Tempo Real

Exibição de:

Temperatura atual

Umidade do ar

🤖 Sugestão Inteligente de Roupa

Após receber os dados climáticos, o usuário pode clicar em “Sugestão de Roupa” e receber uma recomendação personalizada gerada por IA.

⚡ Interface Moderna

Layout responsivo, estilizado com Tailwind CSS.

🧠 COMO FUNCIONA
1️⃣ Busca da Localização

O usuário informa a localização digitando ou utilizando comando de voz.

2️⃣ Consumo da API Climática

A aplicação consome a API do OpenWeather para obter:

Temperatura

Umidade

3️⃣ Geração de Sugestão com IA

Ao clicar no botão de sugestão:

Os dados climáticos são enviados para a API da Groq

A IA gera uma recomendação de vestuário personalizada



🛠️ TECNOLOGIAS UTILIZADAS

🎨 Front-end

React — Componentização e estrutura da aplicação

TypeScript — Tipagem estática e maior robustez

Tailwind CSS — Estilização moderna e responsiva


🔌 Integrações

OpenWeather API — Dados meteorológicos

Groq API — Geração de resposta inteligente com IA


🎯 OBJETIVO DO PROJETO

Este projeto foi desenvolvido para:

Praticar consumo de APIs externas

Integrar múltiplas APIs em uma única aplicação

Aplicar TypeScript em projeto real

Trabalhar com reconhecimento de voz

Explorar uso prático de Inteligência Artificial no front-end

⚙️ EXECUÇÃO LOCAL
# Clone o repositório
git clone https://github.com/seu-usuario/previsao-ia.git

# Acesse a pasta
cd previsao-ia

# Instale as dependências
npm install

# Execute o projeto
npm run dev
🔐 CONFIGURAÇÃO DAS VARIÁVEIS DE AMBIENTE

Crie um arquivo .env na raiz do projeto:

VITE_OPENWEATHER_KEY=sua_chave_aqui
VITE_GROQ_KEY=sua_chave_aqui


💡 DIFERENCIAL

✔️ Integração entre clima em tempo real + IA
✔️ Busca por voz
✔️ Sugestão contextual baseada em dados reais
✔️ Aplicação prática de TypeScript
