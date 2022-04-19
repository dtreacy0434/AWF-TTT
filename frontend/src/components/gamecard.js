import React from "react";
import { Card, Button, Popover, OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";

// FILE : GameCard.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// This file contains the GameCard component, displays information about games

/*
* FUNCTION : AddToCollection()
* DESCRIPTION :  This function will make the api call to add a 
                game to a users collection
* PARAMETERS : game_id - ID of game to add
* RETURNS : N/A
*/
async function AddToCollection(game_id) {
    const user_id = 2; 

    await axios({
        headers: {"content-type": "application/json"},
        method: "post",
        url: `https://fast-coast-09211.herokuapp.com/api/user/${user_id}/game/`,
        data: {"game_id": game_id}
    })
}

/*
* FUNCTION : DeleteGame()
* DESCRIPTION : This function will delete a game from the games list
* PARAMETERS : id - Game ID
* RETURNS : N/A
*/
async function DeleteGame(id) {
    await axios({
        headers: {'content-type': 'application/json'},
        method: 'delete',
        url: `https://fast-coast-09211.herokuapp.com/api/game/${id}`
    });

    window.location.reload(false);
}

/*
* FUNCTION : GamePopover
* DESCRIPTION : This will display a small popover with moreinfo on a game
* PARAMETERS : id - Game ID
               gameTitle - Title of game
               timesPlayed - Times the games been played
               gameObjects - Objects the game owns
* RETURNS : Display the popover
*/
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

/*
* FUNCTION : GameCard
* DESCRIPTION : This will make the api calls to get game information and display
                a Card component with that information
* PARAMETERS : id - Game ID
               image - Game Image
               gameTitle - Game Title
               gameDesc - Game Description
               width - width of the card
* RETURNS : Display Cards with game information
*/
const GameCard = ({ id, image, gameTitle, gameDesc, width }) => {
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
        <Card className="text-center" style={{ width: width, padding: "5px", marginRight: "1rem", marginBottom: "1rem" }}>
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
                <Button type="button" onClick={() => AddToCollection(id)} className="btn btn-outline-light btn-success">Add to Collection</Button>
                <Button type="button" onClick={() => DeleteGame(id)} className="btn btn-outline-light btn-danger">Delete</Button>
            </div>

            <Card.Footer></Card.Footer>
        </Card>
    )
}

export default GameCard;