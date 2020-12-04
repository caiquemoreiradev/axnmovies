import React, { useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './styles.css';

function Latest() {

    const [scrollX, setScrollx] = useState(0);

    const [latest, setLatest] = useState([
        {
            img: 'https://image.tmdb.org/t/p/original/qXsndsv3WOoxszmdlvTWeY688eK.jpg',
            title: 'Frozen 2',
            category: 'Animação',
            year: '2020'
        },
        {
            img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bzsmpaTsMCWtEOaMIfFku1uUorA.jpg',
            title: 'Enquanto Estivermos Juntos',
            category: 'Drama',
            year: '2020'
        },
        {
            img: 'https://image.tmdb.org/t/p/w220_and_h330_face/72I82eKXCadZWEYygV9GkJOQNEq.jpg',
            title: 'Mulan',
            category: 'Ação e Aventura',
            year: '2020'
        },
        {
            img: 'https://image.tmdb.org/t/p/w220_and_h330_face/67gVCA33yHpFkFyqhDJrt21MvYI.jpg',
            title: 'O Homem Invisível',
            category: 'Terror/Suspense',
            year: '2020'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1Sp02vj2faWSF72OqIM9E7HuSG9.jpg',
            title: 'Doutor Sono',
            category: 'Triller/Terror',
            year: '2019'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qZBo9ZxVMd2qwAp0qJWWvmM2twV.jpg',
            title: 'Origens Secretas',
            category: 'Drama',
            year: '2020'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lsh9aUn4FSPl29moszp12LZ4wha.jpg',
            title: 'I Met a Girl',
            category: 'Comédia/Romance',
            year: '2020'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/69SYznq2mSbgKyQF3QHYwblmqAk.jpg',
            title: 'Yes, God, Yes',
            category: 'Comédia',
            year: '2020'
        }
    ])

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
        let listW = latest.length * 240;

        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 80;
        }
        setScrollx(x);
    }

    return (
        <section className="latest">
            <h1 className="latest__heading">Últimos adicionados</h1>


            <div
                className="row__itens"
                style={{
                    marginLeft: scrollX,
                    width: latest.length * 250
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

                {latest.map(item => (
                    <div className="latest__box">
                        <div className="latest__img">
                            <img alt={item.title} src={item.img} />
                        </div>

                        <div className="latest__infos">
                            <strong>{item.title}</strong>
                            <p>{item.category} - <strong>{item.year}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Latest;