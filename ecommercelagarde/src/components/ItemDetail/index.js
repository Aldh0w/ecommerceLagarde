import	{useState} from 'react';
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ItemDetail.css';



export default function ItemDetail(props){
    const [controlador, setControlador] = useState(false);
    const {addProduct} = useCartContext();
    
    const itemAgregado = (cantidad) =>{ 
        window.alert('Se agregaron '+cantidad+' producots al carrito');
        setControlador(true)
        addProduct(props,cantidad)
    }


     return(
         <div className="tarjeta">
            <Card style={{ width: '20rem'}}>
            <Card.Title >{props.titulo}</Card.Title>
            <Card.Img  className='card-image' variant="top" src={props.imagen}/>
            <Card.Body>
            <Card.Text className='tarjeta-text'>
                {props.descripcion}
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='tarjeta-text'>  $ {props.precio}</ListGroup.Item>
                <ListGroup.Item className="mb-2 text-muted">Stock: {props.stock}</ListGroup.Item>
                <ListGroup.Item>{
                                controlador ?   (<ButtonGroup vertical>
                                                    <Link to='/cart'><Button className='mt-2 ms-4 centrado' variant="primary" size='sm'>Ir al carrito</Button></Link>
                                                    <Link to='/store'><Button className='mt-2 centrado' variant="primary" size='sm'>Seguir Comprando</Button></Link>
                                                </ButtonGroup>): 
                                                (<ItemCount inicial={1} stock={props.stock} agregarCarrito={itemAgregado}/>)}
                </ListGroup.Item>
                
            </ListGroup>
            </Card>
        </div>
     )
};