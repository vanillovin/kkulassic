'use client';

import Link from 'next/link';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

import { useSupabase } from '@/components/providers/supabase-provider';
import { useQueryClient } from '@tanstack/react-query';

function CommentItem({ comment }: { comment: ClassicComment }) {
  const { supabase } = useSupabase();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(comment.content);
  
  async function handleEditComment() {
    const { error } = await supabase
      .from('classic_comments')
      .update({ content })
      .eq('id', comment.id);
      
    if (!error) {
      setIsEditing(false);
      queryClient.invalidateQueries(['classicComments', String(comment.classic_id)]);
      toast.success('댓글 수정 완료');
    } else {
      toast.error(`댓글 수정 실패 ${error.message}`);
    }
  } 

  async function handleDeleteComment() {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;
    const { error } = await supabase
      .from('classic_comments')
      .delete()
      .eq('id', comment.id);

    if (!error) {
      toast.success('댓글 삭제 완료');
      queryClient.invalidateQueries(['classicComments', String(comment.classic_id)]);
    } else {
      toast.error(`댓글 삭제 실패 ${error.message}`);
    }
  }

  return (
    <li
      key={comment.id}
      className='first:border-t border-b border-white bg-white bg-opacity-40 p-2'
    >
      {!isEditing ? (
        <>
          <div className='flex items-center justify-between'>
            <div>
              <Link
                href={`/profile/${comment.user_id}`}
                className='font-medium hover:underline'
              >
                {comment.nickname}
              </Link>
              <span className='text-sm ml-1 text-yellow-800'>
                {comment.created_at.split('T')[0]}
                {/* <span className='ml-1'>{comment.created_at.split('T')[1].split('.')[0].substring(0, 5)}</span> */}
              </span>
            </div>
            <div className='flex gap-1'>
              <button 
                className='text-gray-800 text-sm px-1 hover:text-yellow-500 transition-all' 
                onClick={() => setIsEditing(true)}
              >
                수정
              </button>
              <button 
                className='text-gray-800 text-sm px-1 hover:text-rose-500 transition-all' 
                onClick={handleDeleteComment}
              >
                삭제
              </button>
            </div>
          </div>
          <p className=''>{comment.content}</p>
        </>
      ) : (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full p-1 rounded-sm max-h-32'
          />
          <div className='text-end'>    
            <button 
              className='text-sm py-1 px-2 bg-yellow-500 rounded-sm hover:opacity-70 transition-all' 
              onClick={handleEditComment}
              >
                확인
              </button>
            <button 
              className='text-sm py-1 px-2 bg-rose-500 rounded-sm ml-1 hover:opacity-70 transition-all' 
              onClick={() => setIsEditing(false)}
            >
              취소
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default CommentItem;