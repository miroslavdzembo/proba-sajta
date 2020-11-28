import React from "react";
import BackButton from "../components/BackButton";
import Logo from '../components/Logo';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const NotFound = () => {


    return (
        <Container>
            <Logo />
            <h1>404</h1>
            <h1>Starnica nije pronđena!</h1>
            <BackButton />
        </Container>
    )
}

export default NotFound;
