import Nav from '@/components/nav'

export default function Footer() {
	return (
		<footer>
			<div className="wrapper">
				<p style={{textAlign:"center", marginBottom: '15px'}}>&copy; {`${new Date().getFullYear() }`}. Сайт разработчика Колтан Леонида. Все права защищены</p>
			</div>
		</footer>
	);
}
