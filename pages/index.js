
import Seo from "@/components/global/seo";
import RecentPosts from "../components/recentPosts";
import FeaturedWork from "../components/home/featuredWork";
import Search from '@/components/search';
import Hero from '@/components/home/hero'
import Profs from '@/components/home/profs';
import Contacts from "@/components/global/contacts";
import Benefits from "@/components/home/benefits";
import Reviews from "@/components/home/reviews";
import Prices from "@/components/home/prices";


import {getAllPosts, getAllWork} from "@/lib/getAllData";

export async function getStaticProps() {
	const posts = getAllPosts();
	const work = getAllWork();

	return {
		props: {
			posts,
			work,
		},
	};
}

export default function Home({posts, work}) {


	return (
		<>
            <Seo
                title={`Веб-разработчик Леонид Колтан`}
                description={`Создаю сайты. Быстро, недорого. Красиво и выгодно`}
                ogType={"website"}
				ogImageUrl={`http://localhost:3000/api/og?title=Веб-разработчик Леонид Колтан&description=Создаю сайты. Быстро, недорого. Красиво и выгодно`}
            />
			<Hero />
			<Profs />
			<FeaturedWork work={work} />
			<Contacts description="Если тебя заинтересовали мои проекты, ты хочешь пострудничать или ебанутсу, используй мои контакты или форму для связи" />
			<Benefits/>
			<Reviews />
			<Prices />
			<Search />
			<RecentPosts posts={posts} />



		</>
	)
}
