import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WhoItGonnaBe from './WhoItGonnaBe';
import Jerks from './Jerks';
import './App.css';

// API call to hp API to get API info (ist of all wizards) and save to state
// Use form to choose wizard group
// Filter through character list to select wizards from that group and save to a new array
// Filter through THAT array and find spies. Save that new array to state.
// Print list of spies to the page with a .map()

const magicObj = {}

// Function which takes our complete array and our chosen cauldron, and narrows our allzards array down to an array of just the wizards in the chosen group.
// Narrow THAT array down to those who are confirmed Death Eaters.
// Return the resultant array.
magicObj.narrowItDown = (allzardsArray, cauldronName) => {
  const cauldron = allzardsArray.filter( (wizrrd) => {
    return wizrrd[cauldronName] === true;
  });

  const shitFaces = cauldron.filter( (wyzurt) => {
    return wyzurt.deathEater === true;
  });

  return shitFaces
}

function App() {
  const [allzards, setAllzards] = useState([]);
  const [shitheads, setShitheads] = useState([]);

  useEffect(() => {
    axios({
      url: `https://www.potterapi.com/v1/characters`,
      method: `GET`,
      dataResponse: `json`,
      params: {
        key: `$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy`
      }
    })
    .then( (res) => {
      setAllzards(res.data);
    });
  }, [])

  // Function which will receive user selection from WhoItsGonnaBe component and pass our chosen cauldron to a function which will narrow our allzards array down.
  // Save the return from the (pure!) function to state (which will be used to render to the page)
  const whichCauldron = (e, cauldronName) => {
    e.preventDefault();

    const copyOfAllzards = [...allzards];
    const assholes = magicObj.narrowItDown(copyOfAllzards, cauldronName);

    setShitheads(assholes);
  }

  return (
    <div className="App">
      <h1>Let's GET these motherfuckers</h1>

      <WhoItGonnaBe whichCauldron={whichCauldron} />

      <Jerks shitheads={shitheads} />
    </div>
  );
}

export default App;
