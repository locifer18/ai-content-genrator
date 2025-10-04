import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='p-2 border rounded-md flex items-center gap-5 max-w-lg '>
            <Search />
            <input type="text" placeholder='Search...' className='outline-none '/>
        </div>
        <div className='flex items-center gap-5'>
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥Join Membarship just for $9.99/Month</h2>
            <UserButton />
        </div>
    </div>
  )
}

export default Header