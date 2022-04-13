import Navigation from "../components/layout/navigation"
import ProfileCard from "../components/profileCard"
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledContainerChild = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Profile() {
    return (
      <StyledContainer>
        <Navigation />
        <StyledContainerChild>
          <ProfileCard/>
        </StyledContainerChild>
      </StyledContainer>
    )
}