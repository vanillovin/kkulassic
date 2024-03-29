"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { formatTimestamp } from "@/utils/dateUtils";
import { useSupabase } from "@/components/providers/supabase-provider";

type CommentItemProps = {
	comment: PostComment;
	postId: string;
	commentCount: number;
};

function CommentItem({ comment, postId, commentCount }: CommentItemProps) {
	const queryClient = useQueryClient();
	const { supabase, session } = useSupabase();

	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(comment.content);

	const isDisabled = content.trim().length < 3 || content === comment.content;

	async function decreaseCommentCount() {
		const { data, error } = await supabase
			.from("posts")
			.update({ comment_count: commentCount - 1 })
			.eq("id", postId);
		console.log(data, error);
	}

	async function deleteComment() {
		const { error } = await supabase
			.from("comments")
			.delete()
			.eq("id", comment.id);
		if (!error) {
			queryClient.invalidateQueries(["postComments", postId]);
			decreaseCommentCount();
		}
	}

	async function editComment() {
		if (isDisabled) return;
		const { error } = await supabase
			.from("comments")
			.update({ content, updated_at: new Date().toISOString() })
			.eq("id", comment.id);
		if (!error) {
			setIsEditing(false);
			queryClient.invalidateQueries(["postComments", postId]);
		}
	}

	return (
		<li className="px-1 py-2 border-b last:border-b-0 text-sm sm:text-base">
			<div className="flex items-center justify-between pb-1">
				<div className="flex space-x-1">
					<Link
						href={`/profile/${comment.user_id}`}
						className="font-semibold hover:underline underline-offset-2"
					>
						{comment.nickname}
					</Link>
					<div className="flex items-center text-xs sm:text-sm text-gray-400">
						<p>· {formatTimestamp(comment.created_at)}</p>
						{comment.created_at !== comment.updated_at && (
							<p className="mx-1">
								· <span className="text-vintage-holiday-red/60">수정됨</span>
							</p>
						)}
					</div>
				</div>
				{session?.user.id === comment.user_id && (
					<div className="dropdown dropdown-left">
						<label
							tabIndex={0}
							className="cursor-pointer font-medium hover:text-pantone-brandy-sniffer"
						>
							⋯
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content z-[1] p-1 text-sm shadow bg-base-100 rounded-sm w-24 transition-all"
						>
							<li className="w-full flex items-center justify-center p-1 transition-all hover:bg-gray-100">
								<button
									aria-label="댓글 수정하기"
									onClick={() => setIsEditing(true)}
									className="flex items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-3 h-3"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
										/>
									</svg>
									<span className="ml-1">수정하기</span>
								</button>
							</li>
							<li className="w-full flex items-center justify-center p-1 transition-all hover:bg-gray-100">
								<button
									aria-label="댓글 삭제하기"
									onClick={deleteComment}
									className="flex items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-3 h-3"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
									<span className="ml-1">삭제하기</span>
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
			{!isEditing ? (
				<p className="font-ligiht">{comment.content}</p>
			) : (
				<div className="flex items-center gap-1 h-8">
					<input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="flex-1 h-full px-1 border focus:outline-none focus:border-black"
					/>
					<div className="h-full space-x-1 text-white">
						<button
							onClick={() => setIsEditing(false)}
							aria-label="댓글 수정 취소"
							className="w-10 h-full transition-colors bg-pantone-cream hover:bg-pantone-natural"
						>
							취소
						</button>
						<button
							onClick={editComment}
							disabled={isDisabled}
							aria-label="댓글 수정 완료"
							className={`w-10 h-full transition-colors ${
								isDisabled
									? "bg-pantone-latte"
									: "bg-pantone-toffee hover:bg-pantone-cocoa"
							}`}
						>
							저장
						</button>
					</div>
				</div>
			)}
		</li>
	);
}

export default CommentItem;
