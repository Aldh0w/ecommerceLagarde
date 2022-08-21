import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Cart.css'

const Cart = () =>{
    const { cart, totalPrice, clearCart } = useCartContext();

    if(cart.length === 0){
        return(
            <>
                <p>El Carrito esta vacio</p>
            </>
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
                    </tbody>       
                </Table>
        </Container>
    )
}


export default Cart