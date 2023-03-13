import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
//import { Overpass } from 'next/font/google'
import localFont from 'next/font/local'
import Layout from '@/components/layout'

// const font = Overpass({
// 	subsets: ['latin', 'cyrillic'],
// })

const font = localFont({
	src: [
	  {
		path: '../public/fonts/PPNeueMachina-PlainRegular.woff2',
		weight: '400',
	  },
	  {
		path: '../public/fonts/PPNeueMachina-PlainUltrabold.woff2',
		weight: '700',
	  },
	],
  });

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Layout>
				<style jsx global>{`
					html {
						font-family: ${font.style.fontFamily};
					}
				`}</style>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>

	)
}
