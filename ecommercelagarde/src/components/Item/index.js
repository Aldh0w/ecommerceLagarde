import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item (props){
   
    return ( 
        <Card className="m-2  tarjt" style={{ width: '14rem', height:'23rem'}}>
                <Link to={`/detail/${props.id}`} className='Link'>
                <Card.Img  className='tarjt-image' variant="top" src={props.imagen}/>
                <Card.Body>
                <Card.Title className='h6'>{props.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.categoria}</Card.Subtitle>
                <Card.Text className='tarjt-text'>
                    $ {props.precio}
                </Card.Text>
                    <Button className='mb-1' variant="outline-info" size="sm">Ver detalles</Button>
                </Card.Body>
                </Link>
        </Card>
    );
}




