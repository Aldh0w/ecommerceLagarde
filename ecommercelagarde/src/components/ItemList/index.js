import Item from '../Item';
import './ItemList.css'


export default function ItemList (props){
    return(
        <div className='itemList'>
            {
                props.producto.map(prod=> <Item   key={prod.id} 
                                            id={prod.id}
                                            imagen={prod.imagen} 
                                            stock={prod.stock} 
                                            precio={prod.precio} 
                                            titulo={prod.titulo} 
                                            categoria={prod.categoria} />)
            }
        </div>
    )
}
