import styled from "styled-components";

export const HeroDiv = styled.div`
    grid-column: 2/14;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const HeroText = styled.p`
    font-size: 5rem;
    font-weight: 600;
    /* padding-left: 40px; */
    color: #f1faee;
    letter-spacing: -0.1rem;
    line-height: 5rem;
`

export const HeroTime = styled.button`
    background-color: #e63946;
    color: #f1faee;
    font-size: 2rem;
    width: 20rem;
    height: 5rem;
    outline: none;
    margin-top: 2rem;
    border: none;
`