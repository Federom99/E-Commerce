import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Div, Form, Label, P, Button, Input } from '../ForgotPasword/styles'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const navigate = useNavigate()
    const {token} = useParams()
    const [newPassword, setNewPassword] = useState({
        password: "",
        validPassword: true,
    })
    const [validToken, setValidToken] = useState({
        tokenValid: false,
        msg: 'Token invalido'
    })

    const ChangePassword = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post(`http://localhost:3001/user/olvide-password/${token}`,
                {password: newPassword} , { withCredentials: true }
            )
            setTimeout(() => {
                navigate("/login")
            }, 2000)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        const checkToken = async () => {
            const {data} = await axios.get(`http://localhost:3001/user/olvide-password/${token}`)
            setValidToken(data), { withCredentials: true }
        }

        checkToken()
    }, [])

    if(validToken.tokenValid){
        return (
        <Div>
            <Form onSubmit={ChangePassword}>
                <Label>
                    <P>Ingresar una nueva contraseña</P>
                    <Input
                        type='password'
                        placeholder='Nueva contraseña' 
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                </Label>
                <Button disabled={newPassword.validPassword}>Cambiar contraseña</Button>
            </Form>
        </Div>
        )
    }
}

export default ResetPassword