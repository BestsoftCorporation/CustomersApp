import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import {Redirect} from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);
    try {

      axios({
        method: "post",
        url: "http://localhost:8000/api/login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          localStorage.setItem('TOKEN', JSON.parse(JSON.stringify(response.data))['access_token']);
          return  <Redirect  to="/admin" />
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
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