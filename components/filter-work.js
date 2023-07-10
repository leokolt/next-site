//import { useState } from "react"
import works from "@/content/works/data.json"


export default function FilterWork({selectedCat, onSelect}) {

    const splitCats = works.flatMap((w) => w.category.split());
    const categories = Array.from(new Set(splitCats));


    return (
        <div>
            <ul>
                <li
                    className={!selectedCat ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
                    onClick={() => onSelect("")}
                >
                    <a>Все</a>
                </li>
                {categories.map((category, i) => {
                    const isSelected = category === selectedCat
                    return (
                        <li key={i} item={category}
                            className={isSelected ? "bg-indigo-50 p-2 rounded-md" : "p-2"}
                            onClick={() => onSelect(category)}
                        >
                            {category}
                        </li>
                    )


                    })}
            </ul>

        </div>
    )
}
