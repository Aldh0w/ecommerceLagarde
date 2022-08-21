import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import  Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="app">
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/'/>
            <Route path='/store' element={<ItemListContainer/>} />
            <Route path='store/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CartProvider>
    </div>
  );
}

export default App;
