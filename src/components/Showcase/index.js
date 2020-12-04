import React, { useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './styles.css';

function Showcase() {

    const [scrollX, setScrollx] = useState(0);

    const [showcase, setShowCase] = useState([
        'https://image.tmdb.org/t/p/original/dJD4i4xYkUP5ELuGGzc4B6Fermn.jpg',
        'https://image.tmdb.org/t/p/w533_and_h300_bestv2/j4YLTxsNQFlM4iEi2SMAn60d5Wj.jpg',
        'https://image.tmdb.org/t/p/original/8SQCVclNQZAiezeuvZFmLlGrmx1.jpg',
        'https://image.tmdb.org/t/p/original/6EO7jqC9LNnVa9UoLjgZ9HyuGtW.jpg',
        'https://image.tmdb.org/t/p/original/ukIhDosxChjO2KtG0PgA0eL5EbT.jpg',
        'https://image.tmdb.org/t/p/original/p78F12JkDtnUAacDRCZlLFc2QgA.jpg'
    ]);

    let arrowLeft = false;

    if (scrollX < 0) {
        arrowLeft = true;
    }

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = showcase.length * 470;

        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 80;
        }
        setScrollx(x);
    }

    return (
        <div className='row'>
            <h1 className='showcase-heading'>Em alta</h1>

            <div
                className="row__posters"
                style={{
                    marginLeft: scrollX,
                    width: showcase.length * 800
                }}
            >

                <div className={arrowLeft ? 'my-list--left' : 'no-arrow-left'} onClick={handleLeftArrow}>
                    <div className="arrow">
                        <FiChevronLeft color='#fff' size={50} />
                    </div>
                </div>

                <div className="my-list--right" onClick={handleRightArrow}>
                    <div className="arrow">
                        <FiChevronRight color='#fff' size={50} />
                    </div>
                </div>


                {showcase.map(item => (
                    <div className="showcase-box">
                        <img src={item} alt="item" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Showcase;