import DataTable from 'react-data-table-component';
import { getUsuarios, updateUser } from '../../redux/actions/checkout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import './products.css'

export default function Users() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsuarios());
  }, [])

  const usuarios = useSelector((state) => state.checkout.usuarios);
  // console.log(usuarios)

  function alerta2 (id, isAdmin) {
    dispatch(updateUser({id, isAdmin: !isAdmin}))
    alert("Usuario ya no es mas Admin")
    dispatch(getUsuarios());
  }

  function alerta1 (id, bloqueado) {
    dispatch(updateUser({id, bloqueado: !bloqueado}))
    alert("Usuario Bloqueado")
    dispatch(getUsuarios());
  }
  
  const columnas = [
     { 
      name: 'Nombre',
      selector: row => `${ row.nombre }`,
      sortable: true
     },
     { 
      name: 'Apellido',
      selector: row => `${ row.apellido }`,
      sortable: true
     },
     { 
      name: 'Mail',
      selector: row => `${ row.mail }`,
      sortable: true
     },
     { 
      name: 'Telefono',
      selector: row => `${ row.telefono }`,
      sortable: true
     },
     { 
      name: 'Admin',
      selector: row => row.isAdmin === true ? 'SI' : 'NO',
      sortable: true
     },
     { 
      name: 'Bloqueado',
      selector: row => row.bloqueado === true ? 'SI' : 'NO',
      sortable: true
     },
     { 
      name: 'Admin',
      selector: row => <button className='user' onClick={ () => alerta2(row.id, row.isAdmin)}>Editar</button>,
      // row.isAdmin == true ? row.isAdmin = false : row.isAdmin = true
      sortable: true
     },
     { 
      name: 'Bloqueado',
      selector: row => <button className='user' onClick={ () => alerta1(row.id, row.bloqueado)}>Editar</button>,
      // row.isAdmin == true ? row.isAdmin = false : row.isAdmin = true
      sortable: true
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
            <DataTable
            columns={columnas}
            data={usuarios}
            title="Usuarios"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}