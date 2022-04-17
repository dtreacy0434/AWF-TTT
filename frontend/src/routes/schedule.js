import Navigation from "../components/layout/navigation"
import styled from 'styled-components';
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, ListGroup } from "react-bootstrap";
import { format } from "date-fns";

// /api/gameEvent/user/params={month, year}
// GET - return list of planned game nights for user
// + games that will be played for that month & year

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

const StyledDatePickContainer = styled.div`
  display: flex;
  padding-top: 50px;
  padding-left: 50px;
  background-color: #E1E2EF;
`;

const StyledContainerChild = styled.div`
  padding: 30px;
`;

function HandleChange(date, savedDates, setDates) {
  let setUpMeeting = false;

  // Popup thing asking user if they want to set up a
  // meeting for the selected date.. if yes:
  setUpMeeting = true;

  if(setUpMeeting) {
    // Sort Dates to make sure earliest are first
    // Save the Date
    const sortedDates = savedDates.concat(date).sort((a, b) => a - b)
    setDates(sortedDates);
  }
}

export default function Schedule() {
  const [gameDate, setDate] = useState(new Date());
  const [savedDates, setDates] = useState([]);

  return (
    <StyledDiv>
      <Navigation/>

      <StyledDatePickContainer>
        <ReactDatePicker
            selected={gameDate}
            onChange={(date) => HandleChange(date, savedDates, setDates, setDate(date))}
            withPortal
            portalId="root-portal"
            showTimeSelect
          />
      </StyledDatePickContainer>

      <StyledContainer>
        <StyledContainerChild>
          <Card style={{ width: '30rem'}}>
            <Card.Header>Up Next</Card.Header>
            <ListGroup variant="flush">
              {
                savedDates[0] && <ListGroup.Item>{format(savedDates[0], 'MMMM dd, yyyy - h:mm aaa')}</ListGroup.Item>
              }
              {
                savedDates[1] && <ListGroup.Item>{format(savedDates[1], 'MMMM dd, yyyy - h:mm aaa')}</ListGroup.Item>
              }
              {
                savedDates.length === 0 && <ListGroup.Item>Nothing Upcoming!</ListGroup.Item> 
              }
            </ListGroup>
          </Card>
        </StyledContainerChild>

        <StyledContainerChild>
          <Card style={{ width: '40rem'}}>
            <Card.Header>In the Future</Card.Header>
            <ListGroup variant="flush">
              {
                savedDates.length === 0 && <ListGroup.Item>Nothing Upcoming!</ListGroup.Item> 
              }
              {savedDates.map((x, index) => 
                <ListGroup.Item key={index}>{format(x, 'MMMM dd, yyyy - h:mm aaa')}</ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </StyledContainerChild>
      </StyledContainer>
    </StyledDiv>
  )
}