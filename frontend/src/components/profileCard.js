import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import placeholder from '../images/placeholder.png';

class ProfileCard extends Component {
    render() {
        return (
            <div>
                <Card className="text-center" style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={placeholder}/>
                    <Card.Header><Card.Title>User Display Name</Card.Title></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Profile Bio?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProfileCard;