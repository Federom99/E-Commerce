import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTalles, updateProduct, getProduct } from "../../redux/actions/product"
import { useNavigate } from 'react-router-dom'; 

import './Modal.css'
import { toast } from "react-toastify";

export default function Modal({ cambiarEstado, submit, datos }) {
    // console.log(datos)
    const dispatch = useDispatch();
    const navigateTo  = useNavigate()
    const categorias = useSelector(state => state.product.allCategories);
    const talles = useSelector(state => state.product.allTalles);
    const [form, setForm] = useState({
        id: datos.id,
        nombre: datos.nombre.trim(),
        descripcion: datos.descripcion,
        imagen: datos.imagen,
        precio: datos.precio,
        stock: datos.talles.map(e => e.producto_talle.stock),
        categoria: datos.categorium.nombre,
        cantTalles: datos.talles.map(t => t.talle)
    })
    const [sinTalle, setSinTalle] = useState(false);


    // console.log(form)

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getTalles());
    }, [dispatch])

    // console.log(form.cantTalles);
    // console.log(form.stock);
    // console.log(sinTalle);

    function handleSubmit(e) {
        e.preventDefault();
        const producto = {
            id: datos.id,
            nombre: form.nombre,
            precio: form.precio,
            descripcion: form.descripcion,
            imagen: form.imagen,
            talle: form.cantTalles,
            stock: form.stock,
            categoria: [form.categoria]
        }
        dispatch(updateProduct(producto))
        // alert("Producto Editado !")
        toast.success('Editado')
        cambiarEstado(false)
    }

    function handleChangeCantTalles(e) {
        if (e.target.name === "Sin talle") {
            if (sinTalle === true) {
                setSinTalle(false);
                let arr = [];
                let arrStock = [];
                setForm({ ...form, cantTalles: arr, stock: arrStock });
            }
            else {
                setSinTalle(true);
                let arr = ["Sin talle"];
                let arrStock = [];
                setForm({ ...form, cantTalles: arr, stock: arrStock });
            }
            return;
        }
        if (e.target.checked) {
            console.log(e.target)
            let arr = form.cantTalles;
            arr.push(e.target.name);
            setForm({ ...form, cantTalles: arr });
        }
        if (!e.target.checked) {
            console.log(e.target)
            let arr = form.cantTalles;
            let arrStock = form.stock;
            let indice = arr.indexOf(e.target.name);
            arrStock.splice(indice, 1);
            arr.splice(indice, 1);
            setForm({ ...form, cantTalles: arr, stock: arrStock });
        }
    }

    function handleStock(e, i) {
        let arr = form.stock;
        arr[i] = Number(e.target.value);
        setForm({ ...form, stock: arr });
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="modal" >
                <div className='contentModal'>
                    <button className='cerrar' onClick={() => cambiarEstado(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <div id="contenedorForm" >
                        <form className="formulario" onSubmit={handleSubmit} style={{backgroundColor:"#fff"}}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={form.nombre}
                                onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                            />

                            <label htmlFor="descripcion">Descripcion:</label>
                            <textarea
                                style={{resize: "none", borderRadius:"8px"}}
                                rows="10"
                                cols="50"
                                id="descripcion"
                                name="descripcion"
                                value={form.descripcion}
                                onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                            />

                            <label htmlFor="imagen">Imagen:</label>
                            <input
                                type="file"
                                id="imagen"
                                name="imagen"
                                // value={form.imagen}
                                onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                            />

                            <label>Talle</label>
                            <div id="checkContainer">
                                <label id="checkLabel">
                                    <input id="inputTalle" type="checkbox"
                                        key="0" name="Sin talle"
                                        onChange={handleChangeCantTalles} />
                                    <span id="spanTalle">Sin talle</span>
                                </label>
                                {talles?.map((t, i) => {
                                    if (!sinTalle) return (
                                        <>
                                            <label id="checkLabel">
                                                {form.cantTalles.includes(t) ? (<input id="inputTalle" type="checkbox" checked
                                                    key={i} name={t}
                                                    onChange={handleChangeCantTalles} />) : ( <input id="inputTalle" type="checkbox"
                                                    key={i} name={t}
                                                    onChange={handleChangeCantTalles} /> )}
                                                
                                                <span id="spanTalle">{t}</span>
                                            </label>
                                        </>
                                    )
                                })}
                            </div>

                            <label>Stock</label>
                            <div id="stockContainer">
                                {form.cantTalles?.map((ct, i) => {
                                    return (
                                        <>
                                            <label>{ct}</label>
                                            <input type="number" value={form.stock[i]}
                                                onChange={(e) => handleStock(e, i)}></input>
                                        </>
                                    )
                                })}
                            </div>

                            <label htmlFor="precio">Precio:</label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                value={form.precio}
                                onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                            />

                            <label>Categoria</label>
                            <select id="selectCat" name="categoria" value={form.categoria} onChange={handleChange}>
                                {
                                    categorias?.map((c, i) => {
                                        return (
                                             form.categoria !== c ? ( <option key={i}>{c}</option> ) : ( <option selected key={i}>{c}</option> )
                                        )
                                    })
                                }
                            </select>
                            <button>Editar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}