import React from "react";
import { Button } from 'reactstrap';
import './ActuatorComponent.css';

const ActuatorComponent = () => {
    const handleClick = () => {
        console.log("Clicou no botão!")
    };

    return (
        <div className="actuatorcomponent">                   
           {/* <button onClick={handleClick}>click</button> */}
            <div className="statusActuator">
               <div className="button off">Atuador-01</div> 
               <div className="button on">Atuador-02</div>           
            </div>                 
        </div>

    );
}

export default ActuatorComponent;