import { useSelector } from 'react-redux';

function CharacterProfile () {
    // Importing the character from the store
    const character = useSelector(store => store.searchCharacter);
    
    console.log(character)
    return (
        <>
        {character.character ?
            character.character.results.map(result => (
            <div key={result.name} className="results">
                <h4>Character Profile for {result.name}</h4>
                <>About:</><br/>
                <>Height: {result.height}cm</><br/>
                <>Weight: {result.mass}kg</><br/>
                <>Hair Color: {result.hair_color}</><br/>
                <>Birthdate: {result.birth_year}</><br/>
                <>Films Appeared In: <ul>{
                    character.characterFilms.map(film => (
                            <li>{film}</li>
                    ))
                    }</ul></>
                <>Species: <ul>
                    {character.characterSpecies.map(oneSpecies => (
                        <li>{oneSpecies}</li>
                    ))}
                    </ul></>
                <>Starships Flown:<ul>
                        {character.characterStarships.map(starship => (
                            <li>{starship}</li>
                        ))}
                    </ul></>
            </div>
        ))
        :
        <p className="falseCharacter">No character loaded</p>
        }
        </>
    )
};

export default CharacterProfile;