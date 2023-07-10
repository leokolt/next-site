import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
//import { Rubik } from 'next/font/google'
import localFont from 'next/font/local'
import Layout from '@/components/layout'


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

  const fontHead = localFont({
	src: [
		{
			path: '../public/fonts/PPNeueMachina-PlainRegular.woff2',
			weight: '400',
		  },
	]
})

const fontAnother = localFont({
	src: [
		{
			path: '../public/fonts/PPNeueMachina-PlainLight.woff2',
			weight: '300',
		  }
	]
})

export default function App({ Component, pageProps }) {

	return (
		<ThemeProvider enableSystem={true}>
			<Layout>
				<style jsx global>{`
					html * {
						font-family: ${fontText.style.fontFamily};
					}
					h1, h2, h3, h4, h5, h6 {
						/* font-family: ${fontHead.style.fontFamily};
					} */
				`}</style>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>

	)
}
