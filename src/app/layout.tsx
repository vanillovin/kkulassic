import type { Metadata } from "next";
import { type PropsWithChildren } from "react";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

import "./globals.css";
import { siteConfig } from "@/config/site";
import Layout from "@/components/layout/Layout";
import { createServerClient } from "@/utils/supabase-server";
import ReactQueryProvider from "./ReactQueryProvider";
import { AuthProvider } from "@/components/providers/auth-provider";
import SupabaseProvider from "@/components/providers/supabase-provider";
import SupabaseListener from "@/components/providers/supabase-listener";
import { ToastifyProvider } from "@/components/providers/toastify-provider";

export type TypedSupabaseClient = SupabaseClient;

export const metadata: Metadata = siteConfig.metaData["home"];

// do not cache this page
export const revalidate = 0;

export default async function RootLayout({ children }: PropsWithChildren) {
	const supabase = createServerClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<html lang="ko">
			<head />
			<body className="scrollbar">
				<ReactQueryProvider>
					<SupabaseProvider session={session}>
						<SupabaseListener serverAccessToken={session?.access_token} />
						<AuthProvider session={session}>
							<ToastifyProvider>
								<Layout>{children}</Layout>
							</ToastifyProvider>
						</AuthProvider>
					</SupabaseProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
