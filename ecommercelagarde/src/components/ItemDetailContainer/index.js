import	{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail"

export default function ItemDetailContainer (){
    
    const [product,setProduct]=useState();
    const {productId} = useParams();


    useEffect(()=>{
       const querydb = getFirestore();
       const queryDoc = doc(querydb, 'productos', productId);
       getDoc(queryDoc)
       .then(res => setProduct({id: res.id, ...res.data()}))
    },[productId]);

    return(
            <ItemDetail {...product}/>
    )
}