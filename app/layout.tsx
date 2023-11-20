import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./Navbar";
import "./globals.css";
import Provider from "./auth/Provider";
import QueryProvider from "./QueryClient/QueryProvider";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={poppins.variable}>
			<body>
				<Theme appearance="light" accentColor="ruby">
					<QueryProvider>
						<Provider>
							<Navbar />
							<Container>{children}</Container>
						</Provider>
					</QueryProvider>
				</Theme>
			</body>
		</html>
	);
}
