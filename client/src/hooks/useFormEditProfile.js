import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../redux/actions/userProfile"

export default function useFormEditProfile(){

    const dispatch = useDispatch()

    const nombre = /([a-zA-Z]){3,20}/

    const apellido = /([a-zA-Z]){3,20}/

    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
   
    const {user} = useSelector(state => state.userReducer)

    const [disabled, setDisabled] = useState(true)

    const [inputValues, setInputValues] = useState({
        nombre: user?.nombre,
        apellido: user?.apellido,
        mail: user?.email || user?.mail,
        telefono: user?.telefono
    })

    const [inputErrors, setInputErrors] = useState({
        nombre: "",
        apellido: "",
        mail: "",
        telefono: ""
    })

    useEffect(() => {
        let nombre = inputErrors.nombre === ""
        let apellido = inputErrors.apellido === ""
        let mail = inputErrors.mail === ""
        if(nombre && apellido && mail){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [inputValues.nombre, inputValues.apellido, inputValues.mail])

    function editField(name, value){
        setInputValues(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        switch(name){
            case 'nombre':
                if(nombre.test(value)){
                        setInputValues(prevFormData => {
                            return {
                                ...prevFormData,
                                [name]: value
                            }
                        })
                        setInputErrors(prevFormData => {
                            return {
                                ...prevFormData,
                                [name]: ""
                            }
                        })
                }else {
                    setInputErrors(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: 'El nombre debe tener mas de 2 caracteres y menos de 21'
                        }
                    })
                }
                break
            case 'apellido':
                if(apellido.test(value)){
                    setInputValues(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: value
                        }
                    })
                    setInputErrors(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: ""
                        }
                    })
            }else {
                setInputErrors(prevFormData => {
                    return {
                        ...prevFormData,
                        [name]: 'El apellido debe tener mas de 2 caracteres y menos de 21'
                    }
                })
            }
            break
            case 'mail':
                if(email.test(value)){
                    setInputValues(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: value
                        }
                    })
                    setInputErrors(prevFormData => {
                        return {
                            ...prevFormData,
                            [name]: ""
                        }
                    })
            }else {
                setInputErrors(prevFormData => {
                    return {
                        ...prevFormData,
                        [name]: 'El email es invalido'
                    }
                })
            }
            break
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(updateUser(user.id, inputValues))
    }

    return {
        disabled,
        inputValues,
        setInputValues,
        inputErrors,
        editField,
        handleSubmit
    }
}