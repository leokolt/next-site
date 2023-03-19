import Head from 'next/head'
import Work from "../components/work";
import {getAllWork} from "@/lib/getAllData";

export async function getStaticProps() {
    const work = getAllWork();

    return {
        props: {
            work,
        },
    };
}

export default function WorkPage({work}) {
    return (
        <div>
            <Head>

            </Head>
            <section className='px-6'>
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-3xl font-bold mb-6 p-4'>Work</h1>
                    {work.map((workItem) => (
                        <Work key={workItem.title} item={workItem} />
                    ))}
                </div>
            </section>
        </div>
    )
}
