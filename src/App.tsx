import { useState, useRef } from "react"
import lupa from "./assets/lupa.png";
import microfone from "./assets/microfone.png";


interface LocationProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

function App() {

  const [location, setLocation] = useState<LocationProps | null>(null);
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null)

  const [resposta, setResposta] = useState<string>()

  const chave = import.meta.env.VITE_API_KEY;
  const chaveIA = import.meta.env.VITE_API_IA;

  const fetchData = async (city: string) => {

    if (!city || city.length < 3) {
      setError("Por favor, digite o nome de uma cidade!")
      setLocation(null)
      return;

    } else {
      setError("");

    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${chave}&units=metric&lang=pt_br`);

      const data = await response.json();
      setLocation(data)
      setResposta("")
      inputRef.current?.focus()
      setCity("")


    } catch (erro) {
      throw new Error("Erro ao obter os dados da API " + erro)

    }
  }

  const pedirSugestaoRoupa = async () => {

    const cidade = document.querySelector("#cidade")?.textContent
    const temperatura = document.querySelector("#temp")?.textContent
    const umidade = document.querySelector("#umidade")?.textContent

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + chaveIA
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-maverick-17b-128e-instruct",
          messages: [
            {
              "role": "user",
              "content": `Me dê uma sugestão de qual roupa usar hoje em ${cidade}, onde  a temperatura é de ${temperatura} e a umidade é de ${umidade}. Me dê sugestôes em 2 frases apenas.`
            }
          ]
        })


      })

      const dados = await response.json();
      const respostaIa = dados.choices[0].message.content

      setResposta(respostaIa)

    } catch (erro) {
      throw new Error("Falha ao fazer requisição!")
    }
  }

  const detectaVoz = () => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const reconhecimento = new SpeechRecognition()
    reconhecimento.lang = "pt_br"
    reconhecimento.start()

    reconhecimento.onresult = (event: any) => {
      const textoTranscrito = event.results[0][0].transcript

      setCity(textoTranscrito);
      fetchData(textoTranscrito);

    }
  }


  return (
    <div className="bg-[rgba(0,0,0,0.9)] w-112.5 p-5 rounded-[20px] ">

      <input type="text" placeholder="Digite o nome da cidade..." className="border-none outline-none p-2.5 text-[20px] rounded-[10px] bg-[#7c7c7c2b] text-white w-[calc(100%-100px)]" value={city} onChange={(e) => setCity(e.target.value)} ref={inputRef} />

      <button className="p-2.5 border-none bg-[#7c7c7c2b] rounded-full ml-3 mt-2.5 float-right cursor-pointer flex justify-center items-center transition duration-400 hover:bg-[#7c7c7c] scale-[1.2] active:scale-[1] w-8 h-8" onClick={() => fetchData(city)} >
        <img src={lupa} alt="buscar" className="brightness-0 invert" />
      </button>

      <button className="p-2.5 border-none bg-[#7c7c7c2b] rounded-full ml-2.5 mt-2.5 float-right cursor-pointer flex justify-center items-center transition duration-400 hover:bg-[#7c7c7c] scale-[1.2] active:scale-[1] w-8 h-8" onClick={detectaVoz} >
        <img src={microfone} alt="microfone" className="brightness-0 invert" />
      </button>

      {error ? <p className="text-red-500">{error}</p> : location && (
        <div className="mt-8">
          <h2 className="text-4xl text-white" id="cidade">{location.name}</h2>
          <p className="text-4xl font-bold text-white mt-5" id="temp">{Math.floor(location.main.temp)} ℃</p>
          <img className="w-20" src={`https://openweathermap.org/img/wn/${location.weather[0].icon}.png`} alt="icone do clima" />
          <p className="text-white text-2xl" id="umidade">umidade: {location.main.humidity}%</p>

          <button className="rounded-[10px] w-full mt-5 py-3 px-5 text-[16px] text-white bg-blue-600 border-none cursor-pointer transition duration-500 hover:scale-[1.01] active:scale-[1] opacity-80 " onClick={pedirSugestaoRoupa}>Sugestão de roupa</button>



          {resposta && (
            <p className="text-white mt-4 text-[14px] leading-normal">
              {resposta}
            </p>)
          }

        </div>
      )}








    </div>
  )

}

export default App
