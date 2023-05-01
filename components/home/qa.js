import { useState } from 'react';
import styles from '@/styles/home/qa.module.css'
import Image from 'next/image';

export default function Qa () {
    const items = [
        { question: 'Работаю без посредников', answer: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { question: 'Работаю сам', answer: 'В редких случаях, когда очень сложное программирование или нужен дизайн-макет, могут привлекаться сторонние люди. Во всех остальных случаях я работаю сам, а значит заказчику не придется платить другому человеку и процент за мое посредничество' },
        { question: 'Имею большой опыт', answer: 'Paris is the capital of France.' },
        { question: 'Шарю в дизайне', answer: 'Tokyo is the capital of Japan.' },
        { question: 'Работаю быстро', answer: 'Tokyo is the capital of Japan.' },
        { question: 'Могу работать без предоплаты', answer: 'Tokyo is the capital of Japan.' },
        { question: 'Счета и чеки', answer: 'Tokyo is the capital of Japan.' },
    ];

    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    function changeClass() {
        let cl =
            count === 1 ? styles.nthClass1 :
            count === 2 ? styles.nthClass2 :
            count === 3 ? styles.nthClass3 :
            count === 4 ? styles.nthClass4 :
            count === 5 ? styles.nthClass5 :
            count === 6 ? styles.nthClass6 :
            count === 7 ? styles.nthClass7 : styles.nthClass0

        return cl
    }

    const btnClasses = [styles.qaBtn, "mainBtn"].join(" ")

    return (
        <section className={styles.qa}>
            <div className="wrapper">
                <h2 className="sectionTitle">Вопросы и ответы</h2>
                <div className={`${styles.qaInner} ${changeClass()}`}>
                    {items.map((item, i) => (
                        <div className={styles.qaItem} key={item.question}>
                            <div className={styles.qaLeft}>
                                <Image
                                    src="/images/qa/user.svg"
                                    width={30}
                                    height={30}
                                    alt="logo"
                                    className={styles.qaImg}
                                />
                                <p className={styles.qaLeftContent}>{item.question}</p>
                            </div>
                            <div className={styles.qaRight}>
                                <p className={styles.qaRightContent}>{item.answer}</p>
                                <Image
                                    src="/images/favicon.svg"
                                    width={30}
                                    height={30}
                                    alt="logo"
                                    className={styles.qaImg}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button className={btnClasses} onClick={handleClick} disabled={`${count === items.length - 1 ? "disabled" : ''}`}>
                    {`${count === items.length - 1 ? 'Нет вопросов' : 'Еще вопрос'}`}
                </button>
        </div>
        </section>
      );

}
