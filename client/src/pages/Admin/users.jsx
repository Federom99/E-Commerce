import DataTable from 'react-data-table-component';

const tablaUsuarios = [
    {
      "id": "Qff78AeOAWdMJH1pIrWX5Dn40Xv2",
      "nombre": "Federico",
      "apellido": "Romero",
      "telefono": 3810000000,
      "mail": "federo.15.99@gmail.com",
      "direccion": "Pilo, Córdoba",
      "dni": 41000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "9eh7Isj3LsaTgyeND7Zr2LwltwE2",
      "nombre": "Jose",
      "apellido": "Osorio",
      "telefono": 5300000000,
      "mail": "joseinvictus273@hotmail.com",
      "direccion": "Piumato Rodriguez, Bogota",
      "dni": 35000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "0recbbIV6GZreIlvNMc6wrxpOor1",
      "nombre": "Martin",
      "apellido": "Orlando",
      "telefono": 1100000000,
      "mail": "martin._orlando@hotmail.com.ar",
      "direccion": "Somewhere in the CABA",
      "dni": 44000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "fIXTjfRP2uYVpW81GoUYIRWABDr2",
      "nombre": "Mario",
      "apellido": "Rodriguez",
      "telefono": 2940000000,
      "mail": "rgzrgzm@gmail.com",
      "direccion": "Nueva Leon, Mexico",
      "dni": 30000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "hFLxCkmxGlVFkzPpy7af2b6Eeu02",
      "nombre": "David",
      "apellido": "Gomez",
      "telefono": 3510000000,
      "mail": "davidstangetz13@gmail.com",
      "direccion": "El centro del país",
      "dni": 39000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "1IbHp9pvK6gNLNJOdoBLIPyreq72",
      "nombre": "Alan",
      "apellido": "Acevedo",
      "telefono": 3410000000,
      "mail": "alanacevedo2001@hotmail.com",
      "direccion": "Buenos aires, La plata",
      "dni": 40000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "dsI3ZazuBKTyQGJFS9ghRudXCpn1",
      "nombre": "Emiliano",
      "apellido": "Arancio",
      "telefono": 1100000000,
      "mail": "earancio616@gmail.com",
      "direccion": "CABA",
      "dni": 8000000,
      "contraseña": "admin",
      "isAdmin": true
    },
    {
      "id": "dsI3ZazuBKTyQGJFS9ghRudXCpn9",
      "nombre": "Alexis",
      "apellido": "Cortazzi",
      "telefono": 1100000000,
      "mail": "alexiscortazzii@gmail.com",
      "direccion": "Caballito, San Juan",
      "dni": 9000000,
      "contraseña": "admin",
      "isAdmin": true
    }
  ]

const columnas = [
   { 
    name: 'ID',
    selector: 'id',
    sortable: true
   },
   { 
    name: 'Nombre',
    selector: 'nombre',
    sortable: true
   },
   { 
    name: 'Apellido',
    selector: 'apellido',
    sortable: true
   },
   { 
    name: 'Mail',
    selector: 'mail',
    sortable: true
   },
   { 
    name: 'Telefono',
    selector: 'telefono',
    sortable: true
   },
]

const paginacionOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

export default function Users() {
    return (
        <div>
            <DataTable
            columns={columnas}
            data={tablaUsuarios}
            title="Usuarios"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}