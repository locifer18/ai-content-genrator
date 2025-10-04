'use client'
import React, { useState, useEffect } from 'react'
import { FileClock, HomeIcon, Settings, Sparkles, WalletCards, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const handleMenuClick = () => {
        if (isMobile) setIsOpen(false);
    };

    return (
        <>
            <button
                aria-label="Toggle Menu"
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg "
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
                className={`fixed inset-0 bg-black/75 bg-opacity-50 transition-opacity md:hidden z-30 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            />
            <aside
                className={`fixed top-0 left-0 h-full bg-white shadow-xl transition-all duration-300 ease-in-out z-40 ${isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:w-20 md:translate-x-0"
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-center h-12">
                            <Link href='/' onClick={handleMenuClick}>
                                <Sparkles className={`cursor-pointer text-purple-600 transition-all ${isOpen ? 'w-8 h-8' : 'md:w-6 md:h-6 w-8 h-8'}`} />
                            </Link>
                        </div>
                    </div>
                    <nav className="flex-1 overflow-y-auto py-4">
                        <ul className="space-y-2 px-3">
                            {MenuList.map((menu, index) => (
                                <li key={index}>
                                    <Link href={menu.path} onClick={handleMenuClick}>
                                        <div
                                            className={`flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200 ${path === menu.path
                                                    ? 'bg-primary text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            <menu.icon className='h-5 w-5 flex-shrink-0' />
                                            <h2 className={`text-base font-medium ml-3 `}>
                                                {menu.name}
                                            </h2>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Usage Track Section */}
                    <div className='mt-auto p-3'>
                        <UsageTrack />
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideNav