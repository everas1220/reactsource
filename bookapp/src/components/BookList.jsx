import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const BookList = () => {
    const { data, loading, errer } = useFetch();

    return (
        <section className="p-0">
            {data.dtoList.map((book) => (
                <article className="flex items-center border-2 border-stone-200 rounded-[5px] p-4 mb-2.5 bg-white">
                    <div className="first:text-5xl pr-4"></div>
                    <div className="grow-1">
                        <h3>{book.title}</h3>
                        <p>{book.author} / {book.genre}</p>
                        <p>{book.rating} </p>
                    </div>
                    <div className="flex flex-col text-[0.9em]">
                        <button className="w-[100px] m-1 py-2.5 bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700">
                            Available
                        </button>
                        <Link className="w-[100px] m-1 px-1.5 bg-stone-100 rounded-[3px] text-center">Details</Link>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default BookList;