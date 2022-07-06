import styled from "styled-components";

export const Contenido = styled.ul`
& li {
    & a {
        color: ${props => props.theme.colorTextPri};
    }
}

`