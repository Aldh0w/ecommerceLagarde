import Navbar from './components/Navbar';
import Cartwidget from './components/Cartwidget';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app">
        <div className='app-header'>
          <Cartwidget />
          <Navbar />
        </div>
        <div>
          <ItemListContainer/>
        </div>
        
    </div>
  );
}

export default App;
