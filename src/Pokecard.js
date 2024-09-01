function Pokecard(props) {
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.img}.png`;
    return (
      <div className="pokecard">
        <h3 className="card-header">{props.name}</h3>
        <img src={imgURL} alt={props.name} />
        <div className="card-footer">
          <p>Type: {props.type}</p>
          <p>Experience: {props.exp}</p>
        </div>
      </div>
    );
  }

export default Pokecard;

//This child component will receive the pokeinfo from the array of the Pokedex
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png