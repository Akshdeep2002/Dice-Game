import styled from "styled-components";
import "../App.css";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play a dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Then click on the dice</p>
        <p>
          If the number on the dice matches with your selected number you get
          thrice of the selected number as points
        </p>
        <p>If it is unmatched then, 2 points will be deducted</p>
        <p>If you manage to get more than 10 points , then , you become the dice king</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: .8rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.4rem;
  }

  .text {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;
