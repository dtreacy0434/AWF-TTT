import Navigation from "../components/layout/Navigation"
import ProfileCard from "../components/ProfileCard"
import Login from "../components/Login";
import styled from 'styled-components';
import placeholder from '../images/placeholder.png';
import CollectionCard from "../components/CollectionCard";
import axios from 'axios';
import { useState, useEffect } from "react";

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
  // These are to be controlled by Login
  let loggedIn = true;
  let currentUser = "TestUser2";
  let userID = null;
  let userBio = "This is a default Bio!";

  const [ userList, setUserList ] = useState([]);
  const [ userGameList, setUserGameList ] = useState([]);
  const [ userNumGames, setNumGames ] = useState();
  const [ userAttGames, setAttGames ] = useState();
  
  // GET ALL USER INFO
  useEffect(async () => {
    const result = await axios(
      'https://fast-coast-09211.herokuapp.com/api/user/'
    );
    
    setUserList(result.data.users);
  });

  // IF currentUser grab the ID
  userList.map((x) => {
    if (x.username === currentUser) {
      userID = x.id;
    }
  })

  // GET USERS GAMES
  useEffect(async () => {
    if (userID !== null) {
      const result = await axios(
        `https://fast-coast-09211.herokuapp.com/api/user/${userID}/game/`
      );
      
      setUserGameList(result.data.games);
    }
  }, [userID]);

  // GET USERS STATS
  useEffect(async () => {
    if (userID !== null) {
      const result = await axios(
        `https://fast-coast-09211.herokuapp.com/api/user/${userID}/stats/`
      );
      
      setNumGames(result.data.num_of_games);
      setAttGames(result.data.games_attended);

      console.log(userNumGames, userAttGames);
    }
  }, [userID]);

  if (loggedIn === true) {
    return (
      <StyledDiv>
        <Navigation />

        <StyledContainer>
          <StyledContainerChild>
            <ProfileCard
              profileImage={placeholder}
              username={currentUser + " - UserID:" + userID}
              bio={userBio}
              numGames={currentUser + " currently owns " + userNumGames + " games!"}
              attendedGames={currentUser + " has attended " + userAttGames + " games!"}
            />
          </StyledContainerChild>
        </StyledContainer>

        <br></br>

        <StyledContainer>
          <h2>My Games</h2>
        </StyledContainer>

        <GameCardParent>
          {
            userGameList.length === 0 && <p> You have no games...</p> 
          }
          {userGameList.map((x) => 
            <CollectionCard
            image={placeholder}
            gameTitle={"Example Game 1"}
            gameDesc={"This is the description for a simple game 1"}
            gamePieces={"Pieces include: " 
              + "1 Game Board, "
              + "4 Player Tokens"}
            width={"20rem"}
            timesPlayed={"2"}
            numOwners={"14"}
            />
          )}
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