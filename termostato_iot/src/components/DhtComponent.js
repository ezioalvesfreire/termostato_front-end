import "./DhtComponent.css";
import humidity from '../images/humidity.png';
import temperature from '../images/thermometer.jpg';
import { Container } from "reactstrap";



const DhtComponent = () => {

    let temperature = 30;
    let temperaturef = 86;
    let humidity = 60;

    return (
        <Container className="sensorcomponent">   
            <div className="sensores humidity">
                <div>
                    <label>
                        {humidity}%
                    </label>
                </div>
            </div>
            <div className="sensores thermometer">
                <div>
                    <span>
                        {temperaturef}°F
                    </span>
                    <label>
                        {temperature}°C
                    </label>
                </div>
            </div>
            <div className="both"></div>
        </Container>
    );
}

export default DhtComponent;