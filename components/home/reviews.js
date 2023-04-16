import { useState, useRef } from 'react';
import styles from '@/styles/home/reviews.module.css'


export default function Reviews () {

    const items = [
        { title: 'АкадемПеревод1', name: 'Павел Багратионов', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { title: 'АкадемПеревод2', name: 'Павел Багратионов', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { title: 'АкадемПеревод3', name: 'Павел Багратионов', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { title: 'АкадемПеревод4', name: 'Павел Багратионов', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { title: 'АкадемПеревод5', name: 'Павел Багратионов', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
    ];

    const sectionTitleClasses = [styles.sectionTitle, "sectionTitle"].join(" ")
    const reviewsBtnClasses = [styles.reviewsBtn, "mainBtn"].join(" ")


    const carouselRef = useRef(null)
    const carouselItemRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const scrollToRight = (e) => {
        e.preventDefault()
        carouselRef.current.scrollBy({
          left: carouselItemRef.current.clientWidth,
          top: 0,
          behavior: 'smooth',
        })
        setCurrentIndex(prevState => prevState + 1)
    }

    const scrollToLeft = (e) => {
        e.preventDefault()
        carouselRef.current.scrollBy({
            left: -carouselItemRef.current.clientWidth,
            top: 0,
            behavior: 'smooth',
        })
        setCurrentIndex(prevState => prevState - 1)
    }


    return (
        <section className={styles.reviews}>
            <div className="wrapperScroll">
                <div className={styles.reviewsTop}>
                    <h2 className={sectionTitleClasses}>Отзывы</h2>
                    <div className={styles.reviewsBtns}>
                        <button onClick={scrollToLeft} className={`${reviewsBtnClasses} ${currentIndex > 0 ? styles.reviewsBtnShow : ''}`}>&lt;</button>
                        <button onClick={scrollToRight} className={`${reviewsBtnClasses} ${currentIndex < 4 ? styles.reviewsBtnShow : ''}`}>&gt;</button>
                    </div>
                </div>

                <div className={styles.reviewsInner} ref={carouselRef}>

                    {items.map((n, i) => (
                        <div className={styles.reviewsItem} key={i} ref={carouselItemRef} data-index={`data-${i}`}>

                            <p className={styles.reviewsItemContent}>{n.content}</p>
                            <div className={styles.reviewsItemBottom}>
                                <p className={styles.reviewsItemBottomName}>{n.name}</p>
                                <p className={styles.reviewsItemBottomTitle}>{n.title}</p>
                            </div>

                        </div>
                    ))}

                </div>


            </div>
        </section>
    );
}
