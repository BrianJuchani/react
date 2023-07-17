
import './App.css';
import IntemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import "bulma/css/bulma.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <IntemListContainer greeting={'Bienvenido'}/>

    </div>
  );
}

export default App;
