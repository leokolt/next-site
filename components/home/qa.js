import { useState } from 'react';
import styles from '@/styles/home/qa.module.css'
import Image from 'next/image';

export default function Qa () {
    const items = [
        { question: 'Как происходит оплата за твою работу?', answer: 'Оплата моих услуг производится по договоренности с заказчиком. Я могу работать с предоплатой и без, по договору, с выставлением счетов и закрывающих документов, а могу обычным переводом денег на карту. Я - самозанятый, плачу налоги согласно законам РФ и все доходы фиксирую в приложении' },
        { question: 'Ты указываешь, что работаешь и c Wordpress, и с React. У тебя правда такой разнообразный стек?', answer: 'Я работаю и с тем и с другим, но мои знания по некоторым технологиям не столь обширны, чтобы браться, например, за создание сложного проекта на React в одиночку. Напишите мне, и мы попробуем разобраться в ваших потребностях и моих возможностях' },
        { question: 'Ты берешься только за крупные проекты?', answer: 'Совсем не так. Я выполняю огромное количество мелких правок на уже существующих проектах, создаю элементарные одностраничники, а также поддерживаю готовые сайты. Иногда делать правки не менее интересно и сложно, чем разрабатывать проект "с нуля"' },
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
