import React from 'react'
import Results from './components/Results'

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const categories = {
  popular: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
}

export default async function page() {
  const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  }
  const res = await fetch(url, options)

  if (!res.ok) {
    console.error('Failed to fetch data!')
  }
  const data = await res.json()
  console.log(data)
  const results = data.results

  return (
    <div className='p-8 max-w-5xl items-center mx-auto'>
      <span className='text-xl font-semibold text-red-500'>| </span><span className='text-xl font-medium'>CURRENTLY POPULAR MOVIES & TV</span>
      <Results results={results} />
    </div>
  )
}
