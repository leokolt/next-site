import NextNProgress from 'nextjs-progressbar';

import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
//import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'
import Layout from '@/components/layout'

// @ts-ignore
import { PageTransition } from 'next-page-transitions'

// const fontNew = localFont({
// 	src: [
// 		{
// 		  path: '../public/fonts/Steinbeck.woff2',
// 		  weight: '400',

// 		}
// 	]
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


export default function App({ Component, pageProps }) {

	return (

		<ThemeProvider enableSystem={true}>
			<Layout>
				<style jsx global>{`
					p, div, h1, h2, h3, h4, h5, h6, span, time, a, input, textarea, button {
						font-family: ${fontText.style.fontFamily};
					}
					.page-transition-enter {
						opacity: 0;
						transform: translateY(20px);
					}
					.page-transition-enter-active {
						opacity: 1;
						transform: translateY(0);
						transition: all 300ms;
					}
					.page-transition-exit {
						opacity: 1;
						transform: translateX(0);
					}
					.page-transition-exit-active {
						opacity: 0;
						transition: all 300ms;
						transform: translateX(20px);
					}
				`}</style>
				<NextNProgress color="#F65F59"/>
				<PageTransition timeout={300} classNames="page-transition">
					<Component {...pageProps} />
				</PageTransition>
			</Layout>
		</ThemeProvider>

	)
}
