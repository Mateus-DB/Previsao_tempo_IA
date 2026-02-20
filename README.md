🌤️ Previsão-IA

Aplicação web que combina dados climáticos em tempo real com Inteligência Artificial para entregar não apenas a previsão do tempo, mas também uma sugestão inteligente de vestuário baseada nas condições atuais.

A aplicação permite busca por texto ou por comando de voz, tornando a experiência moderna, acessível e interativa.

🚀 Demonstração

🔗 Deploy: https://previsao-tempo-ia.vercel.app/
🔗 Repositório: https://github.com/Mateus-DB/Previsao_tempo_IA

✨ Principais Funcionalidades

🌎 Busca por cidade, estado ou país (qualquer lugar do mundo)

🎤 Pesquisa por voz integrada

🌡️ Exibição da temperatura atual

💧 Exibição da umidade do ar

🤖 Geração de sugestão de roupa com IA

⚡ Interface responsiva e moderna

🧠 Fluxo da Aplicação

O usuário digita ou utiliza a pesquisa por voz para informar a localização.

A aplicação consome a API do OpenWeather para obter:

Temperatura atual

Umidade do ar

Os dados são exibidos na interface.

O usuário pode clicar em "Sugestão de Roupa".

A aplicação consome a API da Groq, que gera uma recomendação personalizada com base nos dados climáticos.

🛠️ Tecnologias Utilizadas

Front-end

React — Construção da interface e componentização

TypeScript — Tipagem estática e maior segurança no desenvolvimento

Tailwind CSS — Estilização moderna e responsiva

Integrações

OpenWeather API — Dados meteorológicos em tempo real

Groq API — Geração de sugestão inteligente via IA

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Praticar consumo de APIs externas

Integrar múltiplas APIs na mesma aplicação

Trabalhar com tipagem usando TypeScript

Implementar reconhecimento de voz no navegador

Explorar uso prático de Inteligência Artificial em aplicações web

⚙️ Como Executar o Projeto Localmente
# Clone o repositório
git clone https://github.com/seu-usuario/previsao-ia.git

# Acesse o diretório
cd previsao-ia

# Instale as dependências
npm install

# Execute o projeto
npm run dev

⚠️ É necessário configurar suas variáveis de ambiente com as chaves das APIs (OpenWeather e Groq).

🔐 Configuração das APIs

Crie um arquivo .env na raiz do projeto e adicione suas chaves:

VITE_OPENWEATHER_KEY=sua_chave_aqui
VITE_GROQ_KEY=sua_chave_aqui


💡 Diferencial do Projeto

O grande diferencial do Previsão-IA é a combinação de:

✔️ Dados climáticos em tempo real
✔️ Integração com Inteligência Artificial
✔️ Sugestão personalizada baseada em contexto
✔️ Experiência com busca por voz

Transformando uma simples aplicação de clima em uma experiência inteligente e interativa.
