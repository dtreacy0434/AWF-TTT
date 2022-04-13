import styled from 'styled-components';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledNav>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button href="/" variant="secondary" size="lg">Home</Button>
                        <Button href="/games" variant="secondary" size="lg">Games</Button>
                        <Button href="/places" variant="secondary" size="lg">Places</Button>
                        <Button href="/schedule" variant="secondary" size="lg">Schedule</Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button href="/profile" variant="secondary" size="lg">Profile</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </StyledNav>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.div`
    display: block;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const StyledNav = styled.nav`
    border-bottom: solid 1px;
    padding-bottom: 1rem;
`;

export default Navigation;