// == Import
import { useEffect, useState, useRef } from 'react';
import TitleBar from '../TitleBar';
import Map from '../Map';
import './styles.css';
import ListComponent from '../ListComponent';

// == Composant
function App() {

  const [datas, setDatas]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/datas/datas.json")
      .then((response)=> response.json())
      .then(data=> setDatas(data))
  }, []);

  const [hoveredMarker, setHoveredMarker] = useState(null);
  console.log("HOVEREDMARKERID", hoveredMarker)

  const [hoveredList, setHoveredList] = useState(null)
  console.log("HOVEREDLISTID", hoveredList)

  const [showOnlyTerraces, setShowOnlyTerraces] = useState(false);
  const filteredDatas = showOnlyTerraces ? datas.filter(data => data.terrace) : datas;

  
	const favoriteNameRef = useRef();

  return (
    <div className="app">
      <TitleBar/>
      <div className='container'>
        <Map filteredDatas={filteredDatas} setHoveredMarker={setHoveredMarker} favoriteNameRef={favoriteNameRef} hoveredList={hoveredList}/>
        <ListComponent filteredDatas={filteredDatas} showOnlyTerraces={showOnlyTerraces} setShowOnlyTerraces={setShowOnlyTerraces} hoveredMarker={hoveredMarker} setHoveredList={setHoveredList} setHoveredMarker={setHoveredMarker}/>
      </div>
    </div>
  );
}

// == Export
export default App;
