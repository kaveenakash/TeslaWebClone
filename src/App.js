import "./App.css";
import Header from "./components/Header/Header";
import Item from './components/Item/Item'

import Accessories from "./assets-20210209T193354Z-001/assets/Desktop-Accessories.jpg";
import ModelS from "./assets-20210209T193354Z-001/assets/Desktop-ModelS.jpeg";
import Model3 from "./assets-20210209T193354Z-001/assets/Desktop-Model3.jpeg";
import ModelX from "./assets-20210209T193354Z-001/assets/Desktop-Model3.jpeg";
import ModelY from "./assets-20210209T193354Z-001/assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets-20210209T193354Z-001/assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets-20210209T193354Z-001/assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item
          title="Solar Panels"
          desc="Money-back gurantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="Model S"
          desc=""
          descLink=""
          backgroundImg={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
