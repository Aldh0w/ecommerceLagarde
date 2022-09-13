import React from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Cart.css'

const Cart = () =>{
    const { cart, totalPrice, clearCart } = useCartContext();
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let numero = document.getElementById('telefono');

    const buy = {
        buyer: {
            name:       nombre,
            email:      email,
            phone:      numero,
        },
        items: cart.map(product =>({id: product.id, titulo: product.titulo, precio: product.precio, cantidad: product.cantidad })),
        total: totalPrice(),
    }

    const confirmBuy = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, buy)
        .then(({id}) => window.alert('.Su id de compra es: ' + id))


    }

    if(cart.length === 0){
        return(
            <div className="vacio">
                <p>El Carrito esta vacio</p>
               <Link to='/'><Button className='ms-3' variant="primary" size='sm'>Regresar a la tienda</Button></Link>
            </div>
        )
    }

    return(

        <Container>
             <Table className="tabla">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>$ Unit.</th>
                        <th>Subtotal $</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(product => <tr className="art" key={product.id}><ItemCart  product={product}/></tr>)
                        }

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Precio total $ {totalPrice()}</th>
                            <th><Button className='me-1 mt-1' onClick={clearCart} variant="danger" size='sm'>Limpiar Carrito</Button></th>
                        </tr> 
                        <tr>
                            <th></th>
                            <th>
                                <label>
                                    Nombre: <br/>
                                    <input id='nombre' type="text"></input>
                                </label>
                            </th>
                            <th>
                                <label>
                                    Email: <br/>
                                    <input id='email' type="text"></input>
                                </label>
                            </th>
                            <th>
                                <label>
                                    Telefono: <br/>
                                    <input id='telefono' type="text"></input>
                                </label>
                            </th>
                            <th><br></br><Button className='me-1 mt-1' onClick={confirmBuy} variant="success" size='sm'>Confirmar Compra</Button></th>
                        </tr> 
                    </tbody>       
                </Table>
        </Container>
    )
}


export default Cart




