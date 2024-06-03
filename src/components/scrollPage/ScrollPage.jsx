import React, { useEffect, useState } from 'react';
import "./ScrollPage.css";

const ScrollPage = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount] = useState(1000)

    useEffect(() => {
        const gettingPhoto = async() => {
            try {
                const photoApiResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`);
                const data = await photoApiResponse.json();
                setPhotos(prevPhotos => [...prevPhotos, ...data]);
                setCurrentPage(prevState => prevState + 1);
            }catch (error) {
                console.log(error);
            }finally {
                setFetching(false);
            }            
        }
        if (fetching) {
            gettingPhoto(); 
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function() {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    && photos.length < totalCount) {
            setFetching(true);
        } 
    }

    return (
        <div>
            {photos.map(photo => (
                <div className='photo' key={photo.id}>
                    <div className='title'>{photo.title}</div>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
            ))}
        </div>
    );
};

export default ScrollPage;