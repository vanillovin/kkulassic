import supabase from "@/lib/supabase/client";
import type { PostgrestError } from "@supabase/supabase-js";

export type ClassicalMusicListResult = {
	classicalMusicList: Classic[] | null;
	count: number | null;
	took: string;
	error?: PostgrestError | null;
};

export async function getClassicalMusicList(
	from: number = 0,
	to: number = 15,
	keyword: string = "",
): Promise<ClassicalMusicListResult> {
	const start = Date.now();
	const decodeKeword = decodeURIComponent(keyword);

	const { data, error, count } = await supabase
		.from("classical_music")
		.select("*", { count: "exact" })
		.ilike("title", `%${decodeKeword}%`)
		.range(from, to);
	const end = Date.now();

	return {
		classicalMusicList: data || null,
		count: count || null,
		took: ((end - start) / 1000).toFixed(2),
		error: error || null,
	};
	// try {
	// } catch (err) {
	//   console.error(err);
	//   const endAtError = Date.now();
	//   return {
	//     classics: null,
	//     count: null,
	//     took: ((endAtError - start) / 1000).toFixed(2),
	//   };
	// }
}
