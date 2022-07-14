import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './products.css';
import { deleteProduct } from '../../redux/actions/product';

export default function Products() {
    const dispatch = useDispatch();

    function borrar ( id ) {
      dispatch(deleteProduct(id))
      alert("Producto Eliminado !");
      console.log(id);
    }

    const products = useSelector((state) => state.product.products);
    console.log(products)

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
        grow: 0,
       },
       { 
        name: 'Modificar',
        selector: row => <button className='user'>Editar</button>,
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

    return (
        <div>
            <Link to={"/createProduct"}><button className='nuevo'>Insertar Nuevo Producto</button></Link>
            <DataTable
            columns={columnas}
            data={products}
            title="Productos"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}