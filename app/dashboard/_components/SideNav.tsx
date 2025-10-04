'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FileClock, HomeIcon, Settings, Sparkles, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';
const SideNav = () => {

    const MenuList = [
        {
            name: 'Home',
            icon: HomeIcon,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]

    const path = usePathname();

    return (
        <div className='h-screen flex flex-col bg-white p-5 shadow-sm border'>
            <div className='flex justify-center'>
                <Link href='/'>
                    <Sparkles className="w-8 cursor-pointer h-8 text-purple-600" />
                </Link>
            </div>
            <hr className='my-5 border' />
            <div className='mt-3 flex-1 '>
                {MenuList.map((menu, index) => {
                    return (
                        <Link href={menu.path} key={index}>
                            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path && 'bg-primary text-white'}`} key={index}>
                                <menu.icon className='h-6 w-6' />
                                <h2 className='text-lg'>{menu.name}</h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='mt-auto'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav