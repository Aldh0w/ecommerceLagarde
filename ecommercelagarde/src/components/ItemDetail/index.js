import	{useState,} from 'react';
import ItemCount from "../ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

export default function ItemDetail(props){
    const [controlador, setControlador] = useState(false);

    const itemAgregado = () =>{ 
        setControlador(true)
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
                                controlador ?   (<Link to='/cart'><Button className='mt-2 centrado' variant="primary" size='sm'>Ir al carrito</Button></Link>): 
                                                (<ItemCount inicial={1} stock={props.stock} agregarCarrito={itemAgregado}/>)}
                </ListGroup.Item>
                
            </ListGroup>
            </Card>
        </div>
     )
};