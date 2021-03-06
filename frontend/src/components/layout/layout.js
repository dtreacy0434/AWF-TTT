import React from "react";
import styled from "styled-components";

// FILE : GameCard.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// This file contains the Layout Component, it sets up a 
// basic layout for the application

class Layout extends React.Component {
    render() {
        return(
            <StyledContainer>
                <main>{this.props.children}</main>
            </StyledContainer>
        );
    };
};

const StyledContainer = styled.div`
  padding-top: 5rem;
`;

export default Layout;