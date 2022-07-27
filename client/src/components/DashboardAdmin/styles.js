import styled from "styled-components";

export const TotalesStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    padding: 1rem 1rem 1rem 0;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.cardBackground};
`

export const H4 = styled.h4`
    color: ${({theme}) => theme.color};
`

export const H2 = styled.h2`
    color: ${({theme}) => theme.color};
`

export const Milestone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-right: 3px solid ${({theme}) => theme.color};
    padding-right: 4rem;
    padding-left: 1rem;
`

export const Icon = styled.div`
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    background-color: #D9D8D8;
`

export const GraficosBarras = styled.div`
    background-color: ${({theme}) => theme.cardBackground};
    width: 27%;
    margin-top: 40px;
    margin-left: 20px;
    padding: 10px;
    border-radius: 1rem;
    align-items:initial;
    /* position: bottom; */
`

export const GraficoLineas = styled.div`
    background-color: ${({theme}) => theme.cardBackground};
    width: 70%;
    height: 563px;
    margin-top: 40px;
    padding: 10px;
    border-radius: 1rem;
`
