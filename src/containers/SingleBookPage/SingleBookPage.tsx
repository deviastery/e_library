import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import data from '../../data/data.json';
import { IBook } from "../../types/data";

const SingleBookPage: React.FC = () => {

    const [book, setBook] = useState<IBook | undefined>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const findBookById = () => {
            const foundBook = data.find((item) => item.id === Number(id));
            if (foundBook) {
                setBook(foundBook);
            }
        };

        findBookById();
    }, [id]);

    return (
        <>
            {book && (
                <iframe title="PDF Viewer" src={book.pdfPath} style={{ width: '100%', height: '800px' }} />
            )}
        </>
    );
};

export default SingleBookPage;
