import '@/styles/globals.css'
import { Mulish } from 'next/font/google'
import Layout from '@/components/layout'

const font = Mulish({ subsets: ['latin', 'cyrillic'] })

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<style jsx global>{`
				html {
					font-family: ${font.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</Layout>
	)
}
