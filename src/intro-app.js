import logo from './logo.svg';
/* import './App.css';
 */

import './main.css'

//creo una arrow function y puedo pasarle atributos para que jugar con los estilos
//esta funcion puedo pasarsela a otros elementos
//puedo componer ambos objetos con sprend operator

//estilos con objetos
const estilo2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
}

//estilos con objetos con funciones (permite dinamismo en los valores). Podemos pasar argumentos como objetos, o mas de un argumento
const estilo = (bg = "#333") => ({
  backgroundColor: bg,
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",

})

const Li = ({ children }) => {
  return (
    <li className="clase-li">
      { children }
    </li>
  )
}

function App() {
  const valor = "triste"
  return (
    <ul  >
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
}

export default App;
