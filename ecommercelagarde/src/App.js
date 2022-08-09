import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cartwidget from './components/Cartwidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="app">
        <div className='app-header'>
          <Cartwidget />
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
        </Routes>
        
    </div>
  );
}

export default App;
