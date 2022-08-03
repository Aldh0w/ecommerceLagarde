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
        if(controlador == props.stock){
            window.alert('Tienes el stock Maximo');
        }
    };

    function restarCarrito(){
        setControlador(controlador - 1);
        if(controlador == 1){
            window.alert('No se pueden elegir menos de 1');
        }
    };

    return (  

      <div>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="me-2" aria-label="First group">
        <Button className='ms-1'onClick={restarCarrito} variant="secondary">-</Button>{' '}
        <InputGroup>
        <InputGroup.Text id="btnGroupAddon">{controlador}</InputGroup.Text>
        </InputGroup>
        <Button className='me-1' onClick={sumarCarrito} variant="secondary">+</Button>{' '}
        </ButtonGroup>
        </ButtonToolbar>
        <Button className='mb-2' variant="primary">Agregar al carrito</Button>
      </div>
    );
}




