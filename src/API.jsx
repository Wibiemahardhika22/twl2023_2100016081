import axios from 'axios'


const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}`
    )
    // console.log(movie.data.results)
    return movie.data.results
}

export const getTopRatedMovieList = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/top_rated?api_key=${apiKey}`
    )
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${q}`)
    return search.data.results
}
