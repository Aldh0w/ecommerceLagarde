import	{useState, useEffect} from 'react';
import {getFetchById} from '../Data/data';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail"

export default function ItemDetailContainer (){
    
    const [product,setProduct]=useState();
    const {productId} = useParams();


    useEffect(()=>{
        getFetchById(productId)
        .then(product=>{
            setProduct(product)
        })
    },[productId]);

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
   
}