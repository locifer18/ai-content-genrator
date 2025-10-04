'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const dashboard = () => {
  const [userSearchTerm, setUserSearchTerm] = useState<string>();
  return (
    <div>
        <SearchSection onSearchInput={(value:string)=>setUserSearchTerm(value)} />

        <TemplateListSection searchInput={userSearchTerm} />
    </div>
  )
}

export default dashboard