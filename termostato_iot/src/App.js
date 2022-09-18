import "./App.css";

import ActuatorComponent from "./components/ActuatorComponent";
import DhtComponent from "./components/DhtComponent";
import TopComponent from "./components/TopComponent";


function App() {
  return (
    <div className="conteiner">  
      <div className="containerTop">
       <TopComponent/>
      </div>
      <div className="containerDHT">
        <DhtComponent/>
      </div>
      <div>
        <ActuatorComponent/>
      </div>
    </div>
  );
}

export default App;
