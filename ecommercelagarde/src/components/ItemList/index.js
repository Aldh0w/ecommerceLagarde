import Item from '../Item';
import Col from 'react-bootstrap/Col';


export default function ItemList (props){
    return(
            <>
                {
                    props.producto.map(prod=><Col key={prod.id}> 
                                                    <Item    
                                                    id={prod.id}
                                                    imagen={prod.imagen} 
                                                    stock={prod.stock} 
                                                    precio={prod.precio} 
                                                    titulo={prod.titulo} 
                                                    categoria={prod.categoria} />
                                                 </Col>)
                }
            </>
    )
}
