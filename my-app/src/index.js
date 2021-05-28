import React from 'react';
import ReactDom from 'react-dom';
// css
import './indx.css';
function BookList() {
	return (
		<section className="book">
			<Book />
		</section>
	);
}
const Book = () => {
	return (
		<article className="books">
			<Image />
			<Title />
			<Author />
		</article>
	);
};
const Image = () => {
	return <img src="https://images-na.ssl-images-amazon.com/images/I/71XQe19mZtL._AC_UL200_SR200,200_.jpg" alt="" />;
};
const Title = () => {
	const tit = 'My First Learn to Write Workbook: Practice';
	return <h1>{tit}</h1>;
};
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>Crystal Radke</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
