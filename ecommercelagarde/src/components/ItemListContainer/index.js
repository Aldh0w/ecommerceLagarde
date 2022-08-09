import React from 'react';
import	{useState, useEffect} from 'react';
import { getFetch } from '../Data/data';
import ItemList from '../ItemList';
import './ItemListContainer.css'

export default function ItemListContainer () {

    const [data,setData]=useState([]);

    useEffect(()=>{
        getFetch().then(resp => {
            setData(resp)
        })
    },[]);

    return(
        <div className='itemListContainer'>
            <ItemList producto={data}/>
        </div>
    );
}