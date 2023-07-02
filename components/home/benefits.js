import { useState } from 'react';
import styles from '@/styles/home/benefits.module.css'



export default function Benefits () {
    const items = [
        { title: 'Работаю без посредников', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { title: 'Работаю сам', content: 'В редких случаях, когда очень сложное программирование или нужен дизайн-макет, могут привлекаться сторонние люди. Во всех остальных случаях я работаю сам, а значит заказчику не придется платить другому человеку и процент за мое посредничество' },
        { title: 'Имею большой опыт', content: 'Paris is the capital of France.' },
        { title: 'Шарю в дизайне', content: 'Tokyo is the capital of Japan.' },
        { title: 'Работаю быстро', content: 'Tokyo is the capital of Japan.' },
        { title: 'Могу работать без предоплаты', content: 'Tokyo is the capital of Japan.' },
        { title: 'Счета и чеки', content: 'Tokyo is the capital of Japan.' },
    ];

    const [ active, setActive ] = useState(0);

    const openTab = e => setActive(+e.target.dataset.index);

    const tabItemClasses = [styles.tabItem, "mainBtn"].join(" ")
    const benefitsClasses = [styles.benefits, "dotsBg"].join(" ")

    return (
        <section className={benefitsClasses}>
            <div className="wrapper">
                <div className={styles.benefitsInner}>
                    <div className={styles.benefitsTab}>
                        <h2 className="sectionTitle" style={{width: '100%'}}>Почему именно я?</h2>
                        <div className={styles.benefitsItems}>
                            {items.map((n, i) => (
                                <h3
                                    className={`${tabItemClasses} ${i === active ? styles.tabItemActive : ''}`}
                                    onClick={openTab}
                                    data-index={i}
                                    key={i}
                                >{n.title}</h3>
                            ))}
                        </div>
                    </div>

                    <div className={styles.benefitsTabContent}>
                        {items.map((n, i) => (
                            <div className={`${styles.tabContentItem} ${i === active ? styles.tabContentItemActive : ''}`} data-index={i} key={i}>
                                <p>{n.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
