import React from 'react'
import GameItem from '../../components/game-item/GameItem'
import '../home/Home.scss'
const games = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Race', 'Simulator', 'Open world'],
        price: 10,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "An endless kaleidoscope of Horizon adventures awaits you! Take exciting trips through the incredibly beautiful and original world of Mexico behind the wheel of the greatest cars in history. Start your Horizon adventure today by adding the game to your wishlist!"
    },
    {
        image: '/game-covers/battlefield_2042.jpeg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 7,
        id: 2,
        description: 'Battlefield™ 2042 is a first-person shooter in which the series returns to legendary large-scale battles. In the future, where chaos reigns, adapt and thrive on the ever-changing battlefield thanks to your squad and arsenal of the latest technologies.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Deep story', 'Protagonist'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 12,
        id: 3,
        description: 'Alex Chen hides from everyone his "curse" - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies - allegedly in an accident - Alex uses her to find out the truth.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Open world', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 6,
        id: 4,
        description: 'Grand Theft Auto V for PC allows players to explore the iconic world of Los Santos and Blaine County in resolutions up to 4k and beyond at 60 frames per second.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Tactics', 'Shooter'],
        price: 3,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Siege is the sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open world'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 5,
        id: 6,
        description: 'Assassin`s Creed Valhalla is a multi-platform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassin`s Creed series.'
    },
]


const Home = () => {
    return (
        <div className='home-page'>
            <div className='container'>
                {games.map(game => <GameItem game={game} key={game.id} />)}
            </div>
        </div>
    )
}

export default Home