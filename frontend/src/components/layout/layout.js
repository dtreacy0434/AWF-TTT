import React from "react";
import Footer from "./footer";
import styled from 'styled-components';

class Layout extends React.Component {
    render() {
        return(
            <StyledContainer>
                <main>{this.props.children}</main>
                <Footer />
            </StyledContainer>
        );
    };
};

const StyledContainer = styled.div`
  padding-top: 5rem;
`;

export default Layout;