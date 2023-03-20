import Head from 'next/head'
import RecentPosts from "../components/recentPosts";
import FeaturedWork from "../components/featuredWork";
import Search from '@/components/search';
import Hero from '@/components/home/hero'

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
		<div>
		<Head>

		</Head>
			<Hero />
			<Search />
			<RecentPosts posts={posts} />
			<FeaturedWork work={work} />
		</div>
	)
}
