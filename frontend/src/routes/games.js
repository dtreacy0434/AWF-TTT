import Navigation from "../components/layout/navigation"
import GameCard from "../components/gamecard"
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 20px;
`;

const StyledContainerChild = styled.div`
  width: 25%;
  float: left;
  padding: 20px;
  margin-right: 100px;
`;

export default function Games() {
    return (
      <div>
        <Navigation />
        <StyledContainer>
          <StyledContainerChild>
            <GameCard/>
          </StyledContainerChild>
          <StyledContainerChild>
            <GameCard/>
          </StyledContainerChild>
          <StyledContainerChild>
            <GameCard/>
          </StyledContainerChild>
          <StyledContainerChild>
            <GameCard/>
          </StyledContainerChild>
        </StyledContainer>
      </div>
    )
}