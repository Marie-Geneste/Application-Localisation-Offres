import React, {useState, useEffect} from 'react'
import './style.scss'
import List from './List'

function ListComponent({ handleAddFav, filteredDatas, showOnlyTerraces, setShowOnlyTerraces, hoveredMarker, setHoveredList, setHoveredMarker }) {

  const [favorite, setFavorite] = useState([]);

  function handleAddFav(id, name) {
    console.log("FAVORITE", favorite);
    const newFav = { id: id, name: name };
    if (favorite.find((fav)=> fav.id === id)) {
      setFavorite(favorite.filter((fav)=> fav.id!==id))
    } else {
      setFavorite((prevFavorite) => [...prevFavorite, newFav]);
    }
  }

  useEffect(() => {
    // Récupérer les favoris depuis le localStorage
    const storedFavorite = localStorage.getItem("FAVORITE");
    console.log("STOREDFAV", storedFavorite)
    if (storedFavorite) {
      const parsedFavorite = JSON.parse(storedFavorite);
      setFavorite(parsedFavorite);
    }
  }, []); // appelé au 1er chargement du composant
  

	useEffect(() => {
		localStorage.setItem("FAVORITE", JSON.stringify(favorite));
    console.log("FAV", favorite)
	}, [favorite]); // appelé à chaque modification de todos

  return (
    <div className='list-container'>
      <div className='list-intro'>
        <h2 className='list-title'>Repérez votre bar !</h2>
      <label className='label-checkbox'>
				<input
					type="checkbox"
          className='checkbox'
					checked={showOnlyTerraces}
          onChange={() => setShowOnlyTerraces(!showOnlyTerraces)}
				/>
        Terrasse
			</label>
      </div>
      
      {
        filteredDatas.map((data) => (
          <List key={data.id} {...data}  handleAddFav={handleAddFav} favorite={favorite} setFavorite={setFavorite} hoveredMarker={hoveredMarker} setHoveredList = {setHoveredList} setHoveredMarker={setHoveredMarker}/>
        ))
      }
    </div>
  )
}

export default ListComponent