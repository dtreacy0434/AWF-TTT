import React from "react";
import logo from "../../images/logo.png";
import styled from 'styled-components';

class Header extends React.Component {
    render() {
        return(
            <StyledHeader>
                <h1><img src={logo} alt="Logo"/> TableTop </h1>
            </StyledHeader>
        );
    };
};

const StyledHeader = styled.header`
    padding-left: 1rem;
    background-color: #E1E2EF;
`;

export default Header;