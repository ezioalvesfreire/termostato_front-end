import React from "react";
import { Button } from 'reactstrap';
import './ActuatorComponent.css';
import { Container } from 'reactstrap';

const ActuatorComponent = () => {
    const handleClick = () => {
        console.log("Clicou no botão!")
    };

    return (
        <Container className="actuatorcomponent">
            {/* <button onClick={handleClick}>click</button> */}

            <div className="statusActuator">
                <ul className="list-group">
                <a href="#" onClick={handleClick}><li className="list-group-item off">Atuador-01</li></a>
                <a href="#" onClick={handleClick}><li className="list-group-item on">Atuador-02</li></a>                   
                </ul>                
            </div>
        </Container>

    );
}

export default ActuatorComponent;