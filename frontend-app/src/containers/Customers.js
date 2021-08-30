import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
const moment = require('moment');

export default function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [subject, setSubject] = useState("");
    const [problemdescription, setProblemDescription] = useState("");
    const [value, onChange] = useState(new Date());

    function validateForm() {
        return email.length > 0 && name.length > 0 && company.length > 0 && subject.length > 0 && problemdescription.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        try {

            axios.post('http://127.0.0.1:8000/api/customers', {
                Name: name,
                Phone: phone,
                Company: company,
                Email: email,
                Subject: subject,
                ProblemDescription: problemdescription,
                CallbackDateTime: moment(value).format('YYYY-MM-DD HH:mm:ss')
            })
                .then(function (response) {
                    console.log(response);
                    alert("Successefully send!")
                })
                .catch(function (error) {
                    console.log(error);
                    alert( moment(value).format('DD-MM-YYYY HH:mm'));
                });


        } catch (e) {
            alert(e.message);
        }
    }


    return (
        <div className="Customers">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="Subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="ProblemDescription">
                    <Form.Label>ProblemDescription</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={problemdescription}
                        onChange={(e) => setProblemDescription(e.target.value)}
                    />
                </Form.Group>

                <div>
                    <DateTimePicker
                        onChange={onChange}
                        value={value}
                        format={"y-MM-dd h:mm:ss a"}
                    />
                </div>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Send
                </Button>
            </Form>
        </div>
    );
}