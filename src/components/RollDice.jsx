import styled from "styled-components";
import "../App.css";

const RollDice = ({ rollDice, currentDice }) => {
  

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 2.4rem;
  }
`;
