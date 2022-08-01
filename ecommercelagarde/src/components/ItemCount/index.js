import	{useState} from 'react';
import './ItemCount.css';

export default function ItemCount ({stock, inicial},props){
    const [controlador, setControlador] = useState(inicial);
    function sumarCarrito (){
        setControlador(controlador + 1);
        if(controlador == stock){
            window.alert('Tienes el stock Maximo');
        }
    };

    function restarCarrito(){
        setControlador(controlador - 1);
        if(controlador == 1){
            window.alert('No se pueden elegir menos de 1');
        }
    };



    return(
        <div className='boton'>
            <h6>
                {controlador}
            </h6>
            <br />
            <button  onClick={sumarCarrito}>
                +
            </button>
            <button  onClick={restarCarrito}>
                -
            </button>
            <button >
                Agregar al carrito
            </button>

        </div>
    );
}