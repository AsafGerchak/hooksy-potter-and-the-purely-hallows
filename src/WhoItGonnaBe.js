import React, { useState } from 'react';

// Form to get user selection of wizard group and pass up to App.js
// LOGICAL FLOW
    // - User selects option from drop-down
    // - User selection is saved to state
    // - On form submit, button calls a function which passes the user choice back up to App.js, where it is used to filter through the allzards array.

// What we need
// - Form with drop-down and submit button
// - State
// - Function from props

function WhoItGonnaBe(props) {
  const [userChoice, setUserChoice] = useState("");

  return(
    <form action="">
      <select onChange={ (e) => setUserChoice(e.target.value) } name="whichCauldron" id="whichCauldron">
        <option value="">PICK ONE FFS</option>
        <option value="ministryOfMagic">Ministry of Magic</option>
        <option value="dumbledoresArmy">Dumbledore's Army</option>
        <option value="orderOfThePhoenix">Order of the Phoenix</option>
      </select>

      <button
        onClick={ (e) => props.whichCauldron(e, userChoice) }
      >
        Run counter-intelligence operation
      </button>
    </form>
  );
}

export default WhoItGonnaBe;