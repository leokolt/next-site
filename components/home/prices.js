import React, { useState } from "react";
import styles from '@/styles/home/prices.module.css'
import Popup from "@/components/global/popup";
import ContactForm from "../global/contactForm";

export default function Prices () {

    const items = [
        { title: 'По-мелочи', price: 'от 500₽', list1: 'Мелкие правки', list2: 'Изменить цвет/расположение элемента', list3: 'Добавить мелкий элемент', list4: 'Удалить лишнее', list5: 'Показать что и как делается', button: 'Заказать' },
        { title: 'По-среднему', price: 'от 5 000₽', list1: 'Мелкие правки', list2: 'Изменить цвет/расположение элемента', list3: 'Добавить мелкий элемент', list4: 'Удалить лишнее', list5: 'Показать что и как делается', button: 'Заказать' },
        { title: 'По-крупному', price: 'от 10 000₽', list1: 'Мелкие правки', list2: 'Изменить цвет/расположение элемента', list3: 'Добавить мелкий элемент', list4: 'Удалить лишнее', list5: 'Показать что и как делается', button: 'Заказать' },
    ];

    const pricesBtnClasses = [styles.pricesItemBtn, "mainBtn"].join(" ")
    const [showModal, setShowModal] = useState(false);

    return (
        <section className={styles.prices}>
            <div className="wrapper">
                <h2 className="sectionTitle">Сколько это стоит?</h2>
                <div className={styles.pricesInner}>
                    {items.map((n, i) => (
                        <div className={styles.pricesItem} key={i}>
                            <h3 className={styles.pricesItemTitle}>{n.title}</h3>
                            <p className={styles.pricesItemAmount}>{n.price}</p>
                            <ul className={styles.pricesItemList}>
                                <li>{n.list1}</li>
                                <li>{n.list2}</li>
                                <li>{n.list3}</li>
                                <li>{n.list4}</li>
                                <li>{n.list5}</li>
                            </ul>
                            <button className={pricesBtnClasses} onClick={() => setShowModal(true)}>{n.button}</button>
                        </div>
                    ))}
                </div>
            </div>
            {showModal &&
            <Popup
                onClose={() => setShowModal(false)}
                show={showModal}
                title="Напишите мне, я отвечу"
            >
                <ContactForm/>
            </Popup>}
        </section>
    )
}
