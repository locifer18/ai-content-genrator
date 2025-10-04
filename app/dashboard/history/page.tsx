'use client'
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import Templates from '@/app/(data)/Templates';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

export interface HistoryItem {
    id: number;
    formData: string;
    aiResponse: string | null;
    templateSlug: string;
    createdBy: string;
    createdAt: string | null;
}

const History = () => {
    const { user } = useUser();
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        if (user) {
            fetchHistory();
        }
    }, [user]);

    const fetchHistory = async () => {
        setLoading(true);
        try {
            if (user?.primaryEmailAddress?.emailAddress) {
                const result = await db.select().from(AIOutput)
                    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
                    .orderBy(desc(AIOutput.id)); // Order by most recent
                setHistory(
                    result.map(item => ({
                        ...item,
                        createdAt: item.createdAt ? item.createdAt.toISOString() : null,
                    })) as HistoryItem[]
                );
            }
        } catch (error) {
            console.error("Error fetching history:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className='bg-white rounded-lg shadow-sm min-h-[80vh]'>
            <h1 className='text-2xl md:text-3xl font-bold mb-2'>History</h1>
            <p className='text-gray-500 mb-6 text-sm md:text-base'>Search your previously generated AI content.</p>
            
            {/* Desktop Table View */}
            <div className='hidden md:block'>
                <div className='grid grid-cols-6 bg-gray-50 p-3 font-semibold text-sm text-gray-600 rounded-t-lg border-b'>
                    <h2 className='col-span-1'>TEMPLATE</h2>
                    <h2 className='col-span-2'>AI RESP</h2>
                    <h2 className='col-span-1'>DATE</h2>
                    <h2 className='col-span-1'>WORDS</h2>
                    <h2 className='col-span-1'>COPY</h2>
                </div>
                <div className=''>
                    {loading ? (
                        <div className='flex justify-center items-center mt-10'>
                            <Loader2 className='w-8 h-8 animate-spin' />
                        </div>
                    ) : (
                        history.map((item) => {
                            const template = Templates.find(t => t.slug === item.templateSlug);
                            const wordCount = item.aiResponse?.trim().split(/\s+/).length || 0;
                            return (
                                <div className='font-bold grid grid-cols-6 p-4 items-center border-b border-gray-100' key={item.id}>
                                    <div className='col-span-1 flex items-center gap-2'>
                                        {template && <Image src={template.icon} alt={template.name} width={25} height={25} />}
                                        <span className='text-sm'>{template?.name || item.templateSlug}</span>
                                    </div>
                                    <p className='col-span-2 text-sm px-3 line-clamp-3'>{item.aiResponse}</p>
                                    <p className='col-span-1 text-sm'>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '-'}</p>
                                    <p className='col-span-1 text-sm'>{wordCount}</p>
                                    <div className='col-span-1'>
                                        <Button 
                                            variant="ghost" 
                                            className="text-primary hover:bg-primary/10" 
                                            onClick={() => handleCopy(item.aiResponse || '')}
                                        >
                                            Copy
                                        </Button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            
            {/* Mobile Card View */}
            <div className='md:hidden space-y-4'>
                {loading ? (
                    <div className='flex justify-center items-center mt-10'>
                        <Loader2 className='w-8 h-8 animate-spin' />
                    </div>
                ) : (
                    history.map((item) => {
                        const template = Templates.find(t => t.slug === item.templateSlug);
                        const wordCount = item.aiResponse?.trim().split(/\s+/).length || 0;
                        return (
                            <div className='bg-gray-50 p-4 rounded-lg border' key={item.id}>
                                <div className='flex items-center gap-2 mb-3'>
                                    {template && <Image src={template.icon} alt={template.name} width={20} height={20} />}
                                    <span className='font-semibold text-sm'>{template?.name || item.templateSlug}</span>
                                </div>
                                <p className='text-sm text-gray-700 mb-3 line-clamp-3'>{item.aiResponse}</p>
                                <div className='flex justify-between items-center text-xs text-gray-500'>
                                    <span>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '-'}</span>
                                    <span>{wordCount} words</span>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm"
                                    className="w-full mt-3 text-primary hover:bg-primary/10" 
                                    onClick={() => handleCopy(item.aiResponse || '')}
                                >
                                    Copy Content
                                </Button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}

export default History;