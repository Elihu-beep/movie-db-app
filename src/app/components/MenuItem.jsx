import React from 'react'
import Link from 'next/link'

export default function MenuItem({address, title}) {
  return (
  <Link href={address} className='hover:bg-white py-1 px-2 rounded-lg'>
    <p className='text-base font-semibold text-white hover:text-black'>{title}</p>
  </Link>
    
  )
}
