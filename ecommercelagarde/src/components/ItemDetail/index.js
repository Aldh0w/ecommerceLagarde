import ItemCount from "../ItemCount"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ItemDetail.css';

export default function ItemDetail(props){

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
                <ListGroup.Item><ItemCount inicial={1} stock={props.stock}/></ListGroup.Item>
            </ListGroup>
            </Card>
        </div>
     )
};