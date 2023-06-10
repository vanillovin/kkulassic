'use client';

import { ClassicsResponseSuccess } from '@/app/classics/page';
import ClassicItem from './ClassicItem';

function ClassicList({ classics }: { classics: ClassicsResponseSuccess }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4'>
      {classics?.map(classic =>
        <ClassicItem key={classic.id} classic={classic} />
      )}
    </div>
  )
}

export default ClassicList