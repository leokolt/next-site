import { useEffect, useState } from 'react'
import styles from "@/styles/home/hero.module.css"


const FADE_INTERVAL_MS = 1750
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = ['разработчик', 'фронтендер', 'вордпрессер', 'классный парень', 'джаваскриптер', 'немножко прогер', 'умею петь', 'отлично готовлю', 'кодер', 'фрилансер']

export const AnimatedText = () => {

    const colors = [
        {
            color: 'var(--color-accent)',
            fontWeight: 700
        },
        {
            color: 'var(--color-accent-secondary)',
            fontWeight: 700
        },
        {
            color: 'var(--color-text-primary)',
            fontWeight: 700
        }
    ]

    const randomColors = Math.floor(Math.random() * colors.length);

  //const [fadeProp, setFadeProp] = useState( styles.fadeIn )
  const [wordOrder, setWordOrder] = useState(0)

//   useEffect(() => {
//     const fadeTimeout = setInterval(() => {
//       fadeProp === styles.fadeIn ? setFadeProp(styles.fadeOut ) : setFadeProp( styles.fadeIn )
//     }, FADE_INTERVAL_MS)

//     return () => clearInterval(fadeTimeout)
//   }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  return (
      <span style={{...colors[randomColors]}} className={styles.fadeWord}>{WORDS_TO_ANIMATE[wordOrder]}</span>
  )
}
