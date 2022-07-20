## API

Para que la api funcione es necesario crear un archivo .env de la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost

JWT_SECRET=palabraSecret
COOKIE_SECRET=asK9USD8SFZASLDlpfkqaefrekigdxkicauqLSDKFE
```

También hay que tener creada una base de datos con el nombre eccomerce


## ENDPOINTS

POST /category. Recibe por body:

```json
{
    "categoria": "nombreDeCategoria"
}
```

DELETE /category/delete/:id. Elimina la categoria según el id pasado por parámetro.

DELETE /product/:id. Elimina el producto según el id pasado por parámetro.

DELETE /ratings/:id. Elimina la review según el id pasado por parámetro.

DELETE /usuario/:id. Elimina el usuario según el id pasado por parámetro.

GET /categories/. Devuelve un objeto con un array de las categorías.

GET /pedido/:id. Devuelve un pedido según el id recibido por parámetros.

GET /pedidos. Devuelve todos los pedidos. GET /pedidos?search=nombreproducto devuelve todos los pedidos con ese producto.

GET /pedidos/user/:id. Devuelve todos los pedidos del user pasado por id.

GET /rating. Devuelve todos los ratings.

GET /ratings/:productId. Devuelve todos los rating del producto pasado por id.

GET /usuario/ratings/:usuarioId. Devuelve todos los ratings de un usuario pasado por id.

GET /talles. Devuelve todos los talles existentes.

POST /rating/:productoId. Recibe por body: 

```json
{
    "puntaje": 3, //Numero del 1 al 5
    "titulo": "Titulo de ejemplo",
    "comentario": "Comentario de ejemplo",
    "usuarioId": "Qff78AeOAWdMJH1pIrWX5Dn40Xv2"
}
```

GET /product/:id. Trae un objeto del producto pasado por parámetro con sus talles, categoria y stocks correspondientes.

GET /products. Trae un objeto con todos los productos en la DB.

POST /user/register. Recibe por body:

```json
{
    "nombre": "nombre",
    "apellido": "apellido",
    "telefono": 94928439538,
    "mail": "ejemplo@xd.com",
    "direccion": "calle real 191",
    "contraseña": "123",
    "dni": 3498238949
}
```

POST /user/login. Recibe por body:

```json
{
    "mail": "asd@gmail.com",
    "contraseña": "123"
}
```

GET /user. Trae la lista de todos los usuarios. Si le pasamos el query ?search=nombre/apellido devuelve los users con ese nombre/apellido.

PUT /admin/usuario/:id.  Recibe por body las prop. Y basicamente es modificar el isAdmin de false a true. Pero si o si se tienen que pasar todas las props de user por body.
El .save() da la capacidad de modificar una instancia después de que se haya instanciado, pero antes de que se almacene en la base de datos.

PUT /admin/pedido/:id. Basicamente lo mismo que el anterior. Es para cambiar el "estado" que tiene un default value de en preparcion.

POST /admin/crearorigen/. Aca se cargan los productos en la db con el metodo bulkCreate. Esto lo que hace es cargarlos masivamente y rápido

POST /admin/crearusuarios/. Lo mismo que el de arriba

PUT /stock/:productId. Recibe el id del producto y por body recibe:

```json
{
    "talle": "XL", //Nombre del talle
    "stock": 3 //Nuevo stock
}
```

POST /pedido/crear. Crea un pedido a partir del id del usuario autenticado en el momento. Recibe por body:
```json
{
    "productos": [
        {
            "productId": 2,
            "talleId": 2,
            "cantidad": 2
        },

        {
            "productId": 2,
            "talleId": 3,
            "cantidad": 4
        },

        {
            "productId": 3,
            "talleId": 5,
            "cantidad": 5
        }
    ]
}
```

PUT /edit/product. El unico dato obligatorio es el id. El resto son opcionales. Solo se pone el valor a cambiar.
```json
{
  "id": 2,
  "nombre": "Nombre del producto - Actualizado",
  "descripcion": "Descripcion del producto",
  "imagen": "URL de la imagen del producto",
  "talle": ["S", "M", "L", "XL"],
  "stock": [1111, 222, 333, 444],
  "categoria": ["Camisas"],
  "precio": 999
}
```

PUT /ban/uid. Banea al user del uid pasado por param.



Faltan por documentar las rutas de los siguientes archivos (no entendi bien como funcionaban así que porfa fijense los que las hicieron y documentenlas en este readme.):

<ul>

    <li>editProduct.js</li>
    
    <li>createPedido.js</li>

    <li>favoritos.js</li>
</ul>
