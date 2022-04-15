import Navigation from "../components/layout/Navigation"
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 20px;
`;

export default function Home() {
    return (
      <div>
        <Navigation />
        <StyledContainer>
          <h1>HOME</h1>
        </StyledContainer>
      </div>
    )
}