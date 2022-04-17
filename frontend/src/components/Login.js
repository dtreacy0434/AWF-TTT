import React, { Component } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../routes/Profile.js'
import axios from 'axios';
import { useState, useEffect } from "react";

function Submit() {
    
}

export default class Login extends Component {
    
    render() {
        return (
            <Card className="text-center" style={{ padding: '5px', marginRight: '1rem' }}>
                <Card.Body>
                    <form>
                        <div className="form-group">
                            <h3>Enter Username</h3>
                            <input type="text" className="form-control" placeholder="Enter Username"/>
                        </div>
                        <br></br>
                        <button type="submit" onSubmit={Submit} className="btn btn-primary btn-block"> Submit </button>
                    </form>
                    </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
    
        )
    }
}