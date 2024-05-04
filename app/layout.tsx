import type { Metadata } from "next";
import { Inter } from "next/font/google";

import 'react-toastify/dist/ReactToastify.min.css';
import "../styles/globals.scss";

import { ModalContextProvider } from "@/context/modalContext";
import { CartContextProvider } from "@/context/cartContext";
import { CartDrawerContextProvider } from "@/context/cartDrawerContext";
import { NotificationProvider } from "@/context/notificationContext";

import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CartDrawer from "@/components/Cart/CartDrawer";
import Notification from "@/components/Notification";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	icons: {
		icon: "/assets/favicon/favicon.ico",
		apple: "/assets/favicon/apple-icon.png",
	},
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<CartContextProvider>
				<CartDrawerContextProvider>
					<NotificationProvider>
						<ModalContextProvider>
							<body style={{ minHeight: '100vh' }} className={`${inter.className} d-flex flex-column  background-pattern-crossword`}>
								<Header />

								<main className="flex-grow-1 overflow-hidden">
									{children}
								</main>

								<CartDrawer />
								<Notification />

								<Footer />

								<BootstrapClient />
								
							</body>
						</ModalContextProvider>
					</NotificationProvider>
				</CartDrawerContextProvider>
			</CartContextProvider>
		</html>
	);
}
