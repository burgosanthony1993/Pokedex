// App.js or PokemonGrid.js
import React from 'react';
import Pokecard from './Pokecard';
import pokemon from './Pokedex';
import './Pokecard.css';

const PokemonGrid = () => {
  // Function to shuffle array
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  // Shuffle Pokémon and split into rows
  const shuffledPokemon = shuffleArray(pokemon);
  const numRows = 2; // Number of rows
  const numPerRow = 4; // Number of Pokémon per row
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    rows.push(shuffledPokemon.slice(i * numPerRow, (i + 1) * numPerRow));
  }

  // Function to calculate total experience points for a row
  const calculateTotalExperience = (row) => {
    return row.reduce((total, poke) => total + poke.base_experience, 0);
  };

  // Calculate experience for each team
  const team1Experience = calculateTotalExperience(rows[0]);
  const team2Experience = calculateTotalExperience(rows[1]);

  // Determine win/lose message
  let message;
  let messageClass;
  if (team1Experience > team2Experience) {
    message = "Team 1 wins!";
    messageClass = "win";
  } else if (team1Experience < team2Experience) {
    message = "Team 2 wins!";
    messageClass = "lose";
  } else {
    message = "It's a tie!";
    messageClass = "tie";
  }

  return (
    <div className="pokedex-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="pokecard-row">
          {row.map(poke => (
            <Pokecard
              key={poke.id}
              name={poke.name}
              img={poke.id}
              type={poke.type}
              exp={poke.base_experience}
            />
          ))}
          <div className="row-experience">
            Total Experience: {calculateTotalExperience(row)}
          </div>
        </div>
      ))}
      <div className={`result-message ${messageClass}`}>
        {message}
      </div>
    </div>
  );
};

export default PokemonGrid;
