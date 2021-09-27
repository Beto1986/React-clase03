import estilo from "../../theme/colors";
import "./App.css";
import UsuarioDesconocido from "./UsuarioDesconocido/UsuarioDesconocido";

const App = ({ nombre, unColor }) => {
  //return <h1>Hola {nombre}</h1>;
  // const estilo = { color: unColor, background: "black"};
  let saludo = <h1 style={estilo}>Hola {nombre}</h1>;
  //  let usuarioDesconocido = <h1 className="usuarioD">Usuario desconocido</h1>;
  // const UsuarioDesconocido = () => (
  //   <h1 className="usuarioD">Usuario desconocido</h1>
  // );

  //return nombre ? saludo : usuarioDesconocido;
  return nombre ? saludo : <UsuarioDesconocido />;
};

export default App;
