import React from "react"
import { useCartContext } from "../../context/CartContext";
import { BsXCircleFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure'

export default function ItemCart ({product}) {

    const { removeProduct } = useCartContext();
    return  (<>
                        <td>
                            <Figure>
                                <Figure.Image
                                    width={80}
                                    height={80}
                                    alt={product.titulo}
                                    src={product.imagen}
                                />
                            </Figure>
                        </td>
                        <td>{product.titulo}</td>
                        <td>{product.cantidad}</td>
                        <td>$ {product.precio}</td>
                        <td>$ {product.cantidad * product.precio}</td>
                        <td><Button onClick={() => removeProduct(product.id)} variant="danger" size='sm' ><BsXCircleFill/></Button></td>
            </>)
}