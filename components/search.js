import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/search.module.css'

export default function Search() {

	const searchRef = useRef(null)
	const [query, setQuery] = useState('')
	const [active, setActive] = useState(false)
	const [results, setResults] = useState([])

	const searchEndpoint = (query) => `/api/search?q=${query}`

	const onChange = useCallback((event) => {
		const query = event.target.value;
		setQuery(query)
		if (query.length) {
		fetch(searchEndpoint(query))
			.then(res => res.json())
			.then(res => {
			setResults(res.results)
			})
		} else {
			setResults([])
		}
	}, [])

	const onFocus = useCallback(() => {
		setActive(true)
		window.addEventListener('click', onClick)
	}, [])

	const onClick = useCallback((event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false)
			window.removeEventListener('click', onClick)
		}
	}, [])

	const searchClasses = [styles.search, "stripesBg"].join(" ")

	return (
		<div className={searchClasses}>
			<div className="wrapper">
				<div ref={searchRef} className={styles.searchInner}>
					<input
						onChange={onChange}
						onFocus={onFocus}
						placeholder='Поиск статей'
						type='text'
						value={query}
						className={styles.searchInput}
					/>
					{ active && results.length > 0 && (
						<ul className={styles.searchResults}>
							{results.map(({ slug, title }) => (
								<li key={slug} className={styles.searchResultsItem}>
									<Link href="/blog/[slug]" as={`/blog/${slug}`} scroll={false} className={styles.searchResultsItemLink}>
										{title}
									</Link>
								</li>
							))}
						</ul>
					) }
				</div>
			</div>
		</div>
	)
}
