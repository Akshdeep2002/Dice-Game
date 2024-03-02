import styled from "styled-components";
import "../App.css";

export const Button = styled.button`
  color: white;
  padding: 1rem 1.8rem;
  background: #000;
  border-radius: .5rem;
  min-width: 22rem;
  border: none;
  font-size: 1.6rem;
  border: .1rem solid transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: white;
    color: black;
    border: .1rem solid black;
    transition: 0.1s;
  }
`;