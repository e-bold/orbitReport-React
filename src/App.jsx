import { useState } from "react";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"
import satData from './components/satData'




function App() {

  const [sat, setSat] = useState(satData);

  const orbitTypes = [...new Set(satData.map(data => data.orbitType))];

  const filterByType = currentType => {
    const orbitTypes = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    })
    setSat(orbitTypes)
  };

  return (
    <div>
      <Banner/>
      <Buttons 
      filterByType = {filterByType}
      setSat = {setSat}
      satData = {satData}
      orbitTypes={orbitTypes}/>
      <Table  sat = {sat}/>
    </div>
  )
};

export default App;