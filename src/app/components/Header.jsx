import React from 'react'
import MenuItem from './MenuItem'

export default function Header() {
  return (
    <div className='flex justify-between p-8 max-w-5xl bg-red-500 items-center mx-auto'>
      <div>
        <span className='text-3xl font-bold text-white'>MovieDB</span>
      </div>
      <div className='flex gap-4'>
        <MenuItem title="HOME" address="/" />
        <MenuItem title="ABOUT" address="/" />
      </div>
    </div>
  )
}
