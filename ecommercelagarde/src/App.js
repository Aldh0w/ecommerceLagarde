import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="app">

        <Navbar />

        <Routes>
          <Route path='/'/>
          <Route path='/store' element={<ItemListContainer/>} />
          <Route path='store/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
        
    </div>
  );
}

export default App;
