import React from "react";
import Link from "next/link";

type ClassicListProps = {
	classics: Classic[];
	selectedTags: string[];
};

function ClassicList({ classics, selectedTags }: ClassicListProps) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 my-6">
			{classics?.map((classic) => (
				<Link
					href={`/classics/${classic.id}`}
					key={classic.id}
					className="rounded-sm shadow-md p-1 sm:p-2 bg-opacity-70 hover:bg-opacity-100 transition-all bg-white"
				>
					<p className="font-medium text-sm sm:text-base">{classic.title}</p>
					<ul className="flex flex-wrap mt-1">
						{classic.tags.map((tag) => (
							<li
								key={tag}
								className={`px-1 rounded-sm mr-1 mb-1 text-xs sm:text-sm
                  ${
										selectedTags.includes(tag)
											? "text-white bg-watery-2"
											: "text-black bg-watery-4"
									}
                `}
							>
								{tag}
							</li>
						))}
					</ul>
				</Link>
			))}
		</div>
	);
}

export default ClassicList;
