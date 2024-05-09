import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-[#2F5E80] w-full px-8 pt-7 pb-5'>
        <Image src="https://i.imgur.com/U7rQU3T.png" className='w-[300px]' width={500} height={500} alt='logo' />
    </header>
  )
}
