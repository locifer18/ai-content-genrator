import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item?.slug}`}>
      <div className='border bg-white flex flex-col gap-3 p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105'>
        <Image src={item.icon} alt={item.name} width={40} height={40} className='md:w-[50px] md:h-[50px]' />
        <h2 className='font-bold text-base md:text-lg'>{item.name}</h2>
        <p className='text-gray-500 text-sm md:text-base line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard