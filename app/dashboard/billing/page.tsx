'use client'
import React, { useState, useEffect, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Loader2, Crown, Zap } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { UserSubscription } from '@/utils/schema'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'

const billing = () => {
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [userPlan, setUserPlan] = useState('free');
    const [subscriptionData, setSubscriptionData] = useState<any>(null);
    const {userSubscription, setUserSubscription} = useContext<any>(UserSubscriptionContext);

    useEffect(() => {
        if (user) {
            checkUserSubscription();
        } else {
            setUserPlan('free');
            setSubscriptionData(null);
        }
    }, [user]);

    const checkUserSubscription = async () => {
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                const result = await db.select().from(UserSubscription)
                    .where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));
                
                if (result.length > 0 && result[0].active) {
                    setUserPlan('pro');
                    setSubscriptionData(result[0]);
                } else {
                    setUserPlan('free');
                    setSubscriptionData(null);
                }
            } else {
                setUserPlan('free');
                setSubscriptionData(null);
            }
        } catch (error) {
            console.error('Error checking subscription:', error);
            setUserPlan('free');
            setSubscriptionData(null);
        }
    };

    const openRazorpay = (subscription: any) => {
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            subscription_id: subscription.id,
            name: 'AI Content Generator',
            description: 'Pro Plan Subscription',
            handler: async function (response: any) {
                await SaveSubscription(response.razorpay_payment_id);
                alert('Payment successful! Pro plan activated.');
                // Refresh the page to update subscription status
                window.location.href = '/dashboard/billing';
            },
            prefill: {
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
            },
            theme: {
                color: '#7c3aed'
            }
        };
        
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    const CreateSubscription = async () => {
        setLoading(true);
        try {
            
            const response = await fetch('/api/create-subscription', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: user?.primaryEmailAddress?.emailAddress,
                    name: user?.fullName 
                })
            });
            
            
            const subscription = await response.json();
            
            if (!response.ok) {
                throw new Error(subscription.error || `HTTP error! status: ${response.status}`);
            }
            
            // Redirect to Razorpay hosted page for subscription payment
            // Use Razorpay checkout instead of hosted page
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                subscription_id: subscription.id,
                name: 'AI Content Generator',
                description: 'Pro Plan Subscription',
                handler: async function (response: any) {
                    if(response){
                        await SaveSubscription(response.razorpay_payment_id);
                    }
                },
                prefill: {
                    name: user?.fullName,
                    email: user?.primaryEmailAddress?.emailAddress,
                },
                theme: {
                    color: '#7c3aed'
                }
            };
            
            if (!(window as any).Razorpay) {
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.onload = () => openRazorpay(subscription);
                document.body.appendChild(script);
            } else {
                openRazorpay(subscription);
            }
            
        } catch (error) {
            console.error('Payment error:', error);
            if (error instanceof Error) {
                alert(`Error: ${error.message}`);
            } else {
                alert('An unknown error occurred.');
            }
        } finally {
            setLoading(false);
        }
    }


    const SaveSubscription = async (paymentId: string) => {
        try {
            const response = await fetch('/api/create-subscription', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user?.primaryEmailAddress?.emailAddress,
                    userName: user?.fullName,
                    paymentId: paymentId
                })
            });
            
            if (response.ok) {
                setUserPlan('pro');
                checkUserSubscription();
                window.location.reload();
            }
        } catch (error) {
            console.error('Error saving subscription:', error);
        }
    };


    return (
        <div className='p-4 md:p-6'>
            <div className='text-center mb-6 md:mb-8'>
                <h1 className='text-2xl md:text-3xl font-bold mb-2'>Upgrade Your Plan</h1>
                <p className='text-gray-600 text-sm md:text-base'>Choose the perfect plan for your needs</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto'>
                {/* Free Plan */}
                <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
                    <div className='text-center'>
                        <h3 className='text-xl font-semibold text-gray-900'>Free</h3>
                        <div className='mt-4'>
                            <span className='text-4xl font-bold'>₹0</span>
                            <span className='text-gray-500'>/month</span>
                        </div>
                    </div>
                    <ul className='mt-6 space-y-3'>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-500 mr-3' />
                            <span>10,000 words/month</span>
                        </li>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-500 mr-3' />
                            <span>50+ AI Templates</span>
                        </li>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-500 mr-3' />
                            <span>Basic Support</span>
                        </li>
                    </ul>
                    <Button className='w-full mt-6' variant='outline' disabled>
                        {userPlan === 'free' ? 'Current Plan' : 'Basic Plan'}
                    </Button>
                </div>

                {/* Pro Plan */}
                <div className='bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-6 shadow-lg relative'>
                    <div className='absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold'>
                        Popular
                    </div>
                    <div className='text-center'>
                        <h3 className='text-xl font-semibold'>Pro</h3>
                        <div className='mt-4'>
                            <span className='text-4xl font-bold'>₹100</span>
                            <span className='text-purple-200'>/month</span>
                        </div>
                    </div>
                    <ul className='mt-6 space-y-3'>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-400 mr-3' />
                            <span>10,00,000 words</span>
                        </li>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-400 mr-3' />
                            <span>All AI Templates</span>
                        </li>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-400 mr-3' />
                            <span>Priority Support</span>
                        </li>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-400 mr-3' />
                            <span>Export to PDF/Word</span>
                        </li>
                        <li className='flex items-center'>
                            <Check className='w-5 h-5 text-green-400 mr-3' />
                            <span>Advanced AI Models</span>
                        </li>
                    </ul>
                        <Button 
                            onClick={CreateSubscription} 
                            disabled={userSubscription || loading}
                            className='w-full cursor-pointer  mt-6 bg-white text-purple-600 hover:bg-gray-100'
                        >
                            {loading ? (
                                <><Loader2 className='w-4 h-4 mr-2 animate-spin' />Processing...</>
                            ) : (
                                <><Zap className='w-4 h-4 mr-2' /> {userSubscription? 'Active Plan' : 'Upgrade Now'}</>
                            )}
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default billing