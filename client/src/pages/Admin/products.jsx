import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './products.css';
import { deleteProduct, getProducts, postProduct } from '../../redux/actions/product';
import { useEffect, useState } from "react";
import Modal from '../../components/Modal/Modal';
import EditProduct from '../../components/EditProduct';
import EditForm from '../../components/EditProduct/form';

export default function Products() {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    

    function borrar ( id ) {
      dispatch(deleteProduct(id))
      alert("Producto Eliminado !");
      console.log(id);
      dispatch(getProducts());
    }

    function submit ( product ) {
      dispatch(postProduct(product));
      alert("Producto Creado !");
      console.log(product);
  }

    const products = useSelector((state) => state.product.products);
    console.log(products)  

    function editar () {
      setModal(!modal)
    }

    function modificar () {
      console.log("Soy Modificar")
      setModal(!modal)
    }

    const columnas = [
      { 
       name: 'Nombre',
       selector: row => `${ row.nombre }`,
       sortable: true,
       grow: 0.2,
      },
      { 
       name: 'Precio',
       selector: row => `$ ${ row.precio }`,
       sortable: true,
       grow: 0,
      },
      { 
       name: 'Talle',
       selector: row =>  row.talles.map(e => `${e.talle} / `),
       sortable: true,
       grow: 0.2,
      },
      { 
       name: 'Stock',
       selector: row => row.talles.map(e => `${e.producto_talle.stock} / `),
       sortable: true,
       grow: 0.2,
      },
      { 
       name: 'Categoria',
       selector: row => `${ row.categorium.nombre }`,
       sortable: true,
       grow: 0.1,
      },
      { 
        name: 'Borrar',
        selector: row => <button className='user' onClick={ () => borrar(row.id)}>Eliminar</button>,
        sortable: true,
        grow: 0.1,
       },
       { 
        name: 'Modificar',
        selector: row => <button className='user' onClick={ () => editar(row.nombre)}>Editar</button>,
        sortable: true,
        grow: 0,
       },
   ]
  
   const paginacionOpciones={
      rowsPerPageText: 'Filas por pagina',
      rangeSeparatorText: 'de',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'Todos'
  }

    const header = modal === false ? true : false;

    return (
        <div>
            <Link to={"/createProduct"}><button className='nuevo'>Crear Nuevo Producto</button></Link>
            <DataTable
            columns={columnas}
            data={products}
            title="Productos"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader={header}
            fixedHeaderScrollHeight="600px"
            />
            <Modal
              estado={modal}
              cambiarEstado={setModal}
            >
              <EditForm submit={submit} />
              <button className='user' onClick={modificar}>Aceptar</button>
            </Modal>
        </div>
    )
}