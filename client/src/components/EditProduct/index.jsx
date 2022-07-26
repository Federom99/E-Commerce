import EditForm from './form'
import { Main } from "../../containers/MainContainer/styles";
import { postProduct } from '../../redux/actions/product';
import { useDispatch } from 'react-redux';

export default function EditProduct () {
    const dispatch = useDispatch()

    function submit ( product ) {
        dispatch(postProduct(product));
        alert("Producto Creado !");
        // console.log(product);
    }

    return (
            <EditForm submit={submit}/>
    )
}



