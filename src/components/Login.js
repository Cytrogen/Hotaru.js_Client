import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Card, CardBody, CardSubtitle, CardTitle, CardText,
         Container, Row, Col, Form, FormGroup, Input, Button,
         Label } from 'reactstrap';

import { loginUser } from './redux_components/actions/authActions';

import './style.css';

const Login = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();

    const [readOnly, setReadOnly] = useState(true);

    /**
     * Handle changes to the username input.
     * @param e
     */
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    /**
     * Handle the login form data.
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(userData));
    };

    return (
        <Container className='d-flex vh-100'>
            <Row className='m-auto align-self-center'>
                <Col>
                    <Card className='px-3 py-2 rounded-1' style={{ backgroundColor: 'rgba(49,51,56)' }} inverse>
                        <CardBody className='text-center'>
                            <CardTitle tag='h4' className='fw-bold mb-3' style={{ color: 'rgba(242,243,245)' }}>Welcome Back!</CardTitle>
                            <CardSubtitle tag='h6' className='mx-2' style={{ color: 'rgba(148,153,159)' }}>Nice to see you again!</CardSubtitle>
                        </CardBody>

                        <CardBody className='pt-1'>
                            <CardText>
                                <Form onSubmit={ handleSubmit }>
                                    <FormGroup>
                                        <Label
                                            for='username'
                                            className='fw-bolder'
                                            style={{ color: 'rgba(160,164,171)', fontSize: '12px' }}
                                        >
                                            Username<span className='ps-1 text-danger'>*</span>
                                        </Label>
                                        <Input
                                            type='text'
                                            name='username'
                                            id='username'
                                            readOnly={ readOnly }
                                            onFocus={ () => setReadOnly(false) }
                                            className='mb-3 rounded-1 input-text-color'
                                            style={{ backgroundColor: 'rgba(30,31,34)', border: 'none', width: '396px' }}
                                            value={ userData.username }
                                            onChange={ handleChange }
                                            required
                                        />

                                        <Label
                                            for='password'
                                            className='fw-bolder'
                                            style={{color: 'rgba(160,164,171)', fontSize: '12px'}}
                                        >
                                            Password<span className='ps-1 text-danger'>*</span>
                                        </Label>
                                        <Input
                                            type='password'
                                            name='password'
                                            id='password'
                                            readOnly={ readOnly }
                                            onFocus={ () => setReadOnly(false) }
                                            className='rounded-1 input-text-color'
                                            style={{ backgroundColor: 'rgba(30,31,34)', border: 'none' }}
                                            value={ userData.password }
                                            onChange={ handleChange }
                                            required
                                        />

                                        <a
                                            href='/forgot-password'
                                            style={{ color: 'rgba(9,147,217)', textDecoration: 'none', fontSize: '14px' }}
                                        >
                                            Forgot Password?
                                        </a>
                                    </FormGroup>

                                    <Button
                                        type='submit'
                                        className='mt-1 py-2 rounded-1'
                                        style={{ backgroundColor: 'rgba(71,82,196)', fontSize: '16px', border: 'none', width: '100%' }}
                                    >
                                        Login
                                    </Button>

                                    <p className='mt-1' style={{ color: 'rgba(148,155,164)', fontSize: '14px' }}>
                                        Need a new account?<a className='ps-1' style={{ color: 'rgba(9,147,217)', textDecoration: 'none' }} href='/register'>Register</a>
                                    </p>
                                </Form>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;