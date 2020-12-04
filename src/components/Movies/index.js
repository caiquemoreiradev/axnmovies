import React, { useState } from 'react';

import './styles.css';

function Movies() {

    const [movies, setMovies] = useState([
        {
            img: 'https://image.tmdb.org/t/p/original/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
            title: 'Coringa',
            time: '2h 2m',
            genre: 'Crime/Drama/Triller',
            avaliation: '82'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg',
            title: 'Homem-Aranha: Longe de Casa',
            time: '2h 10m',
            genre: 'Ação/Aventura/Ficção científica',
            avaliation: '75'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iVSfBSuAaCc0NREKIrEX4OC8MJ2.jpg',
            title: 'Shazam',
            time: '2h 12m',
            genre: 'Ação/Comédia/Fantasia',
            avaliation: '70'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mxopI5VyShCeAlJf3X4Q1T40Bub.jpg',
            title: 'MIB: Homens de Preto - Internacional',
            time: '1h 55m',
            genre: 'Comédia/Ficção científica',
            avaliation: '60'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/i7eGbUjw721W02ofWEJt4zpiJDp.jpg',
            title: 'Alita: Anjo de Combate',
            time: '2h 2m',
            genre: 'Ação/Ficção científica/Aventura',
            avaliation: '71'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u2IZcVw0tclP7UOusTVtI5J6rmx.jpg',
            title: 'Bumblebee',
            time: '1h 54m',
            genre: 'Ação/Aventura/Ficção científica',
            avaliation: '66'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2umU3r6V4V2gTmSnZJmH61nTorF.jpg',
            title: 'Godzilla II: Rei dos Monstros',
            time: '2h 12m',
            genre: 'Ficção científica, Ação',
            avaliation: '65'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lmh8wXm6f3z7wcRqQ8NSXrB8tMQ.jpg',
            title: 'Hellboy',
            time: '2h',
            genre: 'Ação/Ficção científica/Aventura',
            avaliation: '55'
        },
        {
            img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ybQSBSrINtjWsJQ6Ih8sva8HlEZ.jpg',
            title: 'Homem-Aranha no Aranhaverso',
            time: '1h 57m',
            genre: 'Ação/Aventura/Animação/Ficção científica/Comédia',
            avaliation: '84'
        },
        {
            img: 'https://image.tmdb.org/t/p/w220_and_h330_face/6et98yxnctR6uH16x3uJuIVKsPf.jpg',
            title: 'Os Incríveis 2',
            time: '1h 58m',
            genre: 'Ação/Aventura/Animação/Família',
            avaliation: '75'
        }
    ])
    return (
        <div className="movies__container">
            <div className="movies__heading">
                <h1 className="movies__heading">Filmes</h1>
            </div>

            <section className="row__movies">
                {movies.map(movie => (
                    <>
                        <div className="movie__box">

                            <div className="movie__image">
                                <img src={movie.img} alt={movie.title} />
                            </div>

                            <div className="movie__infos">
                                <strong>{movie.title}</strong>
                                <p><strong>Gênero:</strong> {movie.genre}</p>
                                <p><strong>Duração:</strong> {movie.time}</p>
                            </div>
                        </div>

                    </>
                ))}
            </section>
        </div>
    );
}

export default Movies;