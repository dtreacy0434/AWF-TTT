import Navigation from "../components/layout/navigation"
import styled from 'styled-components';
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, ListGroup } from "react-bootstrap";
import { compareAsc, format } from "date-fns";

const StyledDatePickerContainer = styled.div`
  padding: 20px;
  border-style: solid;
  border-width: 1px;
  width: max-content;
`;

const StyledContainer = styled.div`
  padding: 20px;
`;

const StyledContainerChild = styled.div`
  width: 25%;
  float: left;
  padding: 20px;
  margin-right: 100px;
`;

function HandleChange(date, savedDates, setDates) {

  savedDates.map((x) => {
    if (compareAsc(x, date)) {
      console.log(compareAsc(x, date));
    }
  })

  // Popup thing asking user if they want to set up a
  // meeting for the selected date.. if yes:

  let setUpMeeting = true;

  if(setUpMeeting) {
    // Check if date already in
    

    // If date doesnt already exist:
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
    <div>
      <Navigation/>
      <br></br>

      <StyledDatePickerContainer>
        <ReactDatePicker
          selected={gameDate}
          onChange={(date) => HandleChange(date, savedDates, setDates, setDate(date))}
          withPortal
          portalId="root-portal"
          showTimeSelect
        />
      </StyledDatePickerContainer>

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
          <Card style={{ width: '40rem', marginLeft: '3rem'}}>
            <Card.Header>In the Future</Card.Header>
            <ListGroup variant="flush">
              {savedDates.map((x, index) => 
                <ListGroup.Item key={index}>{format(x, 'MMMM dd, yyyy - h:mm aaa')}</ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </StyledContainerChild>
      </StyledContainer>
    </div>
  )
}