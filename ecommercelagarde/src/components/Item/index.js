import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount';
import Button from 'react-bootstrap/Button';


export default function Item (props){
    

    return ( 
        <Card className="tarjeta" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.categoria}</Card.Subtitle>
        <Card.Text>
            $ {props.precio}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Stock{props.stock}</Card.Subtitle>
        <Button className='mb-2' variant="primary">Ver detalles</Button>
        <ItemCount inicial={1} stock={props.stock}/>
        </Card.Body>
        </Card>
    );
}




