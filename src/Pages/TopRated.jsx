import React, { useEffect, useState } from 'react'
import { getTopRatedMovieList, searchMovie } from '../API'
import HeaderComponent from '../Components/HeaderComponent'
import FooterComponent from '../Components/FooterComponent'

const TopRated = () => {
    const [upcomingMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        getTopRatedMovieList().then((result) => {
            setTopRatedMovies(result)
        })
    }, [])


    const TopRatedMoviesList = () => {
        return upcomingMovies.map((movie, i) => {
            return (
                <div key={i} className="sm:py-5 sm:max-w-xl sm:mx-auto mb-8 sm:mb-32" >
                    <div
                        className="bg-white shadow-lg border-gray-100 max-h-80	 border rounded-3xl p-8 flex space-x-8 dark:bg-slate-800 dark:border-gray-900">

                        {/* Gambar dari Film */}
                        <div className="h-48 overflow-visible w-full md:w-1/2">
                            <img
                                className="rounded-3xl shadow-lg object-cover h-full w-full md:h-auto md:w-full transition-transform hover:scale-110"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>

                        {/* Detail dari Film */}
                        <div className="flex flex-col w-1/2 space-y-4">
                            <div className="flex justify-between items-start">
                                <h2 className="text-xl font-bold dark:text-white">{movie.title}</h2>
                                <div className="bg-yellow-400 font-bold rounded-xl p-2 mx-2">{movie.vote_average}</div>
                            </div>

                            <div>
                                <div className="text-sm text-gray-400 dark:text-white">Release Date:</div>

                                {/* Dari movie.release_date diubah ke dalam format dd-mm-yy dengan menggunakan fungsi toLocaleDateString */}
                                <div className="text-lg text-gray-800 dark:text-white">
                                    {new Date(movie.release_date).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>
                            </div>
                            {/* <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movie.overview}</p> */}
                        </div>

                    </div>
                </div>
            )
        })
    }

    const search = async (q) => {
        if (q.length < 5) {
            const query = await searchMovie(q)
            setTopRatedMovies(query)
        }
    }

    return (
        <>
            <HeaderComponent
                title="Pilihan film terbaik hari ini"
            />
            {/* Start Seacrh Button */}
            <div className="flex justify-center items-center dark:bg-slate-900">
                <form className="flex items-center mx-auto">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative my-12 w-80">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search" required
                            onChange={({ target }) => search(target.value)} />
                    </div>
                </form>
            </div>
            {/* End Seacrh Button */}

            <div className='grid sm:grid-cols-2 dark:bg-slate-900'>
                <TopRatedMoviesList />
            </div>

            <FooterComponent />
        </>
    )
}

export default TopRated