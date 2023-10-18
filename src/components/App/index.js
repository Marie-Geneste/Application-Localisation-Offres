// == Import
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


  return (
    <div className="app">
      <TitleBar/>
      <div className='container'>
        <Map datas={datas}/>
        <ListComponent datas={datas}/>
      </div>
    </div>
  );
}

// == Export
export default App;
