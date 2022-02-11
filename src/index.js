import ReactDom from "react-dom";
import './style.css'

function BookList() {
  return (
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL604_SR604,400_.jpg" alt="book cover" />

const Title = () => <h1>The 48 Laws of Power</h1>
const Author = () => <h1>Robert Greene</h1>

ReactDom.render(<BookList />, document.getElementById("root"));