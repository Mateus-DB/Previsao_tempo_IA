🌤️ Previsão-IA

Previsão-IA é uma aplicação web que combina dados climáticos em tempo real com Inteligência Artificial para entregar não apenas a previsão do tempo, mas também uma sugestão inteligente de vestuário baseada nas condições climáticas.

O usuário pode pesquisar por texto ou utilizar pesquisa por voz, tornando a experiência mais moderna e acessível.

🚀 Demonstração

🔗 Deploy: https://previsao-tempo-ia.vercel.app/
🔗 Repositório: https://github.com/Mateus-DB/Previsao_tempo_IA

✨ Funcionalidades

🌎 Busca por cidade, estado ou país de qualquer lugar do mundo
🎤 Pesquisa por voz
🌡️ Exibição da temperatura atual
💧 Exibição da umidade do ar
🤖 Sugestão de roupa baseada na previsão do tempo (IA)
⚡ Interface simples, rápida e responsiva

🧠 Como Funciona

O usuário digita ou fala o nome da localização desejada

A aplicação consome a API do OpenWeather para obter:

Temperatura

Umidade

Após a exibição dos dados climáticos, o usuário pode clicar em "Sugestão de Roupa"

A aplicação consome a API da Groq (IA), que analisa os dados da previsão e gera uma recomendação personalizada de vestuário

🛠️ Tecnologias Utilizadas
Tecnologia	Função
React	Construção da interface e componentização
TypeScript	Tipagem estática e maior segurança no desenvolvimento
Tailwind CSS	Estilização moderna e responsiva
OpenWeather API	Dados climáticos
Groq API	Geração de sugestão inteligente
🔌 APIs Utilizadas

🌦️ OpenWeather — Para obter dados meteorológicos em tempo real

🤖 Groq — Para gerar sugestões inteligentes com base na previsão

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Praticar consumo de APIs

Trabalhar com integração entre múltiplas APIs

Implementar reconhecimento de voz

Aplicar lógica condicional baseada em dados externos

Explorar uso prático de IA em aplicações web

▶️ Como Executar Localmente
# Clone o repositório
git clone https://github.com/seu-usuario/previsao-ia.git

# Acesse a pasta
cd previsao-ia

# Instale as dependências
npm install

# Execute o projeto
npm run dev

⚠️ É necessário configurar suas chaves de API do OpenWeather e da Groq.

💡 Diferencial do Projeto

A combinação de dados climáticos em tempo real + Inteligência Artificial para recomendação personalizada transforma uma simples aplicação de clima em uma experiência mais inteligente e interativa.
