import styled from "styled-components";
import { Button } from "../styled/Buttons";
import "../App.css";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="front">
        <div>
          <img src="./images/dices.png" alt="" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button className="button" onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
.front{
  max-width: 118rem;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
}

  .content h1 {
    font-size: 9.6rem;
    white-space: nowrap;
  }
`;
