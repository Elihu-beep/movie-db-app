import Image from 'next/image'

const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  }

export default async function Media({params}) {
    const mediaId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}`, options)
    const resVideo = await fetch(`https://api.themoviedb.org/3/movie/${mediaId}/videos`, options)
    const media = await res.json()
    const video = await resVideo.json()

    const trailer = video.results.find(v => v.site === 'YouTube' && v.name.toLowerCase().includes('trailer'))?.key
    const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer}` : null

    return (
        <div className="flex min-h-screen justify-center mt-10 w-full">
          <div className='p-4 flex flex-col content-center w-72'>
            <Image 
              src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
              width={500} height={300} 
              className="rounded-lg" 
            />
          </div>
          <div className='w-64 p-5 flex flex-col items-center'>
            <div className='text-red-600 mb-3 font-bold'>
              {media.original_title}
            </div>
            <div className='mb-4 min-h-60 ml-5'>
              {media.overview}
            </div>
            <div className='mb-3 font-medium'>
              Release Date: {media.release_date}
            </div>
            <div className='mb-2 font-medium'>
              Rating: ⭐ {Number(media.vote_average).toFixed(2)}
            </div>
            {trailerUrl && (
            <div className='mt-10 mr-60'>
            <iframe 
              width="560" 
              height="315" 
              src={trailerUrl}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className='rounded-lg'
            ></iframe>
          </div>
            )}
        </div>
        </div>
      )
}
