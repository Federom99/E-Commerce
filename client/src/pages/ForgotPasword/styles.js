import styled from "styled-components";

export const MessageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 140px;
    width: 100%;
    height: 100vh;
`

export const Message = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: #437512;
`

export const Div = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 140px;
`
export const Form = styled.form`
    padding: 1rem;
    margin: 0 auto;
    min-width: 325px;
    width: 250px;
    height: 250px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0;
`

export const P = styled.p`
    margin-bottom: 1rem;
    align-self: center;
    color: ${({theme}) => theme.color};
    font-weight: 600;
`

export const Input = styled.input`
    margin: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 100%;
    height: 30px;
    border: 2px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
`

export const Button = styled.button`
    align-self: center;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
    padding: 10px;
    background-color: #181818;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
        border-color: black;
        border-style: solid;
  }
`