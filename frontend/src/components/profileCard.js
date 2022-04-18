import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileCard = ({ profileImage, username, bio, numGames, attendedGames }) => (
    <div>
        <Card className="text-center" style={{ width: "20rem", marginRight: "1rem"}}>
            <Card.Img variant="top" src={profileImage}/>
                <Card.Header>
                    <Card.Title> {username} </Card.Title>
                </Card.Header>
            <Card.Body>
                <Card.Text> {bio} </Card.Text>
                <br/>
                <Card.Text> {numGames} </Card.Text>
                <br/>
                <Card.Text> {attendedGames} </Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default ProfileCard;