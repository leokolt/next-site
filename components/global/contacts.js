import styles from '@/styles/contacts.module.css'
import ContactForm from './contactForm'

import siteMetadata from '@/lib/siteMetadata'

export default function Contacts({description, bgs}) {

    //const contactsClasses = [styles.contacts, "cageBg"].join(" ")

    return (
        <section className={styles.contacts} data-num={bgs}>
            <div className="wrapper">
                <div className={styles.contactsInner}>
                    <div className={styles.contactsLeft}>
                        <h2 className={styles.contactsDesc}>{description}</h2>
                        <a href={siteMetadata.telegram} className={styles.contactsLinkTg}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            <span>t.me/leonidkoltan</span>
                        </a>
                        <a href={siteMetadata.whatsapp} className={styles.contactsLinkWa}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            <span>wa.me/79923554536</span>
                        </a>
                        <a href={`mailto:${siteMetadata.email}`} className={styles.contactsLinkEmail}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"/></svg>
                            <span>hello@koltan.dev</span>
                        </a>
                        <a href="https://kwork.ru/user/cazumbra" className={styles.contactsLink}>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 23"><path d="m19.2 21.9-8.5-10.6 8-9.4h-5.3L1.9 16.2v5.7h4.3v-6.1l1.6-1.9 6.1 8h5.3z" fill="#111"/><path d="m6.2 6.1-4.3 5.2V4.4H0V1.8h6.2v4.3z" fill="#ffa800"/></svg>
                            <span>kwork.ru/cazumbra</span>
                        </a>
                    </div>
                    <div className={styles.contactsRight}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={styles.contactsBgs}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactsBgs1} width="80" height="60"><path fill="#494949" fillRule="evenodd" d="M0 20v40h26.033C55.844 60 80 32.309 80 0H40c0 10.862-9.978 20-20 20H0Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactsBgs2} viewBox="0 0 160 172.3" width="80" height="60"><path d="M143 1h-40v34L15 87.1 143 161v-39.9l-58.3-34L143 53.3z" fill="#F65F59"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactsBgs3} width="80" height="40"><g fill="#1F51A3" fillRule="evenodd"><path d="M0 10 9.896 0H4.418L0 5zM0 28 26.896 0h-5.478L0 22zM7 40 44.896 0h-5.478L1 40zM24 40 61.896 0h-5.478L18 40zM41 40 78.896 0h-5.478L35 40zM58 40l22-23v-6L52 40zM75 40l5-5v-6L69 40z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactsBgs4} width="140" height="120"><path fill="#F65F59" fillRule="evenodd" d="M60 0v40c-12.694 0-14 7.29-14 20 0 12.712 1.306 20 14 20h80v40H60c-33.674-.276-60-26.01-60-60C0 25.735 25.775 0 60 0Z"/></svg>
            </div>
        </section>
    )

}
