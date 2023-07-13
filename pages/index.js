
import Seo from "@/components/global/seo";
import RecentPosts from "../components/home/posts";
import FeaturedWork from "../components/home/featuredWork";
import Hero from '@/components/home/hero'
import Profs from '@/components/home/profs';
import Contacts from "@/components/global/contacts";
import Benefits from "@/components/home/benefits";
import Reviews from "@/components/home/reviews";
import Prices from "@/components/home/prices";
import Qa from "@/components/home/qa";


import {getAllPosts, getAllWork} from "@/lib/getAllData";

export async function getStaticProps() {
	const posts = getAllPosts();
	const works = getAllWork();

	return {
		props: {
			posts,
			works,
		},
	};
}

export default function Home({posts, works}) {


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
			<FeaturedWork work={works} />
			<Contacts description="Если тебя заинтересовали мои проекты, ты хочешь пострудничать или ебанутсу, используй мои контакты или форму для связи" bgs="2"/>
			<Benefits/>
			<Reviews />
			<Prices />
			<RecentPosts posts={posts} />
			<Qa/>
			<Contacts description="Если ты все еще ничего не понял, то напиши мне любым удобным способом и я помогу тебе, малыш" />
		</>
	)
}
