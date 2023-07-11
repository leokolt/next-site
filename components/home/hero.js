//import Link from "next/link";
//import Image from "next/image"
import styles from "@/styles/home/hero.module.css"
import { AnimatedText } from "../extra/heroTextChanger"
import HeroStamp from "../extra/heroStamp"

const Hero = () => {

    const heroClasses = [styles.hero, "dotsBg"].join(" ")

    return (
        <>
            <section className={heroClasses}>
                <div className="wrapper">
                    <div className={styles.heroInner}>
                        <div className="heroInnerLeft">
                            <h1 className={styles.heroTitle}>
                                Привет! Меня зовут Леонид, и я - <br></br> <AnimatedText />
                            </h1>
                        </div>
                        <div className={styles.heroInnerRight}>
                            <div className="heroRightBox">
                                <HeroStamp />
                            </div>

                        </div>


                    </div>

                </div>

            </section>
            <section className={styles.techsScroll}>
                <div className={styles.techsScrollText}>
                    * HTML * JS * Jquery * CSS * WordPress * Tilda * SCSS * ReactJS * Gatsby * NextJS * php&nbsp;
                </div>
                <div className={styles.techsScrollText2}>
                    * HTML * JS * Jquery * CSS * WordPress * Tilda * SCSS * ReactJS * Gatsby * NextJS * php&nbsp;
                </div>
            </section>
        </>
    )

}

export default Hero
