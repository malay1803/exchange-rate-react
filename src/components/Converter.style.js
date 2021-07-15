import styled from "styled-components";

export const ConverterBox = styled.div`
  grid-column: 3/13;
  background-color: #f1faee;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, auto));
  justify-content: center;
  padding: 5rem 3rem;

  & div {
    background-color: #f1faee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1 {
      background-color: #f1faee;
      font-size: 3rem;
      line-height: 25px;
      font-weight: lighter;
      color: #e63946;
      text-transform: uppercase;
    }
    & p {
      font-size: 1rem;
      color: black;
      background-color: #f1faee;
      margin-top: 10px;
    }
  }

  & .convertor {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    
    & .from,
    & .to {
      height: 100%;
      margin-top: 10%;
      & label {
        font-size: 1rem;
        background-color: #f1faee;
        text-transform: uppercase;
        text-align: left;
      }
      & select {
        width: 80%;
        height: 50%;
        font-size: 1.5rem;
        background-color: #a8dadc;
        border: 3px solid #457b9d;
        text-align: center;
        & option {
          width: 100%;
          height: 10%;
          font-size: 1.5rem;
          background-color: #a8dadc;
        }
      }
    }

    & .swapButtonDiv{
      width: 100%;
      height: 80%;
      background: #f1faee;
      grid-column: 1/3;
    }

    & .swapButton{
      width: 20rem;
      height: 5rem;
      background-color: #e63946;
      color: white;
      font-size: 2rem;
      transition: .5s all;
      &:hover{
        background-color: red;
      }
    }
  }

  & .amount {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & input {
      width: 60%;
      height: 20%;
      background-color: #a8dadc;
      border: 3px solid #457b9d;
      outline: none;
      color: black;
      font-size: 2rem;
      padding: 2rem;
    }
      & .rate {
        font-size: 2rem;
      }
      & .convertedAmount{
        font-size: 2.5rem;
        border-bottom: thick double #457b9d;
      }
  }
`;
