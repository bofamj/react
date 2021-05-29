import React from 'react';
import ReactDom from 'react-dom';
// css
import './indx.css';

// raribels
const books = [
	{
		image: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
		title: 'I Love You to the Moon and Back',
		author: 'Amelia Hepworth'
	},
	{
		image: 'https://images-na.ssl-images-amazon.com/images/I/91vJgGrdcDL._AC_UL200_SR200,200_.jpg',
		title: 'Berserk Deluxe Volume 1',
		author: 'Kentaro Miura'
	},
	{
		image: 'https://images-na.ssl-images-amazon.com/images/I/91Tdu1LUcZL._AC_UL200_SR200,200_.jpg',
		title: 'Fault Lines: The Social Justice Movement and…',
		author: 'Voddie T. Baucham Jr.'
	},
	{
		image: 'https://images-na.ssl-images-amazon.com/images/I/81RuAzKrHkL._AC_UL200_SR200,200_.jpg',
		title: 'The 5 Love Languages: The Secret to Love…',
		author: 'Gary Chapman'
	},
	{
		image: 'https://images-na.ssl-images-amazon.com/images/I/610O4MLOT2L._AC_UL200_SR200,200_.jpg',
		title: 'Greenlights',
		author: 'Kindle Edition'
	}
];
/*const image = 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';
const title = 'I Love You to the Moon and Back';
const author = 'Amelia Hepworth';*/
/*const names = [ 'mj', 'lili', 'mem' ];
const newName = names.map((name) => {
	//console.log(name);
	return <h1>{name}</h1>;
});
console.log(newName);*/
function BookList() {
	return (
		<section className="book">
			{books.map((boook) => {
				return <Book book={boook} />;
			})}
		</section>
	);
}
const Book = (prop) => {
	const { image, title, author } = prop.book;
	return (
		<article className="books">
			<img src={image} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};
/*const Image = (props) => {
	return <img src="https://images-na.ssl-images-amazon.com/images/I/71XQe19mZtL._AC_UL200_SR200,200_.jpg" alt="" />;
};
const Title = (props) => {
	const tit = 'My First Learn to Write Workbook: Practice';
	return <h1>{tit}</h1>;
};
const Author = (props) => <h4 style={{ color: '#617d98', fontSize: '0.75rem', margin: '0.25rem' }}>Crystal Radke</h4>;*/

ReactDom.render(<BookList />, document.getElementById('root'));
