import Navigation from "../components/layout/Navigation"
import GameCard from "../components/GameCard"
import styled from "styled-components";
import placeholder from "../images/placeholder.png";
import axios from "axios";
import { Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

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

async function AddNewGame(gameName, gameDesc) {
  await axios({
    headers: {"content-type": "application/json"},
    method: "post",
    url: `https://fast-coast-09211.herokuapp.com/api/game/`,
    data: {
      "name": gameName,
      "description": gameDesc
    }
  })
}

export default function Games() {
  const [ gameList, setGameList ] = useState([]);
  const [ gameName, setGameName ] = useState();
  const [ gameDesc, setGameDesc ] = useState();
  
  // GET ALL GAMES
  useEffect(async () => {
    const result = await axios(
      "https://fast-coast-09211.herokuapp.com/api/game/"
    );

    setGameList(result.data.games);
  }, []);

  console.log(gameName);

  return (
    <div>
      <Navigation />

      <StyledDiv>
        <h3>Welcome to the Games page!</h3>
      </StyledDiv>

      <StyledContainer>
        <StyledContainerChild>
          <Card style={{ width: "20rem", height: "20rem", marginRight: "1rem"}}>
            <Card.Header/>
            <Card.Body>
                <Card.Title>Add New Game</Card.Title>
                <Form onSubmit={() => AddNewGame(gameName, gameDesc)}>
                  <Form.Group>
                    <Form.Label>Game Name:</Form.Label>
                    <Form.Control onChange={setGameName} type="text" placeholder="e.g. Azul"/>
                    <br/>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control onChange={setGameDesc} type="text"/>
                    <Form.Control type="submit"/>
                  </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer/>
          </Card>

          {gameList.map((x) => 
            <GameCard key={x.id}
              id={x.id}
              image={placeholder}
              gameTitle={x.name}
              gameDesc={x.description}
              width={"20rem"}
            />

          )}
        </StyledContainerChild>
      </StyledContainer>
    </div>
  )
}