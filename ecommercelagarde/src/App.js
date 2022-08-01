import './App.css';
import Navbar from './components/Navbar';
import Cartwidget from './components/Cartwidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <div className="app">
        <div className='app-header'>
          <Cartwidget />
          <Navbar />
        </div>
        <div>
          <ItemListContainer mensaje="!Bienvenido!"/>
        </div>
        <div>
          <ItemCount stock={3} inicial={1}/>
        </div>
        
    </div>
  );
}

export default App;
