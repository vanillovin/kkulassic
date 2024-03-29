import { notFound } from "next/navigation";

import PostContainer from "./PostContainer";
import CommentContainer from "./CommentContainer";
import { createServerClient } from "@/utils/supabase-server";

// export const revalidate = 60;

type PostPageProps = { params: { id: string } };

export default async function PostPage({ params: { id } }: PostPageProps) {
	const supabase = createServerClient();
	// const { data: { user } } = await supabase.auth.getUser();
	const { data: post } = await supabase
		.from("posts")
		.select("*")
		.match({ id })
		.single();
	const { data: comments } = await supabase
		.from("comments")
		.select("*")
		.order("created_at", { ascending: false })
		.eq("post_id", id);

	if (!post) notFound();

	return (
		<article className="max-w-6xl mx-auto px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<div className="w-full flex flex-col sm:flex-row shadow-md bg-gradient-radial from-[#fff] to-[#f4f5f0]">
				<section className="w-full md:w-1/2 h-[350px] md:h-[700px] flex flex-col p-4 border-b md:border-r">
					<PostContainer postId={id} serverPost={post} />
				</section>
				<section className="w-full md:w-1/2 h-[350px] md:h-[700px] flex flex-col p-4 gap-y-1 sm:gap-y-2">
					<CommentContainer
						postId={id}
						postTitle={post.title}
						serverComments={comments ?? []}
					/>
				</section>
			</div>
		</article>
	);
}
