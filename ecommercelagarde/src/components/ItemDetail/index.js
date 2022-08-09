import ItemCount from "../ItemCount"
import Card from 'react-bootstrap/Card';


export default function ItemDetail(props){

     return(
         <>
        <Card className="m-1 card" style={{ width: '18rem'}}>
        <Card.Img  className='card-image' variant="top" src={props.imagen}/>
        <Card.Body>
        <Card.Title >{props.titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.categoria} - Stock: {props.stock}</Card.Subtitle>
        <Card.Text className='card-text'>
            $ {props.precio}  {props.descripcion}
        </Card.Text>
        <ItemCount inicial={1} stock={props.stock}/>
        </Card.Body>
        </Card>
    </>
     )
};