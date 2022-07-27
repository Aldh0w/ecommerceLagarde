import './App.css';
import Navbar from './components/Navbar';
import Cartwidget from './components/Cartwidget';
import ItemListContainer from './components/ItemListContainer';
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
        
    </div>
  );
}

export default App;
