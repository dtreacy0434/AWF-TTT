import Navigation from "../components/layout/Navigation";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

async function AddNewEvent() {
  await axios({
    headers: {"content-type": "application/json"},
    method: "post",
    url: `https://fast-coast-09211.herokuapp.com/api/gameEvent/`,
    data: {
      "game_date": "2022-04-18",
      "game_time": "13:00:00",
      "players": [2, 3],
      "game": 1
    }
  })
}

async function DeleteEvent() {
  const game_event_id = 5; // Game ID

  await axios({
      headers: {"content-type": "application/json"},
      method: "delete",
      url: `https://fast-coast-09211.herokuapp.com/api/game/${game_event_id}`
  });
}

export default function Schedule() {
  const [savedDates, setDates] = useState([]);
  
  // GET ALL Events
  useEffect(async () => {
    const result = await axios(
      "https://fast-coast-09211.herokuapp.com/api/gameEvent/"
    );
    
    // TODO: SORT in order of date 
    setDates(result.data.game_events);
  }, []);

  return (
    <StyledDiv>
      <Navigation/>

      <Button onClick={DeleteEvent}>Delete Event</Button>

      <StyledContainer>
        <Card style={{ width: "20rem", height: "32rem", marginRight: "1rem"}}>
            <Card.Header/>
            <Card.Body>
                <Card.Title>Add New Event</Card.Title>
                <Form onSubmit={AddNewEvent}>
                  <Form.Group>
                    <Form.Label>Game Date</Form.Label>
                    <Form.Control type="date" />
                    <br/>
                    <Form.Label>Game Time</Form.Label>
                    <Form.Control type="time" />
                    <br/>
                    <Form.Label>Players</Form.Label>
                    <Form.Control type="text" placeholder="e.g. '2, 3'"/>
                    <br/>
                    <Form.Label>Game</Form.Label>
                    <Form.Control type="text" placeholder="e.g. '1'"/>
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
                savedDates[0] && <ListGroup.Item>{savedDates[0].players} players on {savedDates[0].game_data}</ListGroup.Item>
              }
              {
                savedDates[1] && <ListGroup.Item>{savedDates[1].players} players on {savedDates[1].game_data}</ListGroup.Item>
              }

            </ListGroup>
          </Card>
        </StyledContainerChild>

        <StyledContainerChild>
          <Card style={{ width: "40rem"}}>
            <Card.Header>In the Future</Card.Header>
            <ListGroup variant="flush">
              {
                savedDates.length === 0 && <ListGroup.Item>Nothing Upcoming!</ListGroup.Item> 
              }
              {savedDates.map((x, index) =>
                <ListGroup.Item key={index}>{x.players} players on {x.game_data}</ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </StyledContainerChild>
      </StyledContainer>
    </StyledDiv>
  )
}