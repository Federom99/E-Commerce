const { Router } = require("express");
const { Producto, Talle, Categoria } = require("../db.js");
const {Op} = require('sequelize')

const router = Router();

router.get('/', async(req, res) => {
//router.get('/:page', async(req, res) => {

    /*const {name} = req.query
    let {page} = req.params
    page = parseInt(page)
    const paginated = 25*/
    
    //provisional
    const {name} = req.query
    let page = 1;
    page = parseInt(page)
    const paginated = 500;

    //En caso de que me pidan una pagina menor o igual a 0 o que no sea un stream, mando un error.
    if(page <= 0 || !page) return res.status(400).send({Error: 'Las paginas deben ser números que empiezan desde el 1.'})

    

    
    let productsSearch

    //Defino un query general para ahorrarme codigo
    const query = {include: [Talle, Categoria], offset: paginated*(page-1), limit: paginated, distinct: true, order: ['id']}

    //Si no me pasan name por query, traigo todos los productos.
    if(!name) productsSearch = await Producto.findAndCountAll(query);
    //Si me lo pasan, traigo los productos que tengan un nombre parecido.
    else productsSearch = await Producto.findAndCountAll({
        ...query,
        where:{
            nombre:{
                [Op.iLike]: `%${name}%`,
            }
        },
        
    });

    //Cuento todos los productos que existan se haya pasado un parametro o no y el número de páginas
    const totalProductsForQuery = productsSearch.count
    const numberOfPages =  Math.ceil( totalProductsForQuery / paginated)

    //Los mapeo para que no se vea la informacion innecesaria de sequelize
    const productos = productsSearch.rows.map(p => {
        return p.dataValues
    })

    //Almaceno la cantidad de productos en la página actual en una variable
    const paginatedOnPage = productos.length

    //Creo informacion del paginado
    const paginateInfo = {currentPage: page, lastPage: numberOfPages, paginated: paginatedOnPage}

    //Si me pasan una página mayor al número de páginas, mostramos la última página.
    if(page > numberOfPages) return res.redirect('./' + numberOfPages)


    //Envio los productos y la info del paginado como respuesta
    res.status(200).send({productos, paginateInfo})


})


module.exports = router;
