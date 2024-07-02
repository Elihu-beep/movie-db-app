import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({result}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-300 sm:shadow-md
    rounded-lg sm:m-2'>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
        width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300" />
      </Link>
      <h2 className='text-lg truncate'>{result.title}</h2>
      <p>⭐ {Number(result.vote_average).toFixed(2)}</p>
    </div>
  )
}
