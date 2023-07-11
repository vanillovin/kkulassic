import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import ClassicsContainer from './ClassicsContainer';
import { createServerClient } from '@/utils/supabase-server';

export const metadata: Metadata = siteConfig.metaData['classics'];

export default async function ClassicsPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: classics } = await supabase.from('all_classics').select();
  const { data: likes } = await supabase
    .from('classic_likes')
    .select()
    .eq('user_id', user?.id);
  
  return (
    <div className='p-3 sm:p-6'>
      <ClassicsContainer classics={classics ?? []} likes={likes ?? []} />
    </div>
  );
}
