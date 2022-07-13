import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/product';

const tablaProductos = [{
    "nombre": "Remera manga corta tie-dye",
    "precio": "1120",
    "descripcion": "Color:Verde. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/8138/443/526/8138443526_2_4_3.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera manga corta easy fit print",
    "precio": "1190",
    "descripcion": "Color:Negro. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/3251/130/800//01/3251130800_2_13_1.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera manga corta extra loose fit print",
    "precio": "2190",
    "descripcion": "Color: Negro. El estampado de la prenda puede variar ligeramente.Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2696/461/279/2696461279_2_4_1.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera manga corta boxy fit print arte",
    "precio": "3150",
    "descripcion": "Color: Blanco roto. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/2824/922/251//02/2824922251_2_13_1.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera manga corta extra loose deep-dye print",
    "precio": "4120",
    "descripcion": "Color: Blanco roto. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2708/458/251/2708458251_2_4_1.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta tie-dye funny print",
    "precio": "4680",
    "descripcion": "Color: Azul. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/8138/443/400/8138443400_2_4_3.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta extra loose",
    "precio": "2650",
    "descripcion": "Color: Verde. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/2695/880/500/2695880500_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta boxy fit print oriental",
    "precio": "4120",
    "descripcion": "Color: Blacno. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/8167/538/250/8167538250_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta print animé",
    "precio": "6182",
    "descripcion": "Color: Negro. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/8137/461/800/8137461800_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta sin mangas worker oversize Smiley",
    "precio": "8462",
    "descripcion": "Color: Blanco. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/8149/130/250//01/8149130250_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta print",
    "precio": "4185",
    "descripcion": "Color: Blanco. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/8136/461/250//01/8136461250_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta slim fit cuello perkins",
    "precio": "1185",
    "descripcion": "Color: Granate. 97% algodón 3% elastano",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/2834/130/605/2834130605_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta oversize print",
    "precio": "7475",
    "descripcion": "Color: Blanco. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/I/0/2/p/2833/922/250/2833922250_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta boxy fit print",
    "precio": "4137",
    "descripcion": "Color: Negro. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2741/130/800/2741130800_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta extra loose print",
    "precio": "6317",
    "descripcion": "Color: Blanco. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2751/538/250/2751538250_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta oversize deep-dye print",
    "precio": "8317",
    "descripcion": "Color: Morado. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2786/461/612/2786461612_2_4_3.jpg",
  "talle": ["S", "M", "L", "XL"],
  "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta regular fit print",
    "precio": "3687",
    "descripcion": "Color: Azul. 100% algodon",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2753/443/400/2753443400_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta oversize deep-dye",
    "precio": "6237",
    "descripcion": "Color: Amarillo. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2788/461/612/2788461612_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta polo cuadros",
    "precio": "2000",
    "descripcion": "Color: Blanco y negro. 100% poliéster",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/3390/296/611/3390296611_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Camiseta manga corta oversize texto",
    "precio": "5160",
    "descripcion": "Color: Beige. Care for water: producido utilizando menos agua. El uso de ciclos cerrados que permiten reutilizar el agua o de tecnologías como las máquinas de baja relación de baño o el tintado en masa nos ayudan a reducir el consumo de agua en los procesos de tintado o lavado de las prendas.",
    "imagen": "https://static.bershka.net/4/photos2/2022/V/0/2/p/2793/240/459/2793240459_2_4_3.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Negra",
    "precio": "1000",
    "descripcion": "Color: Negro. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr05211_1_1.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Blanca",
    "precio": "1000",
    "descripcion": "Color: Blanco. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr05212_8.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Gris",
    "precio": "1000",
    "descripcion": "Color: Gris. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr05207_2.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Estampada Blanca",
    "precio": "2000",
    "descripcion": "Color: Blanco. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08462-copia_1.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Estampada Negra",
    "precio": "2000",
    "descripcion": "Color: Negro. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08470-copia.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Estampada Rick and Morty",
    "precio": "2000",
    "descripcion": "Color: Negro. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08466-copia_1.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Estampada Gris",
    "precio": "2000",
    "descripcion": "Color: Gris. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr06178_1.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Cruz Estampada Azul",
    "precio": "2000",
    "descripcion": "Color: Azulado. 100% algodón premium",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr01400.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Chester Negra",
    "precio": "1200",
    "descripcion": "Color: Negro. 100% algodón común",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08468-copia.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Chester Verde",
    "precio": "1200",
    "descripcion": "Color: Verde. 100% algodón común",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08474-copia.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Chester Celeste",
    "precio": "1200",
    "descripcion": "Color: Celeste. 100% algodón común",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08476-copia.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },
  {
    "nombre": "Remera Chester Roja",
    "precio": "1200",
    "descripcion": "Color: Rojo. 100% algodón común",
    "imagen": "https://www.mojojeans.com.ar/pub/media/catalog/product/cache/1dfbce65621460b34e8e6ad7a4cda084/_/l/_lr08477-copia.jpg",
    "talle": ["S", "M", "L", "XL"],
    "stock": [20, 20, 15, 40],
    "categoria": ["Remeras"]
  },]

  const columnas = [
    { 
     name: 'Nombre',
     selector: 'nombre',
     sortable: true,
     grow: 2
    },
    { 
     name: 'Precio',
     selector: 'precio',
     sortable: true
    },
    { 
     name: 'Talle',
     selector: 'talle',
     sortable: true
    },
    { 
     name: 'Stock',
     selector: 'stock',
     sortable: true
    },
    { 
     name: 'Categoria',
     selector: 'categoria',
     sortable: true
    },
 ]

 const paginacionOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

export default function Products() {
    const dispatch = useDispatch();

    const error = useSelector((state) => state.product.error);
    const loading = useSelector((state) => state.product.loading);
    const products = useSelector((state) => state.product.products);
    // useEffect(() => {
    //     dispatch(getProducts());
    // }, []);

    return (
        <div>
            <DataTable
            columns={columnas}
            data={tablaProductos}
            title="Productos"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}