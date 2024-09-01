import Pokecard from "./Pokecard"
import pokemon from "./Pokedex"
import './Pokecard.css'


function App() {
return (
  <div>
    <h1 className="pokecard-header">Pokedex</h1>
  <div className="pokedex-container">
    {pokemon.map(poke => (
      <Pokecard
      key={poke.id} 
      name={poke.name}
      img = {poke.id}
      type = {poke.type}
      exp = {poke.base_experience}
    />
    ))}
  </div>
  </div>
)
}

export default App;
