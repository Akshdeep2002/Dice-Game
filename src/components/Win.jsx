import styled from "styled-components";
import "../App.css";

const Win = () => {

  return (
    <WinContainer>
      <div>
        <img src="../images/Winner.jpg" alt="" />
        <p>Congratulations ! You are the dice king !!!</p>
      </div>
    </WinContainer>
  );
};

export default Win;

const WinContainer = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  p{
    display: flex;
  }

  img {
    height: 10rem;
    transition: 2s ease-in;
  }
`;
