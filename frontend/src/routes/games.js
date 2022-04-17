import Navigation from "../components/layout/navigation"
import GameCard from "../components/gamecard"
import styled from 'styled-components';
import placeholder from '../images/placeholder.png';

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

export default function Games() {
    return (
      <div>
        <Navigation />
        <StyledContainer>
          <StyledContainerChild>
            <GameCard
              image={placeholder}
              gameTitle={"Title"}
              gameDesc={"Description"}
              gamePieces={"Pieces"}
              width={'20rem'}
              numOwners={'5'}
              timesPlayed={'2'}
            />
          </StyledContainerChild>
        </StyledContainer>
      </div>
    )
}