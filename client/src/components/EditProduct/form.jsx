import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getTalles} from "../../redux/actions/product"
import './form.css'

function validate(form){
    let errors = {};
    if (!form.nombre) {
        errors.nombre = "Se requiere un nombre";
    }
    if (!form.descripcion) {
        errors.descripcion = "Se requiere una descripcion";
    }
    if (!form.imagen) {
        errors.imagen = "Se requiere una imagen";
    }
    if (!form.talle) {
        errors.talle = "Se debe especificar el talle"
    }
    if(form.precio < 1) {errors.precio = "El precio debe ser mayor a 0"}
    if (!form.precio) {
        errors.precio = "Se debe ingresar el precio"
    }
    if (!form.stock) {
        errors.stock = "Se debe ingresar stock"
    }
    if (!form.categoria) {
        errors.categoria = "Se debe especificar categoria"
    }
    form.stock.map((e) => {
        if(e < 1)   errors.stock = "El stock debe ser mayor a 1";
        if(!e)   errors.stock = "Se debe ingresar el stock";
    })
    return errors;
};

export default function EditForm({ submit, datos }) {
    // console.log(datos)
    const dispatch = useDispatch();
    const categorias = useSelector(state => state.product.allCategories);
    const talles = useSelector(state => state.product.allTalles);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        imagen: datos.imagen,
        talle: datos.talles.map(e => e.talle),
        precio: datos.precio,
        stock: [],
        categoria: datos.categorium,
        cantTalles: datos.talles
    })
    const [botonBloqueado, setBotonBloqueado] = useState("disabled");
    const [sinTalle, setSinTalle] = useState(false);

    useEffect(
        () => {
            if(errors.nombre || errors.descripcion || errors.imagen || errors.talle || errors.precio || errors.stock || errors.categoria
                || errors.cantTalles){
                setBotonBloqueado("disabled");
            }else setBotonBloqueado("");
            if(!form.nombre || !form.descripcion || !form.imagen || !form.talle || !form.precio || !form.stock || !form.categoria 
                || !form.cantTalles.length){
                    setBotonBloqueado("disabled");
            }
            if(form.cantTalles.length !== form.stock.length) setBotonBloqueado("disabled");
        }, [errors, form]
    )

    console.log(form)

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getTalles());
    },[dispatch])

    // console.log(form.cantTalles);
    // console.log(form.stock);
    // console.log(sinTalle);
    
    function handleStock(e, i){
        let arr = form.stock;
        arr[i] = e.target.value;
        setForm({...form, stock:arr});
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    function handleChangeCantTalles(e){
        if(e.target.name === "Sin talle"){
            if(sinTalle === true){
                setSinTalle(false);
                let arr = [];
                let arrStock = [];
                setForm({...form, cantTalles:arr, stock: arrStock});
            }
            else {
                setSinTalle(true);
                let arr = ["Sin talle"];
                let arrStock = [];
                setForm({...form, cantTalles:arr, stock: arrStock});
            }
            setErrors(validate({
                ...form,
                [e.target.name]: e.target.value
            }))
            return;
        }
        if(e.target.checked) {
            let arr = form.cantTalles;
            arr.push(e.target.name);
            setForm({...form, cantTalles:arr});
        }
        if(!e.target.checked){
            let arr = form.cantTalles;
            let arrStock = form.stock;
            let indice = arr.indexOf(e.target.name);
            arrStock.splice(indice, 1);
            arr.splice(indice, 1);
            setForm({...form, cantTalles:arr, stock:arrStock});
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const producto = {
            nombre: form.nombre,
            precio: form.precio,
            descripcion: form.descripcion,
            imagen: form.imagen,
            talle: form.cantTalles,
            stock: form.stock,
            categoria: [form.categoria]
        }
        submit(producto)
        setForm({
            nombre: "",
            descripcion: "",
            imagen: "",
            talle: [],
            precio: "",
            stock: [],
            categoria: "Remeras",
            cantTalles: []
        })
    }

    return (
        <div id="contenedorForm">
            <form style={{overflow:"hidden"}} className="formulario" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder={datos.nombre}
                />
                {errors.nombre && (
                        <p className="errors">{errors.nombre}</p>
                    )}
                <label>Descripcion</label>
                <input
                    name="descripcion"
                    type="text"
                    value={form.descripcion}
                    onChange={handleChange}
                    placeholder="descripcion"
                />
                {errors.descripcion && (
                        <p className="errors">{errors.descripcion}</p>
                    )}
                <label>Imagen</label>
                <input
                    name="imagen"
                    type="text"
                    value={form.imagen}
                    onChange={handleChange}
                    placeholder="imagen"
                />
                {errors.imagen && (
                        <p className="errors">{errors.imagen}</p>
                    )}
                <label>Talle</label>
                <div id="checkContainer">
                    <label id="checkLabel">
                        <input id="inputTalle" type="checkbox"
                        key="0" name="Sin talle"
                        onChange={handleChangeCantTalles}/>
                        <span id="spanTalle">Sin talle</span>
                    </label>
                    {talles?.map((t, i) => {
                        if(!sinTalle) return(
                            <>
                            <label id="checkLabel">
                                <input id="inputTalle" type="checkbox"
                                key={i} name={t}
                                onChange={handleChangeCantTalles}/>
                                <span id="spanTalle">{t}</span>
                            </label>
                            </>
                        )
                    })}
                </div>
                <label>Stock</label>
                <div id="stockContainer">
                    {form.cantTalles?.map((ct, i) => {
                        return(
                            <>
                            <label>{ct}</label>
                            <input type="number" value={form.stock[i]}
                                onChange={(e) => handleStock(e, i)}></input>
                            </>
                        )
                    })}
                </div>
                {errors.stock && (
                        <p className="errors">{errors.stock}</p>
                    )}
                <label>Precio</label>
                <input
                    name="precio"
                    type="number"
                    value={form.precio}
                    onChange={handleChange}
                    placeholder="Precio"
                />
                {errors.precio && (
                        <p className="errors">{errors.precio}</p>
                    )}
                <label>Categoria</label>
                <select id="selectCat" name="categoria" value={form.categoria} onChange={handleChange}>
                    {
                        categorias?.map((c,i) => {
                            return(
                                <option key={i}>{c}</option>
                            )
                        })
                    }
                </select>
                {errors.categoria && (
                        <p className="errors">{errors.categoria}</p>
                    )}
                <button 
                    id={botonBloqueado !== "disabled" ? "boton" : "botonBloqueado"}
                    disabled={botonBloqueado}>Crear</button>
            </form>
        </div>
    )
}