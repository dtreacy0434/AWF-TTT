import Navigation from "../components/layout/navigation"
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 20px;
`;

export default function Places() {
    return (
      <div>
        <Navigation />
        <StyledContainer>
          <h1>PLACES</h1>
        </StyledContainer>
      </div>
    )
}