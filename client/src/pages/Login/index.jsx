import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Div,
    DivBtn,
    Input,
    List,
    Google,
    Gith,
    InputDiv,
    Section,
    Form,
    Blist
} from "./styles"
export default function Login (){
    const [newUser,setNewUser]=useState({})
    const [errors,setErrors]=useState({})
    const navigate = useNavigate()
    const errorHandler = (data)=>{

        if (!data.email) errors.email='Obligatory field';
        if (data.email){
            if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(data.email)) errors.email='Sumbit a valid email'
        }
        if (!data.password) errors.password='obligatory field'
        if (data.password){
            if (!/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(data.password)) errors.password='Password must have at least 1 upper case, 1 lower case, one number and 8 characters long'
        }
    }
    const handleChange = (event)=>{
        setNewUser({
            ...newUser,
            [event.target.name]:event.target.value,
        })
        setErrors(errorHandler({
            ...newUser,
            [event.target.name]:event.target.value
        }))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!Object.keys(errors).length && Object.keys(newUser).length){
            console.log(newUser)            
        }
        else {
            alert('Check for errors')
            console.log(errors)
        }
    }
    const register = ()=>{
        navigate("/register")
    }
    return(
        <Div>
            <Section>
            <DivBtn>
                <Google>
                    Sign in with Google
                </Google>
                <Gith>
                    Sign in with Github
                </Gith>
            </DivBtn>
            <InputDiv>
                <Form onSubmit={handleSubmit}>                 
                    <List>
                        <li>                        
                            <Input placeholder="e-mail" type="text" name="email" onChange={handleChange}/>
                        </li>
                        <li>
                            <Input placeholder="password" type="text" name="password" onChange={handleChange}/>
                        </li>
                    </List>
                </Form>            
                <Blist>
                    <li><button onClick={register} > Sign up</button></li>
                    <li><button type="submit">Log in</button></li>
                </Blist>
            </InputDiv>
            </Section>
            
            
        </Div>
    )
}