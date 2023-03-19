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
		path: '../public/fonts/Onest-Black.woff',
		weight: '900',
	  },
	  {
		path: '../public/fonts/Onest-Black.woff2',
		weight: '900',
	  },
	],
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
