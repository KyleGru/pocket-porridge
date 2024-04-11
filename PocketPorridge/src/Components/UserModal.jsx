import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AuthService from '../utils/auth.js';
import { LOGIN, CREATE_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const UserModal = (props) => {
    const { title, show, handleClose, handler } = props
    const [login] = useMutation(LOGIN)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [createUser, { error, data }] = useMutation(CREATE_USER)

    UserModal.propTypes = {
        title: PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (title === 'Login') {
                const { data } = await login({
                    variables: { ...formData },
                });
                console.log(data)
                AuthService.login(data.login.token);
                handler(data)
                handleClose();
            } else if (title === 'Signup') {
                const { data } = await createUser({
                    variables: { ...formData },
                });
                console.log(data)
                AuthService.login(data.createUser.token);
                handler(data)
                handleClose();
                
            }

    
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UserModal;
