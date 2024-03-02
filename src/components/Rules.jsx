import styled from "styled-components";

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
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
