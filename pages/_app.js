import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
//import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'
import Layout from '@/components/layout'


// const font = Rubik({
// 	subsets: ['latin', 'cyrillic'],
// })

const font = localFont({
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
					html * {
						font-family: ${font.style.fontFamily};
					}
				`}</style>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>

	)
}
