import React from "react";
import { Card, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from "react";

// /api/game/
// GET - all games & pieces
// POST - add to list of all games & pieces
// PUT - update name / game pieces of game in list

async function RemoveFromCollection() {
    const game_id = 2; // Game ID
    const user_id = 3;

    const result = await axios({
        headers: {'content-type': 'application/json'},
        method: 'delete',
        url: `https://fast-coast-09211.herokuapp.com/api/user/${user_id}/game/`,
        data: {game_id}
    })
}

const GamePopover = ({ id, gameTitle, timesPlayed, gameObjects }) => {
    return (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{gameTitle}</Popover.Header>
            <Popover.Body>
                This game has been played {timesPlayed} times!<br/><br/>
                This game contains the following objects:<br/>
                    {gameObjects.map((x) => 
                        <p key={id}>- {x.quantity} {x.description}</p>
                    )}
            </Popover.Body>
        </Popover>
    )
}

const CollectionCard = ({ id, image, gameTitle, gameDesc, width }) => {
    const [ timesPlayed, setTimesPlayed ] = useState();
    const [ gameObjects, setGameObjects ] = useState([]);
    
    // GET GAME INFO
    useEffect(async () => {
        const result = await axios(
        `https://fast-coast-09211.herokuapp.com/api/game/${id}/`
        );

        setTimesPlayed(result.data.times_played);
    }, [id]);

    // GET GAME OBJECTS
    useEffect(async () => {
        const result = await axios(
        `https://fast-coast-09211.herokuapp.com/api/game/${id}/gameObjects/`
        );

        setGameObjects(result.data.game_objects);
    }, [id]);

    return (
        <Card className="text-center" style={{ width: width, padding: "5px", marginRight: "1rem" }}>
            <Card.Img variant="right" src={image}/>
            <Card.Header><Card.Title>{gameTitle}</Card.Title></Card.Header>
            <Card.Body>
                <Card.Text>
                    {gameDesc}
                </Card.Text>
            </Card.Body>
            <div className="btn-group" role="group">
                <OverlayTrigger trigger="click" placement="top" overlay={GamePopover({id, gameTitle, timesPlayed, gameObjects})}>
                    <Button type="button" className="btn btn-outline-light btn-secondary">More Info</Button>
                </OverlayTrigger>
                <Button type="button" onClick={RemoveFromCollection} className="btn btn-outline-light btn-secondary">Remove from Collection</Button>
            </div>

            <Card.Footer></Card.Footer>
        </Card>
    )
}

export default CollectionCard;