import Navigation from "../components/layout/Navigation";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// FILE : Schedule.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// The functions in this file are used to create
// and remove events for a user

const StyledDiv = styled.div`
  border-style: dotted;
  border-width: 1px;
  border-color: #05204A;
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #E1E2EF;
  justify-content: space-evenly;
`;

const StyledContainerChild = styled.div`
  padding: 30px;
`;

//TODO: Get gameTime correctly (currently is in am/pm needs to be 24), and 
// gamePlayers - ???
/*
* FUNCTION : AddNewEvent()
* DESCRIPTION : This function makes the api call to add a new event
* PARAMETERS : gameDate - Date of game
               gameTime - Time of game
               gamePlayers - Players joining
               gameToPlay - Game to be played during event
* RETURNS : N/A
*/
async function AddNewEvent(gameDate, gameTime, gamePlayers, gameToPlay) {
  gamePlayers = gamePlayers.replace(/\s/g, "").split(",") 
  console.log(gamePlayers);
  await axios({
    headers: {"content-type": "application/json"},
    method: "post",
    url: `https://fast-coast-09211.herokuapp.com/api/gameEvent/`,
    data: {
      "game_date": gameDate,
      "game_time": gameTime,
      "players": gamePlayers,
      "game": gameToPlay
    }
  })
}


/*
* FUNCTION : DeleteEvent()
* DESCRIPTION : This function makes the api call to delete an event
* PARAMETERS : game_even
* RETURNS :
*/
async function DeleteEvent(eventID) {
  await axios({
      headers: {"content-type": "application/json"},
      method: "delete",
      url: `https://fast-coast-09211.herokuapp.com/api/gameEvent/${eventID}`
  });
  window.location.reload(false);
}

/*
* FUNCTION : Schedule
* DESCRIPTION : This makes the api call to get all events, and display them
* PARAMETERS : N/A
* RETURNS : Display of events, event creator
*/
export default function Schedule() {
  const [savedDates, setDates] = useState([]);

  const [ gameDate, setGameDate ] = useState("");
  const [ gameTime, setGameTime ] = useState("");
  const [ gamePlayers, setGamePlayers ] = useState([]);
  const [ gameToPlay, setGameToPlay ] = useState("");
  
  // GET ALL Events
  useEffect(async () => {
    const result = await axios(
      "https://fast-coast-09211.herokuapp.com/api/gameEvent/"
    );
    
    setDates(result.data.game_events);
  }, []);

  return (
    <StyledDiv>
      <Navigation/>

      <StyledContainer>
        <Card style={{ width: "20rem", height: "32rem", marginRight: "1rem"}}>
            <Card.Header/>
            <Card.Body>
                <Card.Title>Add New Event</Card.Title>
                <Form onSubmit={() => AddNewEvent(gameDate, gameTime, gamePlayers, gameToPlay)}>
                  <Form.Group>
                    <Form.Label>Game Date</Form.Label>
                    <Form.Control onChange={e => setGameDate(e.target.value)} type="date" />
                    <br/>
                    <Form.Label>Game Time</Form.Label>
                    <Form.Control onChange={e => setGameTime(e.target.value)} type="time" />
                    <br/>
                    <Form.Label>Players</Form.Label>
                    <Form.Control onChange={e => setGamePlayers(e.target.value)} type="text" placeholder="e.g. '2, 3'"/>
                    <br/>
                    <Form.Label>Game</Form.Label>
                    <Form.Control onChange={e => setGameToPlay(e.target.value)} type="text" placeholder="e.g. 'Mouse Trap'"/>
                    <br/>
                    <Form.Control type="submit"/>
                  </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer/>
          </Card>
      </StyledContainer>

      <StyledContainer>
        <StyledContainerChild>
          <Card style={{ width: "30rem"}}>
            <Card.Header>Up Next</Card.Header>
            <ListGroup variant="flush">
              {
                savedDates.length === 0 && <ListGroup.Item>Nothing Upcoming!</ListGroup.Item> 
              }
              {
                savedDates[0] && <ListGroup.Item>{savedDates[0].players} players on {savedDates[0].game_data} time {savedDates[0].game_time}</ListGroup.Item>
              }
              {
                savedDates[1] && <ListGroup.Item>{savedDates[1].players} players on {savedDates[1].game_data} time {savedDates[1].game_time}</ListGroup.Item>
              }

            </ListGroup>
          </Card>
        </StyledContainerChild>

        <StyledContainerChild>
          <Card style={{ width: "60rem"}}>
            <Card.Header>In the Future</Card.Header>
            <ListGroup variant="flush">
              {
                savedDates.length === 0 && <ListGroup.Item>Nothing Upcoming!</ListGroup.Item> 
              }
              {savedDates.map((x, index) =>
                <ListGroup.Item key={index}>{x.game} - {x.players} players on {x.game_data} <Button onClick={() => DeleteEvent(x.id)}>Delete Event</Button></ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </StyledContainerChild>
      </StyledContainer>
    </StyledDiv>
  )
}