import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import CartContainer from "../components/CartContainer";
import axios from "axios"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Cookies from 'js-cookie';
import { connect } from 'react-redux'


const UserForm = ({ items }) => {
    const [firstName, setFirstName] = useState(Cookies.get('firstName'));
    const [lastName, setLastName] = useState(Cookies.get('lastName'));
    const [Email, setEmail] = useState(Cookies.get('email'));
    const [Phone, setPhone] = useState(Cookies.get('phone'));
    const handleSubmit = async (e) => {
        e.preventDefault();
        Cookies.set('firstName', e.target.formName[0].value);
        Cookies.set('lastName', e.target.formName[1].value);
        Cookies.set('email', e.target.formEmail.value);
        Cookies.set('phone', e.target.formPhone.value);
        const data = {
            "firstname": e.target.formName[0].value,
            "lastname": e.target.formName[1].value,
            "email": e.target.formEmail.value,
            "phone": e.target.formPhone.value,
            "userAgent": "string",
            "cart": items.map(item => ({
                "product": item.id,
                "price": item.price,
                "count": item.counter
            }))

        }
   
        const response = await axios.post('http://192.168.88.72:8081/api/orders', JSON.stringify(data)).then(response => console.log(response));
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Card >
                <Container className="pt-3">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={Email} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone" onChange={(e) => setPhone(e.target.value)} value={Phone} />
                        </Form.Group>
                    </Form.Row>
                </Container>
            </Card>
            <Form.Group controlId="formCart">
                <CartContainer />
            </Form.Group>
        </Form>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.storage.items
    };
}
export default connect(mapStateToProps)(UserForm);
