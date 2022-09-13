import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbars() {
  const {totalProducts} = useCartContext();
  return (
    <div className='nav'>
      <div>
        <Navbar.Brand as={Link} to='/'><img style={{ height: '80px' }} src='https://img.freepik.com/vector-gratis/hoja-cannabis-unica-color-verde_1308-109514.jpg?w=740&t=st=1659308465~exp=1659309065~hmac=98c289dac64a65f631c6e258ba9635c48250148b6ef11d982de96b758de6beb0' alt='LOGO'/></Navbar.Brand>
      </div>
      <div>
        <Navbar bg="ligth" expand="lg">
          <Container fluid className='justify-content-md-center'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/' >4:20 GROW</Nav.Link>
                <Nav.Link as={Link} to='/'>TIENDA</Nav.Link>
                <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to='/category/CARPAS' >CARPAS DE CULTIVO</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/category/FERTILIZANTES' >FERTILIZANTES</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/category/SUSTRATOS' >SUSTRATOS</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='cart'>
        { (totalProducts() === 0) ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>:
                                     <Link to='/cart' className='carrito'>
                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path></svg>
                                      <span>{totalProducts() || ''}</span>
                                     </Link>
        }
      </div>
    </div>
  );
}

export default Navbars;


