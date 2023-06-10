'use client';

import ClassicList from './ClassicList';
import { useState } from 'react';
import ClassicSearchForm from './ClassicSearchForm';
import { ClassicsResponseSuccess } from '@/app/classics/page';

function ClassicsContainer({ classics }: { classics: ClassicsResponseSuccess }) {
  const [searchQuery, setSearchQuery] = useState('');
  const filterdClassics = classics?.filter((classic) =>
    classic?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const results = searchQuery ? filterdClassics : classics;

  return (
    <div className='p-4'>
      <ClassicSearchForm
        value={searchQuery}
        onClick={() => setSearchQuery('')}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
      />
      <ClassicList classics={results!} />    
    </div>
  )
}

export default ClassicsContainer;