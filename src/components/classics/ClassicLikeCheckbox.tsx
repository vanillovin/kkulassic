"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import HeartIcon from "../icons/HeartIcon";
import supabase from "@/lib/supabase/client";
import { useSupabase } from "../providers/supabase-provider";

type ClassicLikeCheckboxProps = {
	classicId: number;
	classicTitle: string;
	className?: string;
	serverLikeCount: number;
	isShowLikeCount?: boolean;
};

const CLASSIC_LIKES_QUERY_KEY = (userId: string) => ["classicLikes", userId];

// TODO: 실제 서버 likeCount 변경
async function fetchClssicLikes(userId: string): Promise<ClassicLike[]> {
	const { data } = await supabase
		.from("classic_likes")
		.select("*")
		.eq("user_id", userId);
	return data ?? [];
}

function ClassicLikeCheckbox({
	classicId,
	classicTitle,
	className = "",
	serverLikeCount,
	isShowLikeCount = false,
}: ClassicLikeCheckboxProps) {
	const queryClient = useQueryClient();
	const { supabase, session } = useSupabase();
	const checkboxId = `checkbox-${classicId}`;

	const { data: likes } = useQuery({
		queryKey: CLASSIC_LIKES_QUERY_KEY(session?.user.id ?? ""),
		queryFn: () => fetchClssicLikes(session!.user.id),
		enabled: !!session,
	});
	const [isHovered, setIsHovered] = useState(false);
	const handleHoverInAndOut = () => setIsHovered(!isHovered);
	const isLiked = !!likes?.find((like) => like.classic_id === classicId);
	const [likeCount, setLikeCount] = useState(serverLikeCount);

	async function addLike() {
		const { error } = await supabase.from("classic_likes").insert({
			classic_title: classicTitle,
			classic_id: classicId,
			user_id: session!.user.id,
		});
		if (error) throw error;
		const { error: updateError } = await supabase
			.from("all_classics")
			.update({ like_count: likeCount })
			.eq("id", classicId);
		if (updateError) throw updateError;
	}

	async function removeLike() {
		const { error } = await supabase
			.from("classic_likes")
			.delete()
			.eq("classic_id", classicId);
		if (error) throw error;

		const { error: updateError } = await supabase
			.from("all_classics")
			.update({ like_count: likeCount })
			.eq("id", classicId);
		if (updateError) throw updateError;
	}

	const addLikeMutation = useMutation(addLike, {
		onMutate: () => {
			setLikeCount((prev) => prev + 1);
		},
		onError: (error) => {
			console.error("addLikeMutation error", error);
			toast.error("좋아요 추가 중 오류가 발생했습니다.");
			setLikeCount((prev) => prev - 1);
		},
		onSuccess: () => {},
		onSettled: () => {
			queryClient.invalidateQueries(["classicLikes", session!.user.id]);
		},
	});

	const removeLikeMutation = useMutation(removeLike, {
		onMutate: () => {
			setLikeCount((prev) => prev - 1);
		},
		onError: (error) => {
			console.error("removeLikeMutation error", error);
			toast.error("좋아요 취소 중 오류가 발생했습니다.");
			setLikeCount((prev) => prev + 1);
		},
		onSuccess: () => {},
		onSettled: () => {
			queryClient.invalidateQueries(["classicLikes", session!.user.id]);
		},
	});

	function handleAddOrRemoveLike(e: React.MouseEvent<HTMLInputElement>) {
		e.preventDefault();
		if (!session) {
			return toast.error("로그인 후 이용 가능합니다.");
		}
		const mutationFn = isLiked ? removeLikeMutation : addLikeMutation;
		mutationFn.mutate();
	}

	return (
		<div className={`flex items-center justify-center ${className}`}>
			<label
				htmlFor={checkboxId}
				className="flex items-center justify-center cursor-pointer"
			>
				<HeartIcon
					fill={isLiked ? "currentColor" : isHovered ? "currentColor " : "none"}
					onMouseEnter={handleHoverInAndOut}
					onMouseLeave={handleHoverInAndOut}
					onClick={handleAddOrRemoveLike}
				/>
			</label>
			<input
				id={checkboxId}
				type="checkbox"
				checked={isLiked}
				// aria-checked={isLiked}
				aria-label={`클래식 좋아요${isLiked ? " 취소" : ""}`}
				className="hidden"
			/>
			<span aria-live="polite"></span>
			{isShowLikeCount && (
				<span className="text-sm sm:text-base">{likeCount}</span>
			)}
		</div>
	);
}

export default ClassicLikeCheckbox;
