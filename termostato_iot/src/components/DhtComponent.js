import "./DhtComponent.css";
import humidity from '../images/humidity.png';
import temperature from '../images/thermometer.jpg';

const DhtComponent = () => {

    return (
        <div className="sensorcomponent">   
            <div className="sensores humidity">
                <div>
                    <label>
                        30%
                    </label>
                </div>
            </div>
            <div className="sensores thermometer">
                <div>
                    <span>
                        78°F
                    </span>
                    <label>
                        25°C
                    </label>
                </div>
            </div>
            <div className="both"></div>
        </div>
    );
}

export default DhtComponent;