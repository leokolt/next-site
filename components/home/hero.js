//import Link from "next/link";
import Image from "next/image"
import styles from "@/styles/home/hero.module.css"


const Hero = () => {
    const heroClasses = [styles.hero, "dotsBg"].join(" ")


    return (
        <section className={heroClasses}>
            <div className="wrapper">
                <div className={styles.heroInner}>
                    <div className="heroInnerLeft">
                        <h1 className="heroTitle">
                            Привет! Меня зовут Леонид, и я - разработчик!
                        </h1>
                    </div>
                    <div className="heroInnerRight">
                        <Image
                            src="/images/morda.svg"
                            alt="Picture of the author"
                            width={350}
                            height={350}
                        />
                    </div>

                </div>

            </div>

        </section>
    )

}

export default Hero
