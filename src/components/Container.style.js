import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    grid-row-gap: 5rem;
    padding-left: 3rem;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(min-content,10rem)) 1fr;
`