import Navigation from "../components/layout/Navigation"
import styled from 'styled-components';
import { Card } from "react-bootstrap";
import image from '../images/playinggame.jpg';

const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default function Home() {
    return (
      <div>
        <Navigation />
        <StyledContainer>
          <h3>Welcome to the home page!</h3>
        </StyledContainer>
        
        <StyledContainer>
          <Card className="text-center" style={{ width: '40rem'}}>
            <Card.Header/>
            <Card.Body>
              <Card.Text>
                I DONT KNOW WHAT TO WRITE HERE<br></br>
                probably something fun about games?
              </Card.Text>
            </Card.Body>
            <Card.Footer/>
          </Card>

          <Card className="text-center" style={{ width: '40rem'}}>
            <Card.Header/>
            <Card.Img variant="top" src={image}/>
            <Card.Footer/>
          </Card>
        </StyledContainer>
      </div>
    )
}