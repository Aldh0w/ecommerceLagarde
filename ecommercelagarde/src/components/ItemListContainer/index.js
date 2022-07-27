import './ItemListContainer.css'

export default function ItemListContainer (props) {
    return(
        <div className='mensaje'>
            <p>{props.mensaje}</p>
        </div>
    );
}