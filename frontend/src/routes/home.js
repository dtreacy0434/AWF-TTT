import Navigation from "../components/layout/Navigation"
import styled from "styled-components";
import { Card } from "react-bootstrap";
import image from "../images/playinggame.jpg";

// FILE : Home.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// The functions in this file are used to set
// up the Home page for the site

const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

/*
* FUNCTION : Home()
* DESCRIPTION : This function is the homepage, it displays homepage stuff
* PARAMETERS : N/A
* RETURNS : Display the Homepage items
*/
export default function Home() {
    return (
      <div>
        <Navigation />
        <StyledContainer>
          <h3>Welcome to the home page!</h3>
        </StyledContainer>
        
        <StyledContainer>
          <Card className="text-center" style={{ width: "40rem"}}>
            <Card.Header/>
            <Card.Body style={{ marginTop: "6rem"}}>
              <h4>Do you have tons of tabletop games?</h4>
              <h5>Do you need a way to organize your:</h5>
              <h5>Games?</h5>
              <h5>Playtimes?</h5>
              <br/>
              <h3>WELL LOOK NO MORE!</h3>
              <br/>
              <h5>TableTop, the tracker you need.</h5>
            </Card.Body>
            <Card.Footer/>
          </Card>

          <Card className="text-center" style={{ width: "40rem"}}>
            <Card.Header/>
            <Card.Img variant="top" src={image}/>
            <Card.Footer/>
          </Card>
        </StyledContainer>
      </div>
    )
}