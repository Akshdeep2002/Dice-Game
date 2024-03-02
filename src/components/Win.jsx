import styled from "styled-components";
import "../App.css";

const Win = () => {

  let song=<audio src="../audio/Winning_music.wav"></audio>
  return (
    <WinContainer>
      <div>
        {song}
        <img src="../images/Winner.jpg" alt="" />
        Congratulations ! You are the dice king !!!
      </div>
    </WinContainer>
  );
};

export default Win;

const WinContainer = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  img {
    height: 10rem;
    transition: 2s ease-in;
  }
`;
