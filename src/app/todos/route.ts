import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
	const { id, isComplete } = await request.json();

	const supabase = createRouteHandlerClient<Database>({ cookies });
	const { data } = await supabase
		.from("todos")
		.update({ is_complete: isComplete })
		.match({ id });

	return NextResponse.json(data);
}
