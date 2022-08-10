import Item from '../Item';
import Row from 'react-bootstrap/Row';


export default function ItemList (props){
    return(
            <Row xs={'auto'} md={'auto'}>
                {
                    props.producto.map(prod=> <Item   key={prod.id} 
                                                id={prod.id}
                                                imagen={prod.imagen} 
                                                stock={prod.stock} 
                                                precio={prod.precio} 
                                                titulo={prod.titulo} 
                                                categoria={prod.categoria} />)
                }
            </Row>
    )
}
