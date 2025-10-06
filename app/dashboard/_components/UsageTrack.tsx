'use client'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';

const UsageTrack = () => {
    const { user } = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);
    const [maxWords,setMaxWords] = useState<number>(10000);
    const {updateCredit, setUpdateCredit} = useContext<any>(UpdateCreditUsageContext);
    useEffect(() => {
        if (user) {
            GetData();
            IsUserSubscribe();
        }
    }, [user]);

    // Refresh subscription status every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (user) {
                IsUserSubscribe();
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [user]);

    useEffect(()=>{
        user&&GetData();
    },[updateCredit&&user])
    const GetData = async () => {
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                const result = await db.select().from(AIOutput)
                    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
                GetTotalUsage(result);
            }
        } catch (error) {
            console.error('Error fetching usage data:', error);
        }
    }

    const GetTotalUsage = (result: any[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length || 0);
        });
        setTotalUsage(total);
    }

    const IsUserSubscribe = async () => {
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                const result = await db.select().from(UserSubscription)
                    .where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));
                
                if (result.length > 0 && result[0].active) {
                    setUserSubscription(true);
                    setMaxWords(1000000);
                } else {
                    setUserSubscription(false);
                    setMaxWords(10000);
                }
            } else {
                setUserSubscription(false);
                setMaxWords(10000);
            }
        } catch (error) {
            console.error('Error checking subscription:', error);
            setUserSubscription(false);
            setMaxWords(10000);
        }
    }

    return (
        <div className='px-2'>
            <div className='bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg shadow-lg'>
                <h2 className='font-semibold text-sm mb-2'>Credits</h2>
                <div className='bg-white/20 rounded-full h-2 mb-2'>
                    <div 
                        className='bg-white rounded-full h-2 transition-all duration-300' 
                        style={{ width: `${Math.min((totalUsage/maxWords)*100, 100)}%` }}
                    ></div>
                </div>
                <p className='text-xs font-medium'>{totalUsage.toLocaleString()}/{maxWords.toLocaleString()}</p>
                <p className='text-xs opacity-90'>{userSubscription ? 'Pro Plan Active' : 'Credits Used'}</p>
            </div>
            {!userSubscription && (
            <Link href={'dashboard/billing'}>
                <Button 
                    variant={'outline'} 
                    className='w-full cursor-pointer mt-2 text-xs py-2 border-purple-200 text-purple-700 hover:bg-purple-50'
                >
                    ⚡ Upgrade Plan
                </Button>
                </Link>
            )}
        </div>
    )
}

export default UsageTrack
