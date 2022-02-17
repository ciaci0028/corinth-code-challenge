import { useSelector } from 'react-redux';

function CharacterProfile () {
    // Importing the character from the store
    const character = useSelector(store => store.searchCharacter);
    
    
    return (
        <>
        {character.results?.map(result => (
            <div key={result.name} className="results">
                <h4>Character Profile for {result.name}</h4>
                <>About:</><br/>
                <>Height: {result.height}cm</><br/>
                <>Weight: {result.mass}kg</><br/>
                <>Hair Color: {result.hair_color}</><br/>
                <>Birthdate: {result.birth_year}</><br/>
                {/* <button onClick={(event) => handleFilms(event.target.value)}>Display Films</button> */}
            </div>
        ))
        }
        </>
    )
};

export default CharacterProfile;