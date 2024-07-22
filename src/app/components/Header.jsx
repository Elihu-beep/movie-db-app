import React from 'react'
import MenuItem from './MenuItem'

export default function Header() {
  return (
    <div className='flex justify-between p-8 max-w-5xl bg-red-500 items-center mx-auto'>
      <div>
        <span className='sm:text-3xl font-bold text-white'>MovieDB</span>
      </div>
      <form>
        <input type="text" placeholder=" Search for a movie..." className='w-32 ml-2 sm:w-96 h-8 rounded-2xl placeholder:-gray-500 outline-4 
        flex-1'/>
    </form>
      <div className='flex sm:gap-4'>
        <MenuItem title="HOME" address="/" />
        <MenuItem title="ABOUT" address="/" />
      </div>
    </div>
  )
}
