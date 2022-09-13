import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import  Cart from './components/Cart'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="app">
        <CartProvider>
          <Container>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </Container>
        </CartProvider>
    </div>
  );
}

export default App;
