import React, {useState} from 'react';
import { Form, Col, FormGroup, Input, Label, Button } from 'reactstrap';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import BackButton from "../components/BackButton";
import logoUrl from '../images/atika-logo.svg'
import { login } from "../utils/api";
import styled from "styled-components";
import {  loginSchema, validate } from "../utils/validate";
import {toast} from "react-toastify";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const FormWrapper = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0 30px 0;
`;

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        const errors = validate(credentials, loginSchema);
        if (errors) {
            if (errors.email) return toast.error('Mail koji ste uneli nije ispravan.');
            if (errors.password) return toast.error('Lozinka koju ste uneli nije ispravana.');
        }
        await login(credentials);
    }

    const onChange = (type) => (e) => {
        setCredentials({
            ...credentials,
            [type]: e.target.value,
        });
    }

    return (
        <Layout>
            <Container>
                <Logo src={logoUrl} alt="logo" />
                <Title>Admin panel</Title>
                <FormWrapper>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="moj-mail@primer.com"
                                value={credentials.email}
                                onChange={onChange('email')}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Lozinka</Label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="********"
                                value={credentials.password}
                                onChange={onChange('password')}
                            />
                        </FormGroup>
                    </Col>
                    <Button onClick={handleLogin}>Uloguj se</Button>
                    <BackButton />
                </FormWrapper>
            </Container>
        </Layout>
    )
}

export default Login;
