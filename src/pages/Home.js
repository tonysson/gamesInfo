import React , {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import styled from 'styled-components';
import {motion, AnimatePresence , AnimateSharedLayout} from 'framer-motion'
import { loadGames } from './../actions/gamesAction';
import Game from './../components/Game';
import GameDetails from './../components/GameDetails';
import {useLocation} from 'react-router-dom';
import { fadeIn } from './../animation';



const Home = () => {
    
    //get the current Location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    // console.log(pathId)

    const {popular , newGames , upComing , searched} = useSelector(state => state.games)
  
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGames())
    } , [dispatch] )


    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
          <AnimateSharedLayout type="crossfade"> 
            <AnimatePresence>
                {pathId && <GameDetails pathId={pathId}  />}
           </AnimatePresence>
           {
               searched.length === 0 ? "" : (
                   <>
                         <h2>Searched Games</h2>
                         <Games>
                            {
                                searched.map((game) => (
                                    <Game 
                                        key={game.id}
                                        image={game.background_image}
                                        id={game.id}
                                        released={game.released}
                                        name={game.name}
                                    />
                                ))
                            }
                         </Games>
                   </>
               )
           }
           <h2>Upcoming Games</h2>
           <Games>
                {
                    upComing.map((game) => (
                        <Game 
                            key={game.id}
                            image={game.background_image}
                            id={game.id}
                            released={game.released}
                            name={game.name}
                        />
                    ))
                }
           </Games>
            <h2>Popular Games</h2>
           <Games>
                {
                    popular.map((game) => (
                        <Game 
                            key={game.id}
                            image={game.background_image}
                            id={game.id}
                            released={game.released}
                            name={game.name}
                        />
                    ))
                }
           </Games>
            <h2>New Games</h2>
           <Games>
                {
                    newGames.map((game) => (
                        <Game 
                            key={game.id}
                            image={game.background_image}
                            id={game.id}
                            released={game.released}
                            name={game.name}
                        />
                    ))
                }
           </Games>   
        </AnimateSharedLayout>    
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display:grid;
    grid-template-columns : repeat(auto-fit, minmax(300px , 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem
`


export default Home
