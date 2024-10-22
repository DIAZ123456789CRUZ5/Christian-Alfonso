//import logo from './logo.svg';
import './App.css';
import Otro from './otro';
import Formulariocss from './Formulariocss';
import Formularioboot from './componentes/Formularioboot';
import Gallery from './props';

function App() {
  return (
    <>
    <div className="row">
    <div className="col-4">
      <h1>Columnas a la izquierda</h1>
    </div>
    <div className="col-4">
      <h1>Centro</h1>
    </div>
    <div className="col-4">
      <h1>Derecha</h1>
    </div>
    </div>
    <div className="App">
      <h1>Hola</h1>
      <Otro />
      <Formulariocss />
      <div className="container-fluid p-3 ">
        <Formularioboot />
        <Gallery/>
      </div>
    </div>
    </>
  );
}

export default App;
