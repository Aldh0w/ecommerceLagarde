import React from 'react';
import Container from 'react-bootstrap/Container'
import	{useState, useEffect} from 'react';
import { getFetch, getFetchByCategoryId } from '../Data/data';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';


export default function ItemListContainer () {
    const [data,setData]=useState([]);
    const {categoryId} =useParams();
    
    useEffect(()=>{

        if(!categoryId){
            getFetch().then(data => {
                setData(data)
            })
        }else{
            getFetchByCategoryId(categoryId).then(data =>{
                setData(data)
            })
        }
    },[categoryId]);

    return(
        <Container fluid> 
            <ItemList producto={data}/>
        </Container>
    );
}