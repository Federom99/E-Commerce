import DataTable , {createTheme} from 'react-data-table-component';
import { getUsuarios, updateUser, filterUsers } from '../../redux/actions/checkout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import './products.css'
import { toast } from 'react-toastify';
import { AiTwotoneAppstore } from 'react-icons/ai';
import { Button, Text } from './styles';

export default function Users() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  // const [datos, setDatos] = useState("")

  // const usuarios = useSelector((state) => state.checkout.usuarios);
  const usuariosFiltrados = useSelector((state) => state.checkout.usuariosFiltrados);

  useEffect(() => {
    dispatch(getUsuarios());
    console.log("me rompo")
  }, [])

  // useEffect(() => {
  //   console.log("me rompo todo")
  // }, [usuariosFiltrados])
  
  // var usuariosFiltrados = [useSelector((state) => state.checkout.usuarios);]
  // console.log(usuarios)
  const changeAdmin = ({nombre , apellido , id , isAdmin})=>{
    const adminSet = ()=>{
      // console.log(row)
      dispatch(updateUser({id,isAdmin: !isAdmin}))
      setTimeout(()=>{
        dispatch(getUsuarios())
      },1000)
    }
    return(
      isAdmin ? (
      <div>
        <Text>Está revocando los permisos de administrador al usuario {nombre} {apellido}</Text>
        <Button onClick={adminSet}>Confirmar</Button>
      </div>):(<div>
        <Text>Está otorgando permisos de administrador al usuario {nombre} {apellido}</Text>
        <Button onClick={adminSet}>Confirmar</Button>
      </div>)
    )
  }
  const blockUser = ({id, bloqueado , nombre , apellido})=>{
    const setBlock = ()=>{
      dispatch(updateUser({id,bloqueado: !bloqueado}))
      setTimeout(()=>{
        dispatch(getUsuarios())
      },1000)
    }
    return(
      !bloqueado ? (
      <div>
        <Text>¿Bloquear al usuario {nombre} {apellido}?</Text>
        <Button onClick={setBlock}>Confirmar</Button>
      </div>):(<div>
        <Text>¿Desbloquear al usuario {nombre} {apellido}?</Text>
        <Button onClick={setBlock}>Confirmar</Button>
      </div>)
    )
  }
  function alerta2(row) {
    toast.info(changeAdmin(row),{
      toastId: `${row.id}admin${row.isAdmin}`
    })
    // dispatch(getUsuarios())
  }

  function alerta1(row) {
    toast.info(blockUser(row),{
      toastId: `${row.id}block${row.bloqueado}`
    })

  }

  function handleInputChange(e) {
    // e.preventDefault()
    setSearch(
      e.target.value
    )
  }

  function handleSubmit(e) {
    // e.preventDefault()
    // setDatos({ usuariosFiltrados: usuarios.filter(el => el.nombre.toLowerCase().includes(search.nombre.toLowerCase())) })
    dispatch(filterUsers(search))
  }

  function RecargarSubmit(e) {
    // e.preventDefault()
    dispatch(getUsuarios("Reset"))
    setSearch("")
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
      selector: row => <button className='user' onClick={() => alerta2(row)}>Editar</button>,
      // row.isAdmin == true ? row.isAdmin = false : row.isAdmin = true
      sortable: true
    },
    {
      name: 'Bloqueado',
      selector: row => <button className='user' onClick={() => alerta1(row)}>Editar</button>,
      // row.isAdmin == true ? row.isAdmin = false : row.isAdmin = true
      sortable: true
    },
  ]

  // createTheme('custom', {
  //   text: {
  //     primary: '#268bd2',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#1B1B1B',
  //   },
  //   context: {
  //     background: '#cb4b16',
  //     text: '#FFFFFF',
  //   },
  //   divider: {
  //     default: '#073642',
  //   },
  //   action: {
  //     button: 'rgba(0,0,0,.54)',
  //     hover: 'rgba(0,0,0,.08)',
  //     disabled: 'rgba(0,0,0,.12)',
  //   },
  // }, 'dark');

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
          value={search}
          className='textField'
          placeholder="Buscar"
          onChange={(c) => handleInputChange(c)}
        />
        <button type='submit' className="btnBuscar" onClick={(e) => handleSubmit(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></button>
        <button type='submit' className="btnBuscar" onClick={(e) => RecargarSubmit(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
        </svg></button>
      </div>
      <DataTable
        columns={columnas}
        data={usuariosFiltrados}
        // theme="custom" //habilitar esta linea y descomentar createTheme()
        title="Usuarios"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  )
}