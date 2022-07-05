import styled from 'styled-components'

export const Section = styled.section`
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
    gap: 2rem;
    padding: 1rem;
`