import	{useState,} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import './ItemCount.css';

export default function ItemCount (props){
    const [controlador, setControlador] = useState(props.inicial);
  
    function sumarCarrito (){
        setControlador(controlador + 1);
        if(controlador === props.stock){
            setControlador(props.stock)
        }
    };

    function restarCarrito(){
        setControlador(controlador - 1);
        if(controlador === 1){
            setControlador(1)
        }
    };


    return (  

      <div>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="botons centrado" aria-label="First group">
        <Button className='ms-1 mt-1'onClick={restarCarrito} variant="secondary" size='sm'>-</Button>{' '}
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">{controlador}</InputGroup.Text>
        </InputGroup>
        <Button className='me-1 mt-1' onClick={sumarCarrito} variant="secondary" size='sm'>+</Button>{' '}
        </ButtonGroup>
        </ButtonToolbar>
        <Button className='mt-2 centrado' variant="primary" size='sm' onClick={()=> props.agregarCarrito(controlador)}>Agregar al carrito</Button>
        
      </div>
    );
}




