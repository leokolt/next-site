import styles from "@/styles/home/profs.module.css"
import Image from "next/image";

const Profs = () => {

    const items = [
        { symbol: '/images/profits/profit-1.svg', title: 'Красиво верстаю на современном CSS и HTML' },
        { symbol: '/images/profits/profit-2.svg', title: 'Работаю с CMS WordPress, Ghost, Opencart и т. д.' },
        { symbol: '/images/profits/profit-3.svg', title: 'Создаю на ReactJS, включая Gatsby и Next' },
        { symbol: '/images/profits/profit-4.svg', title: 'Программирую на ванильном JavaScript и JQuery' },
        { symbol: '/images/profits/profit-5.svg', title: 'Совершенствую существующие проекты' },
        { symbol: '/images/profits/profit-6.svg', title: 'Занимаюсь поддержкой и админством' }
    ];

    const profsClasses = [styles.profs, "stripesBg"].join(" ")
    const sectionTitleClasses = [styles.sectionTitle, "sectionTitle"].join(" ")

    return (
        <section className={profsClasses}>
            <div className="wrapperScroll">
                <h2 className={sectionTitleClasses}>Смотри, что могу</h2>
                <div className={styles.profsInner}>
                    {items.map((item, index) => (
                        <div className={styles.profsItem} key={index}>
                            <div className={styles.profsSymbol}>
                            <Image
                                src={item.symbol}
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                priority
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                className={styles.heroImage}
                            />
                            </div>
                            <h3 className={styles.profsItemTitle}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profs
