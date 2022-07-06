import { useState } from 'react'
import { Div , Form , Header , Input , Subtitle, Title , Li , List , Button} from './styles'

export default function NewUser (){
    const [newUser,setNewUser] = useState({})
    const [errors,setErrors] = useState({})
    
    const errorHandler = (data)=>{
        let errors ={}
        if (!data.name) errors.name='obligatory field';

        if (!data.adress) errors.adress='Obligatory field';

        if (!data.email) errors.email='Obligatory field';
        if (data.email){
            if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(data.email)) errors.email='Sumbit a valid email'
        }
        if (!data.age) errors.age='Obligatory field';
        if (data.age){
            if (!/^\d*(\.\d+)?$/.test(data.age)) errors.age='Submit a valid age';
        }

        if (!data.password) errors.password='obligatory field'
        if (data.password){
            if (!/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(data.password)) errors.password='Password must have at least 1 upper case, 1 lower case, one number and 8 characters long'
        }

        return errors
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
    return(
        <Div>
            <Header>
                <Title>Welcome user</Title>
            </Header>
            <Form onSubmit={handleSubmit}>
                <List>
                    <Li>
                        <Subtitle>Name</Subtitle>
                        <Input type="text" name="name" onChange={handleChange}></Input>
                    </Li>
                    <Li>
                        <Subtitle>Email</Subtitle>
                        <Input type="text" name="email" onChange={handleChange}></Input>
                    </Li>
                    <Li>
                        <Subtitle>Password</Subtitle>
                        <Input type="text" name="password" onChange={handleChange}></Input>
                    </Li>
                    <Li>
                        <Subtitle>Adress</Subtitle>
                        <Input type="text" name="adress" onChange={handleChange}></Input>
                    </Li>
                    <Li>
                        <Subtitle>Age</Subtitle>
                        <Input type="number" name="age" onChange={handleChange}></Input>
                    </Li>

                </List>            
                    <Button type='submit'>Submit</Button>
            </Form>
        </Div>
    )
}