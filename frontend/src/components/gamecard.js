import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// /api/game/
// GET - all games & pieces
// POST - add to list of all games & pieces
// PUT - update name / game pieces of game in list

const GameCard = ({ image, gameTitle, gameDesc, gamePieces, numOwners, width, timesPlayed }) => (
    <Card className="text-center" style={{ width: width, padding: '5px', marginRight: '1rem' }}>
        <Card.Img variant="top" src={image}/>
        <Card.Header><Card.Title>{gameTitle}</Card.Title></Card.Header>
        <Card.Body>
            <Card.Text>
                {gameDesc}
            </Card.Text>
            <Card.Text>
                {gamePieces}
            </Card.Text>
            <Card.Text>
                Times Played: {timesPlayed}
            </Card.Text>
        </Card.Body>
        <div className="btn-group" role="group">
            <Button type="button" className="btn btn-outline-light btn-secondary">Add to Collection</Button>
            <Button type="button" className="btn btn-outline-light btn-secondary">Update</Button>
        </div>
        <Card.Footer>Number of people that own this: {numOwners}</Card.Footer>
    </Card>
)

export default GameCard;