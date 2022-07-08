import { useState } from "react"
import './form.css'

function validate(form){
    let errors = {};
    if (!form.nombre) {
        errors.nombre = "Se requiere un nombre !";
    } else if (!form.imagen) {
        errors.imagen = "Se requiere una imagen";
    } else if (!form.talle) {
        errors.talle = "Se debe especificar el talle"
    } else if (!form.precio) {
        errors.precio = "Se debe ingresar el precio"
    } else if (!form.stock) {
        errors.stock = "Se debe ingresar stock"
    } else if (!form.categoria) {
        errors.categoria = "Se debe especificar categoria"
    }
    return errors;
};

export default function Form({ submit }) {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
        talle: "",
        precio: "",
        stock: "",
        categoria: "",
    })

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
        if(!form.precio || !form.nombre || !form.stock || !form.imagen || !form.categoria){
            alert("Debe ingresar todos los datos")
            e.preventDefault();
            return
        }
        e.preventDefault();
        submit(form)
        setForm({
            nombre: "",
            descripcion: "",
            imagen: "",
            talle: "",
            precio: "",
            stock: "",
            categoria: "",
        })
    }

    return (
        <div>
            <form className="formulario" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
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
                <input
                    name="talle"
                    type="text"
                    value={form.talle}
                    onChange={handleChange}
                    placeholder="talle"
                />
                {errors.talle && (
                        <p className="errors">{errors.talle}</p>
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
                <label>Stock</label>
                <input
                    name="stock"
                    type="number"
                    value={form.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                />
                {errors.stock && (
                        <p className="errors">{errors.stock}</p>
                    )}
                <label>Categoria</label>
                <input
                    name="categoria"
                    type="text"
                    value={form.categoria}
                    onChange={handleChange}
                    placeholder="Categoria"
                />
                {errors.categoria && (
                        <p className="errors">{errors.categoria}</p>
                    )}
                <button>Crear</button>
            </form>
        </div>
    )
}