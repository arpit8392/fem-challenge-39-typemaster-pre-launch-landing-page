import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import Footer from '@/components/Footer'

const barlow = Barlow({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Typemaster Pre-Launch Landing Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={barlow.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
