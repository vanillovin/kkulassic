"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import CommentItem from "./CommentItem";
import supabase from "@/lib/supabase/client";
import CommentForm from "./CommentForm";

type CommentContainerProps = {
	postId: string;
	postTitle: string;
	serverComments: PostComment[];
};
function CommentContainer({
	postId,
	postTitle,
	serverComments,
}: CommentContainerProps) {
	const { data: comments } = useQuery({
		queryKey: ["postComments", postId],
		queryFn: async () => {
			const { data } = await supabase
				.from("comments")
				.select()
				.order("created_at", { ascending: false })
				.eq("post_id", postId);
			return data ? (Array.isArray(data) ? data : [data]) : null;
		},
		initialData: serverComments,
		suspense: true,
	});

	return (
		<>
			<p className="text-sm sm:text-base pb-1">
				<span className="font-medium">{comments?.length}</span>
				개의 댓글
			</p>
			<CommentForm
				postId={postId}
				postTitle={postTitle}
				commentCount={comments?.length ?? 0}
			/>
			<ul className="comm-scrollbar overflow-y-scroll flex-1 mt-2">
				{comments ? (
					comments.length > 0 ? (
						comments.map((comment) => (
							<CommentItem
								key={comment.id}
								comment={comment}
								postId={postId}
								commentCount={comments.length}
							/>
						))
					) : (
						<p className="px-1 py-2 font-light">아직 댓글이 없어요!</p>
					)
				) : (
					<p className="px-1 py-2 font-light">댓글을 불러오지 못했어요!</p>
				)}
			</ul>
		</>
	);
}

export default CommentContainer;
