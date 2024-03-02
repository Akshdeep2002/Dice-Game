import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.1s;
  }
`;