import	{useState, useEffect} from 'react';
import Item from '../Item';
import getFetch from '../Data/data';
import './ItemList.css'
export default function ItemList (){
    const [data,setData]=useState([])
        useEffect(()=>{
        getFetch
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        },[]);
   
    return(
        <div className='flex'>
            {
                data.map(prod=> <Item key={prod.id} imagen={prod.imagen} stock={prod.stock} precio={prod.precio} titulo={prod.titulo} categoria={prod.categoria} />)
            }
        </div>
    )
}
