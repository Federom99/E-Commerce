import DataTable from 'react-data-table-component';
import { getUsuarios, updateUser } from '../../redux/actions/checkout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import './products.css'

export default function Users() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    nombre: ""
  })
  const [datos, setDatos] = useState({
    usuariosFiltrados: useSelector((state) => state.checkout.usuarios),
  })

  useEffect(() => {
    dispatch(getUsuarios());
  }, [])

  const usuarios = useSelector((state) => state.checkout.usuarios);
  // var usuariosFiltrados = [useSelector((state) => state.checkout.usuarios);]
  // console.log(usuarios)

  function alerta2(id, isAdmin) {
    dispatch(updateUser({ id, isAdmin: !isAdmin }))
    alert("Usuario ya no es mas Admin")
    dispatch(getUsuarios());
  }

  function alerta1(id, bloqueado) {
    dispatch(updateUser({ id, bloqueado: !bloqueado }))
    alert("Usuario Bloqueado")
    dispatch(getUsuarios());
  }

  function handleInputChange(e) {
    // e.preventDefault()
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setDatos({ usuariosFiltrados: usuarios.filter(el => el.nombre.toLowerCase().includes(search.nombre.toLowerCase())) })
  }

  function RecargarSubmit(e) {
    // e.preventDefault()
    setDatos({ usuariosFiltrados: usuarios })
    setSearch({
      nombre: "",
    })
  }

  const columnas = [
    {
      name: 'Nombre',
      selector: row => `${row.nombre}`,
      sortable: true
    },
    {
      name: 'Apellido',
      selector: row => `${row.apellido}`,
      sortable: true
    },
    {
      name: 'Mail',
      selector: row => `${row.mail}`,
      sortable: true
    },
    {
      name: 'Telefono',
      selector: row => `${row.telefono}`,
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
      selector: row => <button className='user' onClick={() => alerta2(row.id, row.isAdmin)}>Editar</button>,
      // row.isAdmin == true ? row.isAdmin = false : row.isAdmin = true
      sortable: true
    },
    {
      name: 'Bloqueado',
      selector: row => <button className='user' onClick={() => alerta1(row.id, row.bloqueado)}>Editar</button>,
      // row.isAdmin == true ? row.isAdmin = false : row.isAdmin = true
      sortable: true
    },
  ]

  const paginacionOpciones = {
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }

  return (
    <div>
      <div className='barraBusqueda'>
        <input
          type='text'
          name='nombre'
          value={search.nombre}
          className='textField'
          placeholder="Buscar"
          onChange={(c) => handleInputChange(c)}
        />
        <button type='submit' className="btnBuscar" onClick={(e) => handleSubmit(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></button>
        <button type='submit' className="btnBuscar" onClick={(e) => RecargarSubmit(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
        </svg></button>
      </div>
      <DataTable
        columns={columnas}
        data={datos.usuariosFiltrados}
        title="Usuarios"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  )
}