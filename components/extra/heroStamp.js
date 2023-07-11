import Image from "next/image"
import styles from "@/styles/home/hero.module.css"

const HeroStamp = () => {

    return (

        <div className="heroRightBox">
            <Image
                src="/images/home/golova.png"
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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300 300"
                className={styles.heroRightBoxSvg}
            >
                <path
                    id="SunCatcherStudio"
                    fill="none"
                    stroke="none"
                    d="M32.55 148.48A-108.151-108.151 0 01140.702 40.33-108.151-108.151 0 01248.853 148.48a-108.151-108.151 0 01-108.151 108.152A-108.151-108.151 0 0132.55 148.48z"
                ></path>
                <text
                    fontFamily="sans-serif"
                    fontSize="32.5"
                    fontWeight="normal"
                    letterSpacing="2"
                >
                    <textPath startOffset="5" xlinkHref="#SunCatcherStudio">
                    Просто закажите у меня что-нибудь *
                    </textPath>
                </text>
            </svg>
        </div>
    )
}

export default HeroStamp
