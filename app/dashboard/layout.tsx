'use client'
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [totalUsage, setTotalUsage] = useState<any>(0);
    const [userSubscription, setUserSubscription] = useState<any>(null);
    const [updateCredit, setUpdateCredit] = useState<any>(0);
    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
                <UpdateCreditUsageContext.Provider value={{updateCredit, setUpdateCredit}}>
                    <div className='bg-slate-100 h-full'>
                        <div className='md:w-64 hidden md:block fixed'>
                            <SideNav />
                        </div>
                        <div className='md:ml-64'>
                            <Header />
                            {children}
                        </div>
                    </div>
                </UpdateCreditUsageContext.Provider>
            </UserSubscriptionContext.Provider>
        </TotalUsageContext.Provider>
    )
}

