swapi.dev/api/person

input --> searches
GET request that swapi.dev/api/person/?search=yoda

{
    name: Yoda,
    hair color: gray,
    height: 67,
    weight: 564,
    film: [
        swapi.dev/api/film/1,
        swapi.dev/api/film/2,
        swapi.dev/api/film/3,
        swapi.dev/api/film/4,
        swapi.dev/api/film/5,
    ] --> swapi.dev/api/film (on page load, go GET all the films)
}

filmsList = [
    {
        url: swap.dev/api/film/1,
        title: A New Hope,
        people: [
            swapi.dev/api/person/3,
            swapi.dev/api/person/4,
            swapi.dev/api/person/6,
            swapi.dev/api/person/7,
        ]
    }
]

DOM:
{character.name}'s profile:
weight: {character.weight}
film: url
character.film.map{film
    filmList.map{jkfjkd
    IF THEY MATCH
    DOM: jkfjkd.title
    }}