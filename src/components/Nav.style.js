import styled from "styled-components";

export const NavStyle = styled.nav`
  grid-column: 1/15;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoStyle = styled.img`
  width: 100px;
  margin-right: auto;
`;

export const BaseCurrContainerStyle = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  & p {
    color: #f1faee;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: .5rem;
  }
  & button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px 5px 10px;
    background-color: #e63946;
    width: 90px;
    color: #f1faee;
    border: none;
    font-size: 1.5rem;
    margin-left: 2rem;

    & img {
      width: 30px;
      overflow: hidden;
      background-color: #e63946;
    }
  }
`;
