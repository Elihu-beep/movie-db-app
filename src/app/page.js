import React from 'react'
import Results from './components/Results'

const urls = {
  tvPopular: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
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
    const [resPopularTv, resPopularMovies, resHighestRated] = await Promise.all([
      fetch(urls.tvPopular, options),
      fetch(urls.moviesPopular, options),
      fetch(urls.highestRated, options)
    ])

    if (!resPopularTv.ok || !resPopularMovies.ok || !resHighestRated.ok) {
      throw new Error('Error fetching data')
    }

    const [popularTvData, popularMovieData, highestRatedData] = await Promise.all([
      resPopularTv.json(),
      resPopularMovies.json(),
      resHighestRated.json()
    ])

    const tvResults = popularTvData.results
    const movieResults = popularMovieData.results
    const highestRatedResults = highestRatedData.results

    return (
      <div className='p-8 max-w-5xl items-center mx-auto'>
        <div>
          <span className='sm:text-xl text-base font-semibold text-red-500'>| </span><span className='sm:text-xl text-base font-medium'>CURRENTLY POPULAR TV</span>
          <Results results={tvResults} />
        </div>
        <div className='py-10'>
          <span className='sm:text-xl text-base font-semibold text-red-500'>| </span><span className='sm:text-xl text-base font-medium'>CURRENTLY POPULAR MOVIES</span>
          <Results results={movieResults} />
        </div>
        <div className='py-10'>
          <span className='sm:text-xl text-base font-semibold text-red-500'>| </span><span className='sm:text-xl text-base font-medium'>HIGHEST RATED MOVIES</span>
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
