import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item?.slug}`}>
      <div className='border bg-white flex flex-col gap-2 p-5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className='font-bold text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard