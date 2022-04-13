import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import placeholder from '../images/placeholder.png';

class GameCard extends Component {
    render() {
        return (
            <Card className="text-center" style={{ width: '25rem'}}>
                <Card.Img variant="top" src={placeholder}/>
                <Card.Header><Card.Title>Game Title</Card.Title></Card.Header>
                <Card.Body>
                    <Card.Text>
                        Short Description of game
                    </Card.Text>
                    <Button>Expand</Button>
                </Card.Body>
                <Card.Footer>Footer</Card.Footer>
            </Card>
        );
    }
}

export default GameCard;