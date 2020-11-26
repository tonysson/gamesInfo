//Base URL
const base_url = "https://api.rawg.io/api";


// getting DATES
const getCurrentMonth = () => {

    const month =  new Date().getMonth() + 1
    //i want to return 01 or 02 or 03.... or 09
    return month < 10 ? `0${month}` :  month
}

const getCurrentDay = () => {
    const day =  new Date().getDate()
    //i want to return 01 or 02 or 03.... or 09
     return day < 10 ? `0${day}` : day
}

//Current day / month / year
const currentYear = new Date().getFullYear()
const currentMonth =  getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`




//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=6`
//upcoming game
const upComing_games  = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=6`
//new games
const new_games =  `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=6`


// popular games
export const popularGamesURL =  () => `${base_url}/${popular_games}`
export const upComingGamesURL  = () => `${base_url}/${upComing_games}`
export const newGamesURL  = () => `${base_url}/${new_games}`

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}/games/${game_id}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}/games/${game_id}/screenshots`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}/games?search=${game_name}&page_size=6`;











