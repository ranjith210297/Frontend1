import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./login.css";
import { Message } from "rsuite";
import Predictor from "./Predictor";
import { LinkContainer } from "react-router-bootstrap";
import {useHistory} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(document.getElementById("emailid").value)
    alert(document.getElementById("pwd").value)
    axios.post("https://app2197.herokuapp.com/login",{
        "email":document.getElementById("emailid").value,
        "password":document.getElementById("pwd").value
    }).then(res =>{
        alert(res.data.status)
        if(res.data.status && res.data.code === 1){
            alert("entered")
            console.log(res.data.msg)
            setMessage(res.data.msg)
            // setMessage(res.data.email)
            
            
            
        }else if(res.data.status){
          alert("entered2")
          history.push({
            pathname: "/Predictor",
            
          })
        }   
    })
  }

  return (
    <div className="Login">
        <h4>{message}</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            id="emailid"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>



      </Form>
    </div>
  );
}