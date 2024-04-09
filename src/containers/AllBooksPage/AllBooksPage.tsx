import React, { useState } from 'react';
import { Link } from "react-router-dom";

import data from '../../data/data.json';

import { IBook } from "../../types/data";

import styles from './AllBooksPage.module.css';

const AllPostsPage: React.FC = () => {

    const [books, setBooks] = useState<IBook[]>(data);

    return (


        
        <div className={styles.wrapper}> 
            <div className={styles.container__books}>
                <ul className={styles.ul__books}>
                    {books.map((book: IBook) => (                        
                        <li key={book.id} className={styles.container__book}>
                            <Link to={`/${book.id}`} className={styles.book}>

                                <div>
                                    <img src={book.imgPath} alt={book.title} className={styles.book__img}/>
                                </div>

                                <div>
                                    <h3 className={styles.book__title}>{book.title}</h3>
                                    <p className={styles.book__body}>{book.description}</p>
                                </div>

                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AllPostsPage;
