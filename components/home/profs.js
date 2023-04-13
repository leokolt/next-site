//import Link from "next/link";
//import Image from "next/image"
import styles from "@/styles/home/profs.module.css"

const Profs = () => {

    const profsClasses = [styles.profs, "stripesBg"].join(" ")

    return (
        <section className={profsClasses}>
            <div className="wrapper">
                <h2 className="sectionTitle">Смотри, что могу</h2>
                <div className={styles.profsInner}>
                    <div className={styles.profsItem}>
                        <div className={styles.profsSymbol}>* html *</div>
                        <h3 className={styles.profsItemTitle}>Красиво верстаю на современном CSS и HTML</h3>
                    </div>
                    <div className={styles.profsItem}>
                        <div className={styles.profsSymbol}>* cms *</div>
                        <h3 className={styles.profsItemTitle}>Работаю с CMS WordPress, Ghost, Opencart и т. д.</h3>
                    </div>
                    <div className={styles.profsItem}>
                        <div className={styles.profsSymbol}>* react *</div>
                        <h3 className={styles.profsItemTitle}>Создаю на ReactJS, включая Gatsby и Next</h3>
                    </div>
                    <div className={styles.profsItem}>
                        <div className={styles.profsSymbol}>* js *</div>
                        <h3 className={styles.profsItemTitle}>Программирую на ванильном JavaScript и JQuery</h3>
                    </div>
                    <div className={styles.profsItem}>
                        <div className={styles.profsSymbol}>* upgrade *</div>
                        <h3 className={styles.profsItemTitle}>Совершенствую существующие проекты</h3>
                    </div>
                    <div className={styles.profsItem}>
                        <div className={styles.profsSymbol}>* support *</div>
                        <h3 className={styles.profsItemTitle}>Занимаюсь поддержкой и админством</h3>
                    </div>
                </div>


            </div>
        </section>


    )
}

export default Profs
