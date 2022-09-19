import React from "react";
import './TopComponent.css';
import { Container } from 'reactstrap';


const TopComponent = () => {

    return (
        <Container className="topcomponent">
           <h1 className="title">Termostato IOT</h1>
        </Container>
    );
}

export default TopComponent;