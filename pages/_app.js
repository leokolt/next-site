import NextNProgress from 'nextjs-progressbar';

import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
//import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'
import Layout from '@/components/layout'

import PageTransition from '@/components/withTransition'

// const font = Rubik({
// 	subsets: ['latin', 'cyrillic'],
// })

const fontText = localFont({
	src: [
	  {
		path: '../public/fonts/Onest-Regular.woff',
		weight: '400',

	  },
	  {
		path: '../public/fonts/Onest-Regular.woff2',
		weight: '400',
	  },
	  {
		path: '../public/fonts/Onest-Bold.woff',
		weight: '700',
	  },
	  {
		path: '../public/fonts/Onest-Bold.woff2',
		weight: '700',
	  },

	],
	variable: '--onest-font'
});


export default function App({ Component, pageProps, router }) {

	return (

		<ThemeProvider enableSystem={true}>
			<Layout>
				<style jsx global>{`
					p, div, h1, h2, h3, h4, h5, h6, span, time, a, input, textarea, button {
						font-family: ${fontText.style.fontFamily};
					}
				`}</style>
				<NextNProgress color="#F65F59"/>
				<PageTransition Component={Component}
        pageProps={pageProps}
        router={router} />

			</Layout>
		</ThemeProvider>

	)
}
