//import { useState } from "react"
import works from "@/content/works/data.json"
import styles from "@/styles/home/featuredWork.module.css"


export default function FilterWork({selectedCat, onSelectCat, selectedYear, onSelectYear}) {

    const splitCats = works.flatMap((w) => w.category.split());
    const categories = Array.from(new Set(splitCats));

    const splitYear = works.flatMap((w) => Number(w.year));
    const years = Array.from(new Set(splitYear));

    const filterListItemClasses = [styles.filterListItem, styles.filterListItemActive].join(" ")

    return (
        <div className="filter">
            <ul className={styles.filterList}>
                <li
                    className={!selectedCat ? filterListItemClasses : styles.filterListItem}
                    onClick={() => onSelectCat("")}
                >
                    <a className="mainBtn">Все категории</a>
                </li>
                {categories.map((category, i) => {
                    const isSelectedCat= category === selectedCat
                    return (
                        <li key={i} item={category}
                            className={isSelectedCat ? filterListItemClasses : styles.filterListItem}
                            onClick={() => onSelectCat(category)}
                        >
                            <a className="mainBtn">{category}</a>
                        </li>
                    )
                })}
            </ul>

            <ul className={styles.filterList}>
                <li
                    className={!selectedYear ? filterListItemClasses : styles.filterListItem}
                    onClick={() => onSelectYear("")}
                >
                    <a className="mainBtn">Все года</a>
                </li>
                {years.map((year, i) => {
                    const isSelectedYear = year == selectedYear
                    return (
                        <li key={i} item={year}
                            className={isSelectedYear ? filterListItemClasses : styles.filterListItem}
                            onClick={() => onSelectYear(year)}
                        >
                            <a className="mainBtn">{year}</a>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
