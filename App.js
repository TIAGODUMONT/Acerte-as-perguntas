import React, { useState } from "react";
import Radios from "./Form/Radios";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [respostas, setResposta] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  function handleChange({ target }) {
    setResposta({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta
    );
    setResultado(`Voce acertou: ${corretas.lenght} de ${perguntas.lengh}`)

   
  }
  

  function handleClick() {
    if(slide < perguntas.length -1) {
    setSlide(slide + 1 ); 

    }else {
      setSlide(slide + 1 ); 
      resultadoFinal()
    }
 
  }

  return (
    <div>
      <form onSubmit={(event)=> event.preventDefault()}>
        {perguntas.map((pergunta , index) => (
          <Radios
          active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultado && <p>{resultado}</p>}

        <button onClick={handleClick} >Próxima</button>
      </form>
    </div>
  );
}

export default App;
