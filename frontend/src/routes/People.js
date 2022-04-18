import Navigation from "../components/layout/Navigation"
import ProfileCard from "../components/ProfileCard"
import styled from "styled-components";
import placeholder from "../images/placeholder.png";
import axios from "axios";
import { useState, useEffect } from "react";

const StyledDiv = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #E1E2EF;
`;

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #E1E2EF;
  `;

const StyledContainerChild = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-right: 150px;
`;

export default function People() {
    const [ userList, setUserList ] = useState([]);
    
    // GET ALL USER INFO
    useEffect(async () => {
      const result = await axios(
        "https://fast-coast-09211.herokuapp.com/api/user/"
      );
      
      setUserList(result.data.users);
    }, []);

    return (
        <div>
          <Navigation />
    
          <StyledDiv>
            <h3>Welcome to the People page!</h3>
          </StyledDiv>
    
          <StyledContainer>
            <StyledContainerChild>
              {userList.map((x) => 
                <ProfileCard key={x.id}
                  profileImage={placeholder}
                  username={x.username}
                  numGames={x.username + " owns # games"}
                  attendedGames={x.username + " has attended # games"}
                />
              )}
            </StyledContainerChild>
          </StyledContainer>
        </div>
    )    
}  