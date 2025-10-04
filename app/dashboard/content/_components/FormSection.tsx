'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any;
    loading: boolean;
}

const FormSection = ({ loading, selectedTemplate, userFormInput }: PROPS) => {
    const [formData, setFormData] = useState<any>();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }
    return (
        <div className='border p-5 bg-white shadow-md rounded-lg'>
            <Image src={selectedTemplate?.icon || ""} alt='icon' width={50} height={50} />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => {
                    return (
                        <div key={index} className='font-bold flex flex-col gap-2 mb-7 my-2'>
                            <label htmlFor={item.field} className='font-bold'>{item.label}</label>
                            {item.field == 'input' ?
                                <Input name={item.name} required={item?.required} onChange={handleInputChange} />
                                : item.field == 'textarea' ?
                                    <Textarea name={item.name} required={item?.required} onChange={handleInputChange} /> : null}
                        </div>
                    )
                })}
                <Button disabled={loading} type='submit' className='w-full py-6 bg-primary hover:bg-primary/90 cursor-pointer'>
                {loading&&<Loader2Icon className='animate-spin'/>}
                Generate Content</Button>
            </form>
        </div>
    )
}

export default FormSection