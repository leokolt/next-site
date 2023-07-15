import { useState, useEffect } from "react"
import Seo from "@/components/global/seo";
import Work from "../components/work";
import {getAllWork} from "@/lib/getAllData";
import styles from "@/styles/home/featuredWork.module.css"

import FilterWork from "@/components/workFilter";

export async function getStaticProps() {
    const work = getAllWork();

    return {
        props: {
            work,
        },
    };
}

export default function WorkPage({work}) {

     const [selectedCat, setSelectedCat] = useState('')
     const [selectedYear, setSelectedYear] = useState('')

    /*loadmore*/
    const initialPostList = 9
    const incrementInitialPostList = 6

    const [showPosts, setShowPosts] = useState(initialPostList);

    const handleLoadMore = () => {
        setShowPosts(showPosts + incrementInitialPostList)
    }


    const filteredWork = work.filter(w => {
        const catFilter = selectedCat ? w.category === selectedCat : work; // true if no category selected
        const yearFilter = selectedYear ? w.year === selectedYear : work; // true if no year selected
        return catFilter && yearFilter;
    })

    return (
        <div>
            <Seo
                title="Все работы Колтан Леонида"
                description="Здесь собраны некоторые из работ разработчика Колтан Леонида"
				ogImageUrl={`http://localhost:3000/api/og?title=Все работы Колтан Леонида&description=Здесь собраны некоторые из работ разработчика Колтан Леонида`}
            />
            <section className='px-6'>
                <div className='wrapper'>
                    <h1 className='sectionTitle'>Проекты</h1>
                    <FilterWork
                        selectedCat={selectedCat}
                        onSelectCat={setSelectedCat}
                        selectedYear={selectedYear}
                        onSelectYear={setSelectedYear}
                    />
                    <div className={filteredWork.length == 0 ? styles.featuredWorkInnerNotContent : styles.featuredWorkInner}>
                        {
                            filteredWork.length == 0 ?
                                <h4>Не найдено работ. Попробуйте перефильтровать :-) </h4> :
                                filteredWork.slice(0, showPosts).map((workItem) => (
                                    <Work key={workItem.title} item={workItem} />
                                ))
                        }
                    </div>
                    {showPosts < work.length && !selectedCat && !selectedYear ? (
					<div><button className="mainBtn loadBtn" onClick={handleLoadMore}>Больше проектов</button></div>
					) : (
					<div><button className="mainBtn loadBtn" disabled>Больше нет проектов</button></div>
				    )}
                </div>
            </section>
        </div>
    )
}
