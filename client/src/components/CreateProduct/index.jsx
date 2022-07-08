import Form from './form';
import { Main } from "../../containers/MainContainer/styles";
import { postProduct } from '../../redux/actions/product';
import { useDispatch } from 'react-redux';

export default function CreateProduct () {
    const dispatch = useDispatch()

    function submit ( product ) {
        dispatch(postProduct(product))
        alert("Producto Creado !")
    }

    return (
        <Main>
        <Form submit={submit}/>
        </Main>
    )
}



