'use client';

import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';

import { useSupabase } from '@/components/providers/supabase-provider';

function NewForm() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const searchParams = useSearchParams();
  const { id, category_name, title, content } = Object.fromEntries(searchParams);

  async function addNewPost(formData: FormData) {
    const formDataObj = Object.fromEntries(formData);
    const { category_name: newCat, title: newTit, content: newCon } = formDataObj;
    if (newCat === '') alert('카테고리를 선택해주세요.');
    else if (title === newCat || content === newCat) return;
    const { error } = await supabase
      .from('test_posts')
      .update({
        ...formDataObj,
        updated_at: new Date().toISOString,
      })
      .eq('id', id);
    if (!error) router.push(`/community/${id}`);
    else toast.error(`게시글을 수정하지 못했습니다. ${error.message}`);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewPost(new FormData(e.currentTarget));
      }}
      className="grid grid-cols-1 gap-y-4"
    >
      <div className='space-y-1'>
        <label htmlFor="category" className='font-medium'>카테고리</label>
        <select
          id="category"
          name='category_name'
          defaultValue={category_name}
          className="w-full block p-2 rounded-sm border focus:outline-none focus:border-black"
          required
        >
          <option value=''>카테고리를 선택해주세요.</option>
          <option value="자유">자유</option>
          <option value="클래식">클래식</option>
        </select>
      </div>
      <div>
        <label htmlFor="title" className='font-medium'>제목</label>
        <input
          id="title"
          name="title"
          defaultValue={title}
          placeholder="제목을 입력해주세요."
          className="w-full block p-2 rounded-sm border focus:outline-none focus:border-black"
          minLength={3}
          required
        />
      </div>
      <div>
        <label htmlFor="content" className='font-medium'>내용</label>
        <textarea
          id="content"
          name="content"
          defaultValue={content}
          placeholder="내용을 입력해주세요."
          minLength={3}
          className="w-full block p-2 rounded-sm border h-80 max-h-96 focus:outline-none focus:border-black"
          required
        />
      </div>
      <div className="flex items-center gap-x-2 font-medium justify-end">
        <button
          onClick={() => {
            confirm('정말로 취소하시겠습니까?') && router.back()
          }}
          className="px-4 py-2 transition-colors bg-[#FFD78A] hover:bg-[#FFE7B8]"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-4 py-2 transition-colors bg-[#BCC8D1] hover:bg-[#C2D7E8]"
        >
          등록
        </button>
      </div>
    </form>
  );
}

export default NewForm;