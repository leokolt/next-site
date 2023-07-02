import styles from "@/styles/home/profs.module.css"

const Profs = () => {

    const items = [
        { symbol: '* html *', title: 'Красиво верстаю на современном CSS и HTML' },
        { symbol: '* cms *', title: 'Работаю с CMS WordPress, Ghost, Opencart и т. д.' },
        { symbol: '* react *', title: 'Создаю на ReactJS, включая Gatsby и Next' },
        { symbol: '* js *', title: 'Программирую на ванильном JavaScript и JQuery' },
        { symbol: '* upgrade *', title: 'Совершенствую существующие проекты' },
        { symbol: '* support *', title: 'Занимаюсь поддержкой и админством' }
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
                            <div className={styles.profsSymbol}>{item.symbol}</div>
                            <h3 className={styles.profsItemTitle}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profs
