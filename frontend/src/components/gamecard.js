import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// /api/game/
// GET - all games & pieces
// POST - add to list of all games & pieces
// PUT - update name / game pieces of game in list

function LoadMoreInfo() {
    console.log("LOAD MORE");
}

function AddToCollection() {
    console.log("ADD TO COLLECTION");
}

function UpdateGame() {
    console.log("Update Game");
}

const GameCard = ({ image, gameTitle, gameDesc, width }) => (
    <Card className="text-center" style={{ width: width, padding: '5px', marginRight: '1rem' }}>
        <Card.Img variant="top" src={image}/>
        <Card.Header><Card.Title>{gameTitle}</Card.Title></Card.Header>
        <Card.Body>
            <Card.Text>
                {gameDesc}
            </Card.Text>
        </Card.Body>
        <div className="btn-group" role="group">
            <Button type="button" onClick={LoadMoreInfo} className="btn btn-outline-light btn-secondary">More Info</Button>
            <Button type="button" onClick={AddToCollection} className="btn btn-outline-light btn-secondary">Add to Collection</Button>
            <Button type="button" onClick={UpdateGame} className="btn btn-outline-light btn-secondary">Update</Button>
        </div>
        <Card.Footer></Card.Footer>
    </Card>
)

export default GameCard;