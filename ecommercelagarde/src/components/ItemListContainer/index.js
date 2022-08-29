import React from 'react';
import Row from 'react-bootstrap/Row';
import	{useState, useEffect} from 'react';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';


export default function ItemListContainer () {
    const [data,setData]=useState([]);
    const {categoryId} =useParams();
    
    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'productos');
        if(categoryId){
            const queryFilter = query(queryCollection, where('categoria', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }
    },[categoryId]);

    return(
        <Row sm={'auto'}> 
            <ItemList producto={data}/>
        </Row>
    );
}