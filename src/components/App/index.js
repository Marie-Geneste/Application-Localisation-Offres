// == Import
import { useState } from 'react';
import TitleBar from '../TitleBar';
import Map from '../Map';
import './styles.css';
import ListComponent from '../ListComponent';

// == Composant
function App() {

  const datas = [
    { 
      id:1, 
      position:[43.306, -0.420],
      name: "La Guinguette des Sardines"
    },
    { 
      id:2,
      position:[43.295, -0.367],
      name: "Le Bakara"
    }
  ]

  const [hoveredMarker, setHoveredMarker] = useState(null);
  console.log("HOVEREDMARKERID", hoveredMarker)

  const [hoveredList, setHoveredList] = useState(null)
  console.log("HOVEREDLISTID", hoveredList)

  return (
    <div className="app">
      <TitleBar/>
      <div className='container'>
        <Map datas={datas} setHoveredMarker={setHoveredMarker} hoveredList={hoveredList}/>
        <ListComponent datas={datas} hoveredMarker={hoveredMarker} setHoveredList={setHoveredList} setHoveredMarker={setHoveredMarker}/>
      </div>
    </div>
  );
}

// == Export
export default App;
