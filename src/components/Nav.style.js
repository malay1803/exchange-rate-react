import styled from "styled-components";

export const NavStyle = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
`;

export const LogoStyle = styled.img`
  width: 100px;
  margin: 0px;
  padding: 0px;
`;

export const BaseCurrContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  width: 250px;
  & p {
    font-size: 16px;
    color: #f1faee;
  }
  & button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px 5px 10px;
    background-color: #1d3557;
    width: 90px;
    color: #f1faee;
    border: none;
    font-size: 16px;

    & img {
      width: 30px;
      overflow: hidden;
      background-color: #1d3557;
    }
  }
`;
