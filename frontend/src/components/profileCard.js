import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfileCard = ({ profileImage, username, bio }) => (
    <div>
        <Card className="text-center" style={{ width: '20rem'}}>
            <Card.Img variant="top" src={profileImage}/>
                <Card.Header>
                    <Card.Title> {username} </Card.Title>
                </Card.Header>
            <Card.Body>
                <Card.Text> {bio} </Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default ProfileCard;