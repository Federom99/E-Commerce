import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getTalles} from "../../redux/actions/product"
import './form.css'
import axios from "axios";
import { toast , ToastContainer } from "react-toastify";

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

export default function Form({ submit }) {
    const dispatch = useDispatch();
    const categorias = useSelector(state => state.product.allCategories);
    const talles = useSelector(state => state.product.allTalles);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
        talle: [],
        precio: "",
        stock: [],
        categoria: "Remeras",
        cantTalles: []
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
        if(e.target.name !== "imagen"){
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }else{
            console.log(e.target.files)
            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            })
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formDataImg = new FormData();
        formDataImg.append("file", form.imagen);
        formDataImg.append("upload_preset", "wsnlejcx");
        try{
        const imgUpload = await axios.post('https://api.cloudinary.com/v1_1/daneopbmn/image/upload', formDataImg)

        const producto = {
            nombre: form.nombre,
            precio: form.precio,
            descripcion: form.descripcion,
            imagen: imgUpload.data.url,
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
        window.scrollTo(0,0)
        }catch(e){
            console.log(e)
            return e
        }
    }

    return (
        <div id="contenedorForm">
                        <ToastContainer
                    position="top-center"                    
                    draggable
                />
            <form style={{overflow:"hidden"}} className="formulario" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className={errors.nombre && "inputError"}
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
                    className={errors.descripcion && "inputError"}
                />
                {errors.descripcion && (
                        <p className="errors">{errors.descripcion}</p>
                    )}
                <label>Imagen</label>
                <input
                    name="imagen"
                    type="file"
                    onChange={handleChange}
                    className={errors.imagen && "inputError"}
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
                                onChange={(e) => handleStock(e, i)}
                                className={errors.stock && "inputError"}></input>
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
                    className={errors.precio && "inputError"}
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