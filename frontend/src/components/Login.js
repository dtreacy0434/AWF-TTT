import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../routes/Profile.js";
import "../routes/Home.js";
import axios from "axios";
import Profile from "../routes/Profile.js";
import Cookies from 'universal-cookie';


export const cookies = new Cookies();





// FILE : Login.js
// PROJECT : SENG3080 - Group Project
// PROGRAMMERS : 
// FIRST VERSION : 
// DESCRIPTION :
// The functions in this file are used to set
// up the Login/Registration for the application

/*
* FUNCTION : Submit()
* DESCRIPTION : Submitting form event handler
* PARAMETERS : N/A
* RETURNS : N/A
*/

async function Submit(event) {
    await axios({
        headers: {"content-type": "application/json"},
        method: "post",
        url: `https://fast-coast-09211.herokuapp.com/api/user/login/`,
        data: {"username": document.getElementById("uname").value}
    }).then(function(response){
        if(response.data.id){
            cookies.set('loggedIn', true);
            cookies.set('currentUser', response.data.username);
            cookies.set('userID', response.data.id);
            window.location.href = "/";
        }
    }

    )
}

export default class Login extends Component {

    render() {
        return (
            <Card className="text-center" style={{ padding: "5px", marginRight: "1rem" }}>
                <Card.Body>
                    <Form.Group>
                        <div className="form-group">
                            <h3>Enter Username</h3>
                            <input type="text" id="uname" className="form-control" placeholder="Enter Username" />
                        </div>
                        <br></br>
                        <button type="button" onClick={(e)=>Submit(e)} className="btn btn-primary btn-block"> Submit </button>
                    </Form.Group>
                    </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
    
        )
    }
}
