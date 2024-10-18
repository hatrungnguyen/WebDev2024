import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/layout.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';
import Trailer from './components/trailer/Trailer.js';
import Reviews from './components/reviews/Reviews.js';
import NotFound from './components/notFound/NotFound.js';

function App() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Inception",
            image: "/movies/inception.jpg",
            trailerUrl: "5EiV_HXIIGs",
            description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
            background_img: "https://images3.alphacoders.com/610/610318.jpg",
            reviews: []
        },
        {
            id: 2,
            title: "Interstellar",
            image: "/movies/interstellar.png",
            trailerUrl: "zSWdZVtXT7E",
            description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.\n" +
                "In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth's crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base 6 hours from Cooper's home, he is asked to go on a daring mission with a few other scientists into a wormhole because of Cooper's scientific intellect and ability to pilot aircraft unlike the other crew members. In order to find a new home while Earth decays, Cooper must decide to either stay, or risk never seeing his children again in order to save the human race by finding another habitable planet.",
            background_img:"https://lisathatcher.com.au/wp-content/uploads/2014/11/movie-interstellar-battle-hd-wallpapers-free-download-movie-images.jpg",
            reviews: []
        },
        {
            id: 3,
            title: "Arcane",
            image: "/movies/arcane.jpg",
            trailerUrl: "Sl-xmZTH6GE",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 4,
            title: "50 First Dates",
            image: "/movies/50firstdates.jpg",
            trailerUrl: "17KJk3ErIx0",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 5,
            title: "Grown Ups",
            image: "/movies/grownups.jpg",
            trailerUrl: "e01NVCveGkg",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 6,
            title: "Grown Ups 2",
            image: "/movies/grownups2.jpg",
            trailerUrl: "Sq5CIH0duMk",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 7,
            title: "Avengers: Endgame",
            image: "/movies/endgame.jpg",
            trailerUrl: "TcMBFSGVi1c",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 8,
            title: "Avengers: Infinity War",
            image: "/movies/infinitywar.jpg",
            trailerUrl: "6ZfuNTqbHE8",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 9,
            title: "Thor: Love And Thunder",
            image: "/movies/thorl&t.jpg",
            trailerUrl: "Go8nTmfrQd8",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 10,
            title: "Spider-man: Beyond The Spider Verse",
            image: "/movies/spiderman_bysv.jpg",
            trailerUrl: "tnQ7S1BxkYo",
            description:"",
            background_img:"",
            reviews: []
        },{
            id: 11,
            title: "Spider-man: Far From Home",
            image: "/movies/spiderman_ffh.jpg",
            trailerUrl: "Nt9L1jCKGnE",
            description:"",
            background_img:"",
            reviews: []
        },{
            id: 12,
            title: "Spider-man: No Way Home",
            image: "/movies/spiderman_nwh.png",
            trailerUrl: "JfVOs4VSpmA",
            description:"",
            background_img:"",
            reviews: []
        },{
            id: 13,
            title: "Spider-man: Across The Spider-Verse",
            image: "/movies/spiderman_atsv.jpg",
            trailerUrl: "cqGjhVJWtEg",
            description:"",
            background_img:"",
            reviews: []
        },{
            id: 14,
            title: "Ironman 3",
            image: "/movies/ironman3.jpg",
            trailerUrl: "Ke1Y3P9D0Bc",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 15,
            title: "Fifty Shades Of Grey",
            image: "/movies/50ShadesOfName.jpg",
            trailerUrl: "SfZWFDs0LxA",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 16,
            title: "Titanic",
            image: "/movies/titanic.jpg",
            trailerUrl: "F2RnxZnubCM",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 17,
            title: "Harry Potter and the Sorcerer's Stone",
            image: "/movies/harrypotter1.jpg",
            trailerUrl: "Yki6KgoBstM",
            description:"",
            background_img:"",
            reviews: []
        },
        {
            id: 18,
            title: "Harry Potter and the Chamber of Secrets",
            image: "/movies/harrypotter2.jpg",
            trailerUrl: "nE11U5iBnH0",
            reviews: []
        },
        {
            id: 19,
            title: "Harry Potter and the Prisoner of Azkaban",
            image: "/movies/harrypotter3.jpg",
            trailerUrl: "lAxgztbYDbs",
            reviews: []
        },
        {
            id: 20,
            title: "Harry Potter and the Goblet of Fire",
            image: "/movies/harrypotter4.jpg",
            trailerUrl: "3EGojp4Hh6I",
            reviews: []
        },        {
            id: 21,
            title: "Harry Potter and the Order of the Phoenix",
            image: "/movies/harrypotter5.jpg",
            trailerUrl: "LLAaW1EgyY8",
            reviews: []
        },        {
            id: 22,
            title: "Harry Potter and the Half-Blood Prince",
            image: "/movies/harrypotter6.jpg",
            trailerUrl: "tAiy66Xrsz4",
            reviews: []
        },        {
            id: 23,
            title: "Harry Potter and the Deathly Hallows: Part 1",
            image: "/movies/harrypotter7.jpg",
            trailerUrl: "nSu1LOpjvdZ4",
            reviews: []
        },        {
            id: 24,
            title: "Harry Potter and the Deathly Hallows: Part 2",
            image: "/movies/harrypotter8.jpg",
            trailerUrl: "mObK5XD8udk",
            reviews: []
        },        {
            id: 25,
            title: "The Hobbit: An Unexpected Journey",
            image: "/movies/hobbit1.jpg",
            trailerUrl: "9PSXjr1gbjc",
            reviews: []
        },{
            id: 26,
            title: "The Hobbit: The Battle of the Dragon",
            image: "/movies/hobbit2.jpg",
            trailerUrl: "iVAgTiBrrDA",
            reviews: []
        },{
            id: 27,
            title: "The Hobbit: The Battle of the Five Armies",
            image: "/movies/hobbit3.jpg",
            trailerUrl: "ZSzeFFsKEt4",
            reviews: []
        },
        {
            id: 28,
            title: "Batman Begins",
            image: "/movies/bat1.jpg",
            trailerUrl: "neY2xVmOfUM",
            reviews: []
        },{
            id: 29,
            title: "The Dark Knight",
            image: "/movies/bat2.jpg",
            trailerUrl: "EXeTwQWrcwY",
            reviews: []
        },{
            id: 30,
            title: "The Dark Knight Rises",
            image: "/movies/bat3.jpg",
            trailerUrl: "GokKUqLcvD8",
            reviews: []
        },
    ]);
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    const getMovieData = (movieId) => {
        const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));
        if (selectedMovie) {
            setMovie(selectedMovie);
            setReviews(selectedMovie.reviews);
        }
    };
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies={movies} />} />
                    <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
                    <Route
                        path="/Reviews/:movieId"
                        element={
                            <Reviews
                                getMovieData={getMovieData}
                                movie={movie}
                                reviews={reviews}
                                setReviews={setReviews}
                                backgroundImage = {movie?.background_img}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;