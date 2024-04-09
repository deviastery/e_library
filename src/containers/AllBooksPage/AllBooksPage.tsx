import React, { useState, useCallback, useEffect } from 'react';
import { Link } from "react-router-dom";
import { debounce } from 'lodash';
import cn from 'classnames';

import data from '../../data/data.json';
import icon from './img/cansel.svg';

import { IBook } from "../../types/data";

import styles from './AllBooksPage.module.css';

const AllPostsPage: React.FC = () => {

    const [books, setBooks] = useState<IBook[]>(data);

    const [inputSearchValue, setInputSearchValue] = useState<string>('');

    const getResponse = (searchValue: string): void => {
        // Производим поиск по введенному названию книги
        const filteredBooks = data.filter((book: IBook) =>
            book.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    
        // Устанавливаем найденные книги в состояние books
        setBooks(filteredBooks);
    };

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce((value: string) => getResponse(value), 300),
        []
    );  

    const handleInputChange = (value: string) => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }
    
    useEffect(() => {
        debouncedGetResponse(inputSearchValue);  // Вызываем debouncedGetResponse при каждом изменении inputSearchValue
    }, [inputSearchValue]);

    return (

        <>
            <div className={styles.wrapper__input}>
                <div className={styles.container__input}>
                    <input 
                        type="text" 
                        value={inputSearchValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Введите название книги"
                        className={styles.input}
                    />
                    <img 
                        onClick={() => inputSearchValue && handleInputChange('')}
                        src={icon} 
                        className={cn(styles.clear, !inputSearchValue && styles.clear__disabled)}
                        alt="Clear" 
                    />
                </div>
            </div>
        

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
        </>
    );
}

export default AllPostsPage;
