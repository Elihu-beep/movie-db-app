import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col p-8 max-w-5xl bg-gray-800 items-center mx-auto'>
      <div className='flex gap-20'>
        <span className='text-white'>MovieDB</span>
        <span className='text-gray-500'>|</span>
        <span className='text-white'>About</span>
        <span className='text-gray-500'>|</span>
        <span className='text-white'>Accessibility</span>
      </div>
      <div className='mt-4 text-gray-600 text-xs'>
        <span>Coded in Visual Studio Code. Built with React, Next.js, Tailwind, JavaScript. Deployed with Vercel.</span>
      </div>
    </div>
  )
}
