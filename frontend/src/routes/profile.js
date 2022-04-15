import Navigation from "../components/layout/Navigation"
import ProfileCard from "../components/ProfileCard"
import Login from "../components/Login";
import styled from 'styled-components';
import placeholder from '../images/placeholder.png';
import CollectionCard from "../components/CollectionCard";

// /api/game/user/
// GET - list of games owned by user
// POST - add to users owned games list
// DELETE - remove game from owned games list

// /api/game/user/stats/
// GET - return list of stats for games a user owns

const StyledContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #E1E2EF;
  justify-content: space-evenly;
`;

const StyledContainerChild = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  background-color: #E1E2EF;
  border-style: dotted;
  border-width: 1px;
  border-color: #05204A;
`;

const GameCardParent = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
`;


export default function Profile() {
  let loggedIn = true;

  if (loggedIn === true) {
    return (
      <StyledDiv>
        <Navigation />

        <StyledContainer>
          <StyledContainerChild>
            <ProfileCard
              profileImage={placeholder}
              username={"New User"}
              bio={"This is a default bio"}
            />
          </StyledContainerChild>
        </StyledContainer>

        <br></br>

        <StyledContainer>
          <h1>My Games</h1>
        </StyledContainer>

        <GameCardParent>
          <CollectionCard
            image={placeholder}
            gameTitle={"Example Game 1"}
            gameDesc={"This is the description for a simple game 1"}
            gamePieces={"Pieces include: " 
              + "1 Game Board, "
              + "4 Player Tokens"}
            width={"15rem"}
            timesPlayed={"2"}
            numOwners={"14"}
        />

          <CollectionCard
            image={placeholder}
            gameTitle={"Example Game 2"}
            gameDesc={"This is another description"}
            gamePieces={"Pieces include: " 
              + "1 Game Board, "
              + "6 Player Tokens, "
              + "1 Dice"}
            width={"15rem"}
            timesPlayed={"23"}
            numOwners={"144"}
        />
        </GameCardParent>

        <StyledContainer/>
      </StyledDiv>
    )
  }
  else {
    return (
      <StyledDiv>
        <Navigation />
        <StyledContainer>
          <h1>You need to log in!</h1>
        </StyledContainer>
        <StyledContainer>
          <Login />
        </StyledContainer>
      </StyledDiv>
    )
  }
}