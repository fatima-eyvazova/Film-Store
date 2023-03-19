import React from 'react'
import FilmItem from '../../components/film-item/FilmItem'
import '../home/Home.scss'
const films = [
    {
        image: '/film-covers/harry.webp',
        title: "Harry Potter",
        genres: ['Fantastic', 'Fictional', 'Adventure'],
        price: 10,
        video: 'https://www.youtube.com/embed/jBltxS8HfQ4',
        id: 1,
        description: 'Throughout the series, Harry is described as having his father`s perpetually untidy black hair, his mother`s bright green eyes and a lightning bolt- shaped scar on his forehead.He is further described as "small and skinny for his age" with "a thin face" and "knobbly knees", and he wears Windsor glasses.'
    },
    {
        image: '/film-covers/home-alone3.webp',
        title: 'Home Alone',
        genres: ['Comedy', 'Child', 'Adventure'],
        video: 'https://www.youtube.com/embed/dzdpqRGA1qc',
        price: 7,
        id: 2,
        description: 'HOME ALONE is the story of 8-year-old Kevin (Macaulay Culkin), a mischievous kid who feels largely ignored by his large extended family. While everyone is preparing for a Christmas vacation in Paris, Kevin gets in trouble, is banished to the attic overnight, and wishes his family would just disappear.'
    },
    {
        image: '/film-covers/cindrella.webp',
        title: 'Cinderella',
        genres: ['Science fiction', 'Adventure'],
        video: 'https://www.youtube.com/embed/20DF6U1HcGQ',
        price: 12,
        id: 3,
        description: 'Cinderella is a young woman with medium-length strawberry-blonde hair, blue eyes, and fair complexion. After her father dies, she is forced into servitude in her own home and is tormented by her evil stepmother, Lady Tremaine, and two stepsisters, Anastasia and Drizella.'
    },
    {
        image: '/film-covers/ella.webp',
        title: 'Ella Enchanted',
        genres: ['Family', 'Comedy'],
        video: 'https://www.youtube.com/embed/OoSUHgs7hCs',
        price: 6,
        id: 4,
        description: 'Ella Enchanted is a Newbery Honor book written by Gail Carson Levine and published in 1997. The story is a retelling of Cinderella featuring various mythical creatures including fairies, elves, ogres, gnomes, and giants'
    },
    {
        image: '/film-covers/malefiz.webp',
        title: 'Malefiz',
        video: 'https://www.youtube.com/embed/JIIgXEGAZgE',
        genres: ['Action', 'Adventure'],
        price: 3,
        id: 5,
        description: 'Malefiz (also known as Barricade) is a strategy board game, invented by Werner Schöppner and published by Ravensburger since 1960. It is a non-circular descendant of the ancient Indian board game Pachisi.'
    },
    {
        image: '/film-covers/alice.webp',
        title: 'Alice in Wonderland',
        genres: ['Fantastic', 'Adventure', 'Science fiction'],
        video: 'https://www.youtube.com/embed/9POCgSRVvf0',
        price: 5,
        id: 6,
        description: "Alice's Adventures in Wonderland by Lewis Carroll is a story about Alice who falls down a rabbit hole and lands into a fantasy world that is full of weird, wonderful people and animals. It is classic children's book that is also popular with adults."
    },
]


const Home = () => {
    return (
        <div className='home-page'>
            <div className='container'>
                {films.map(film => <FilmItem film={film} key={film.id} />)}
            </div>
        </div>
    )
}

export default Home