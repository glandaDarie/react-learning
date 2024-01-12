import { useState, useEffect } from 'react';
import { fetchRickAndMortyData } from './services/users-api';
import { createApiUrl } from './utils/create-api-url';

export interface UserData {
  id : number,
  name : string,
  status : string,
  species : string,
  gender : string,
  location : Object,
  image : string,
  created : string,
}

function App({ startingEpisode } : { startingEpisode : number }) : JSX.Element {
  const [episode, setEpisode] = useState<number>(startingEpisode);
  let rickAndMorteyUrl : string = createApiUrl("https://rickandmortyapi.com", `api/character/${episode}`);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetchRickAndMortyData(rickAndMorteyUrl, setUserData);
  }, [episode]); 

  return (
    <div>
      {userData && (
        <div className='user-data-text'>
          <h1><center>Name: {userData.name}</center></h1>
          <p>ID: {userData.id}</p>
          <p>Status: {userData.status}</p>
          <p>Species: {userData.species}</p>
          <p>Gender: {userData.gender}</p>
          <p>Image: </p>
          <div className='user-data-text__image-container'>
              <img src={userData.image} alt={`Image of ${userData.name}`}></img> 
          </div>
          <p>Created: {userData.created}</p>
          <div className='user-data-text-button'>
            <button onClick={() => { setEpisode(episode - 1); }}>Decrement</button>
            <button onClick={() => { setEpisode(episode + 1); }}>Increment</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


