import Navigation from "../components/layout/Navigation"
import GameCard from "../components/Gamecard"
import styled from 'styled-components';
import placeholder from '../images/placeholder.png';
import axios from 'axios';
import { useState, useEffect } from "react";


// /api/game/stats/
// GET - return list of stats for all games
// (how many users own this game)
// (how many times a game has been played)

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #E1E2EF;
  `;

const StyledContainerChild = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-right: 100px;
`;

const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #E1E2EF;
`;


export default function Games() {
  const [ gameList, setGameList ] = useState([]);
  
  // GET ALL GAMES
  useEffect(async () => {
    const result = await axios(
      'https://fast-coast-09211.herokuapp.com/api/game/'
    );

    setGameList(result.data.games);
  });

  return (
    <div>
      <Navigation />

      <StyledDiv>
        <h3>Welcome to the Games page!</h3>
      </StyledDiv>

      <StyledContainer>
        <StyledContainerChild>
          {gameList.map((x) => 
            <GameCard key={x.id}
              image={placeholder}
              gameTitle={x.name}
              gameDesc={"Description"}
              width={'20rem'}
            />

          )}
        </StyledContainerChild>
      </StyledContainer>
    </div>
  )
}