import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-[#12395b] w-full px-8 py-3'>
        <Image src="https://i.imgur.com/MM1kgD2.png" className='w-[60px]' width={500} height={500} alt='logo' />
    </header>
  )
}
