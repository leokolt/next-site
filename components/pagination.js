import { useState, useEffect } from "react"

export default function Pagination ({part}) {
    const numberPosts = 3

	// State for the list
	const [list, setList] = useState([...work.slice(0, numberPosts)])

	// State to trigger oad more
	const [loadMore, setLoadMore] = useState(false)

	// State of whether there is more to load
	const [hasMore, setHasMore] = useState(work.length > numberPosts)

	// Load more button click
	const handleLoadMore = () => {
		setLoadMore(true)
	}

	// Handle loading more articles
	useEffect(() => {
		if (loadMore && hasMore) {
		const currentLength = list.length
		const isMore = currentLength < work.length
		const nextResults = isMore
			? work.slice(currentLength, currentLength + numberPosts)
			: []
		setList([...list, ...nextResults])
		setLoadMore(false)
		}
	}, [loadMore, hasMore]) //eslint-disable-line

	//Check if there is more
	useEffect(() => {
		const isMore = list.length < work.length
		setHasMore(isMore)
	}, [list]) //eslint-disable-line

    return (
        <>
        {hasMore ? (
            <div><button onClick={handleLoadMore}>Еще статьи</button></div>
            ) : (
            <div><button disabled>Больше нет статей</button></div>
        )}
        </>
    )
}
