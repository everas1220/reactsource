import { StrictMode } from 'react'


const books = [
    { id: 1, title: "React Basic", published: true, publisher: "Manning" },
    { id: 2, title: "Advanced hooks", published: false, publisher: "Oreilly" },
    { id: 3, title: "JSX in Depth", published: true, publisher: "Packt" },
];

const published = books.filter((book) => book.published)

// 참 = 0 제외의 숫자 'ans', [], {} 대부분을 참으로 인식함
// 거짓 = 0, '',null,undefined,NaN

const Book = () => {
    return (
        <div>
            {published.length > 0 && <h2>Published Books</h2>}
            {published.length ? (
                published.map((book) => (
                    <article key={book.id}>
                        <strong>{book.title}</strong>
                        <em>- {book.publisher}</em>
                    </article>
                ))
            ) : (
                <p>No published books found</p>
            )}
        </div>
    );
};

export default Book;

