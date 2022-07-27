import DataTable from 'react-data-table-component';
import { getPedidos, updateEstadoPedido, filterPedidos } from '../../redux/actions/checkout';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Sales() {
  const dispatch = useDispatch();
  const [estado, setEstado] = useState("")
  const [search, setSearch] = useState("")

  const pedidosFiltrados = useSelector((state) => state.checkout.pedidosFiltrados);

  useEffect(() => {
    dispatch(getPedidos());
  }, [])

  function handleInputChange(e) {
    // e.preventDefault()
    setSearch(
      e.target.value
    )
  }

  function handleSubmit(e) {
    // e.preventDefault()
    // setDatos({ pedidosFiltrados: pedidos.filter(el => el.direccion_de_envio.direccion.toLowerCase().includes(search.nombre.toLowerCase())) })
    dispatch(filterPedidos(search))
  }

  function RecargarSubmit(e) {
    // e.preventDefault()
    dispatch(getPedidos("Reset"))
    setSearch("")
  }

  function modificar(id, estado,row){
    dispatch(updateEstadoPedido({id, estado: estado}))
    setTimeout(()=>{
      dispatch(getPedidos());
    },1000)
    toast.info(`Pedido a direccion ${row.direccion_de_envio.direccion} ${estado}`)    
  }

  function handleSelect(e){
    setEstado(
        e.target.value
    )
    // console.log(estado)
    dispatch(getPedidos())
}

  const columnas = [
    {
      name: 'Fecha',
      selector: row => `${row.fecha.substring(0, 10)}`,
      sortable: true
    },
    {
      name: 'Monto',
      selector: row => `${row.pago_total}`,
      sortable: true
    },
    {
      name: 'Direccion',
      selector: row => `${row.direccion_de_envio.direccion}`,
      sortable: true
    },
    {
      name: 'CP',
      selector: row => `${row.direccion_de_envio.CP}`,
      sortable: true
    },
    {
      name: 'Productos',
      selector: row => `${row.productos[0].nombre}`,
      sortable: true,
      grow: 2
    },
    {
      name: 'Estado',
      selector: row => `${row.estado}`,
      sortable: true
    },
    {
      name: 'Modificar',
      selector: row => <button className='user' onClick={() => modificar(row.id, estado,row)}>Editar</button>,
      sortable: true
    },
    {
      name: 'Estados',
      selector: row => <select
      type= "text"
      // value={estado}
      name= "estado"
      onChange={handleSelect}
      >
      <option> seleccione </option>
       <option value={"en preparacion"}>en preparacion</option>
       <option value={"en camino"}>en camino</option>
       <option value={"en punto de entrega"}>en punto de entrega</option>
       <option value={"en poder del correo"}>en poder del correo</option>
       <option value={"entregado"}>entregado</option>
      </select>,
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
          value={search}
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
        data={pedidosFiltrados}
        title="Pedidos"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  )
}