import React from 'react'
import Results from './components/Results'

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const urls = {
  popular: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
  moviesPopular: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
}

export default async function page() {
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  }
  const resPopularTv = await fetch(`${urls.popular}`, options)
  const resPopularMovies = await fetch(`${urls.moviesPopular}`, options)


  if (!resPopularTv.ok && !resPopularMovies.ok) {
    console.error('Failed to fetch data!')
  }
  const data = await resPopularTv.json()
  const popularMovieData = await resPopularMovies.json()
  const results = data.results
  const movieResults = popularMovieData.results

  console.log(data)
  console.log(movieResults)

  return (
    <div className='p-8 max-w-5xl items-center mx-auto'>
      <div>
      <span className='text-xl font-semibold text-red-500'>| </span><span className='text-xl font-medium'>CURRENTLY POPULAR TV</span>
      <Results results={results} />
      </div>
      <div className='py-10'>
      <span className='text-xl font-semibold text-red-500'>| </span><span className='text-xl font-medium'>CURRENTLY POPULAR MOVIES</span>
      <Results results={movieResults} />
      </div>
      <div className='py-10'>
      <span className='text-xl font-semibold text-red-500'>| </span><span className='text-xl font-medium'>CURRENTLY POPULAR MOVIES & TV</span>
      <Results results={results} />
      </div>
    </div>
  )
}
