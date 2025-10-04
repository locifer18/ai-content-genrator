'use client'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React, { useContext } from 'react'

const Header = () => {
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  return (
    <div className='p-4 md:p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='flex items-center gap-2 md:gap-4 flex-1'>
        <div className='  p-2 border rounded-md flex items-center gap-2 w-full max-w-lg hidden sm:flex'>
          <Search className='h-4 w-4' />
          <input type="text" placeholder='Search...' className='outline-none flex-1 text-sm' />
        </div>
      </div>
      <div className='flex items-center gap-2  md:gap-5'>
        {
          userSubscription ? (
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>{'Pro Member'}</h2>
          ) :
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 '>🔥Join Membership just for ₹100/Month</h2>
        }
        <div className='flex items-end gap-2 mx-2'>
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Header