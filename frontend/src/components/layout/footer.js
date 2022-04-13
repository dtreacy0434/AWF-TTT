import React from "react";
import styled from 'styled-components';

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                This is a footer
            </StyledFooter>
        );
    };
};

const StyledFooter = styled.div`
    border-top: solid 1px;
    padding-top: 1rem;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
`;


export default Footer;