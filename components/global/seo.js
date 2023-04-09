import Head from "next/head"
import siteMetadata from "@/lib/siteMetadata"

const Seo = ({
    title,
    description,
    canonicalUrl = typeof window !== 'undefined' ? window.location.href : '',
    ogTwitterImage,
    ogImageUrl,
    ogType,
    children,
}) => {

    //const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            //basic metadata
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
            <link rel="icon" type="image/png" href="/images/favicon.png" />
            //twitter metadata
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={siteMetadata.twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
            //canonical link
            <link rel="canonical" href={canonicalUrl} />
            //open graph metadata
            <meta property="og:locale" content="ru" />
            <meta property="og:site_name" content={siteMetadata.companyName} />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={canonicalUrl} />
            {children}
        </Head>
    )
}

export default Seo
