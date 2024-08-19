import React from 'react'
import Results from '../components/Results'

const urls = {
  upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
  moviesPopular: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  highestRated: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
}

export default async function page() {
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  }

  try {
    const [resUpcoming, resPopularMovies, resHighestRated] = await Promise.all([
      fetch(urls.upcoming, options),
      fetch(urls.moviesPopular, options),
      fetch(urls.highestRated, options)
    ])

    if (!resUpcoming.ok || !resPopularMovies.ok || !resHighestRated.ok) {
      throw new Error('Error fetching data')
    }

    const [upcomingMovieData, popularMovieData, highestRatedData] = await Promise.all([
      resUpcoming.json(),
      resPopularMovies.json(),
      resHighestRated.json()
    ])

    const upcomingResults = upcomingMovieData.results
    const movieResults = popularMovieData.results
    const highestRatedResults = highestRatedData.results

    return (
      <div className='p-8 max-w-5xl items-center mx-auto'>
        <div>
          <span className='sm:text-xl text-base font-semibold text-red-500'>| </span><span className='sm:text-xl text-base font-medium'>NEW AND UPCOMING</span>
          <Results results={upcomingResults} />
        </div>
        <div className='py-10'>
          <span className='sm:text-xl text-base font-semibold text-red-500'>| </span><span className='sm:text-xl text-base font-medium'>CURRENTLY POPULAR</span>
          <Results results={movieResults} />
        </div>
        <div className='py-10'>
          <span className='sm:text-xl text-base font-semibold text-red-500'>| </span><span className='sm:text-xl text-base font-medium'>HIGHEST RATED </span>
          <Results results={highestRatedResults} />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching data', error)
    return (
      <div className='p-8 max-w-5xl items-center mx-auto min-h-screen'>
        <p className='text-xl text-black'>Error. Please try again later.</p>
      </div>
    )
  }
}
