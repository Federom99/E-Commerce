import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Form, Div, Label, P, Input, Button, MessageContainer, Message } from './styles'

const ForgotPassword = () => {
    const [emailValue, setEmailValue] = useState("")
    const [validEmail, setValidEmail] = useState("")

    document.title = "Pro Ropa - Olvidé mi contraseña";
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    
    useEffect(() => {
        setValidEmail("")
    }, [])

    const ResetPassword = async (e) => {
    e.preventDefault()
    try {
        setValidEmail("")
        const {data} = await axios.post('http://localhost:3001/user/olvide-password/',
            {email: emailValue} , { withCredentials: true }
        )
        setValidEmail(data.msg)
    } catch (error) {
        console.log(error)  
    }
}

    if(validEmail.length >= 1){
        return(
            <MessageContainer>
                <Message>{validEmail}</Message>
            </MessageContainer>
        )
    }


    return (
        <Div>
            <Form onSubmit={ResetPassword}>
                <Label htmlFor='mail'>
                    <P>Ingresar email</P>
                    <Input
                        name='mail'
                        value={emailValue} 
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                </Label>
                <Button>Enviar mail</Button>
            </Form>
        </Div>
    )
}

export default ForgotPassword