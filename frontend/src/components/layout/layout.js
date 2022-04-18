import React from "react";
import styled from "styled-components";

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