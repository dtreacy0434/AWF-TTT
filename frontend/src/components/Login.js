import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../routes/profile.js'

const Login = () => (
    <Card className="text-center" style={{ width: '80rem'}}>
        <Card.Header><Card.Title> Login / Register </Card.Title></Card.Header>
        <Card.Body>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputUsername"/>
                </div>
            </div>

            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword"/>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Login</button>
        </Card.Body>
    </Card>
)

export default Login;