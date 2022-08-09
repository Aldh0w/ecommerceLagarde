import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item (props){
   
    return ( 
        <Card className="m-1 card" style={{ width: '14rem'}}>
        <Card.Img  className='card-image' variant="top" src={props.imagen}/>
        <Card.Body>
        <Card.Title className='h6'>{props.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.categoria} - Stock: {props.stock}</Card.Subtitle>
        <Card.Text className='card-text'>
            $ {props.precio}
        </Card.Text>
        <Link to={`/detail/${props.id}`}>
            <Button className='mb-1' variant="outline-info" size="sm">Ver detalles</Button>
        </Link>
        </Card.Body>
        </Card>
    );
}




