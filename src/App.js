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
            background_img: "/background/Inception.png",
            reviews: []
        },
        {
            id: 2,
            title: "Interstellar",
            image: "/movies/interstellar.png",
            trailerUrl: "zSWdZVtXT7E",
            description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.\n" +
                "In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth's crops, the people of Earth realize their life here is coming to an end as food begins to run out. Eventually stumbling upon a N.A.S.A. base 6 hours from Cooper's home, he is asked to go on a daring mission with a few other scientists into a wormhole because of Cooper's scientific intellect and ability to pilot aircraft unlike the other crew members. In order to find a new home while Earth decays, Cooper must decide to either stay, or risk never seeing his children again in order to save the human race by finding another habitable planet.",
            background_img:"/background/Inception.png",
            reviews: []
        },
        {
            id: 3,
            title: "Arcane",
            image: "/movies/arcane.jpg",
            trailerUrl: "Sl-xmZTH6GE",
            description:"When the twin cities of Piltover and Zaun are at a crossroads, two sisters fight on opposite sides with magical technologies and conflicting beliefs.\n" +
                "Main actors: Hailee Steinfeld, Katie Leung, Kevin Alejandro\n" +
                "Author:Christian Linke, Alex Yee",
            background_img:"/background/Arcane.png",
            reviews: []
        },
        {
            id: 4,
            title: "50 First Dates",
            image: "/movies/50firstdates.jpg",
            trailerUrl: "17KJk3ErIx0",
            description:"After falling for an art teacher with short-term memory loss, a veterinarian finds he must win her over again every single day.\n" +
                "Starring:Adam Sandler, Drew Barrymore, Rob Schneider",
            background_img:"/background/50FirstDates.png",
            reviews: []
        },
        {
            id: 5,
            title: "Grown Ups",
            image: "/movies/grownups.jpg",
            trailerUrl: "e01NVCveGkg",
            description:"Mourning the loss of their beloved junior high basketball coach, five middle-aged pals reunite at a lake house and rediscover the joys of being a kid.\n" +
                "Starring:Adam Sandler, Kevin James, Chris Rock",
            background_img:"/background/GrownUps.png",
            reviews: []
        },
        {
            id: 6,
            title: "Grown Ups 2",
            image: "/movies/grownups2.jpg",
            trailerUrl: "Sq5CIH0duMk",
            description:"After moving his family back to his hometown, Lenny Feder and his grown-up childhood friends learn lessons from their kids -- and some of the locals.\n" +
                "Starring:Adam Sandler, Kevin James, Chris Rock",
            background_img:"/background/grownups2.png",
            reviews: []
        },
        {
            id: 7,
            title: "Avengers: Endgame",
            image: "/movies/endgame.jpg",
            trailerUrl: "TcMBFSGVi1c",
            description:"Daredevil, Jessica Jones, Luke Cage and Iron Fist team up to take down common enemies when a sinister plot threatens New York City.\n" +
                "Main actors: Charlie Cox, Krysten Ritter, Mike Colter\n" +
                "Author:Douglas Petrie, Marco Ramirez",
            background_img:"/background/endgame.png",
            reviews: []
        },
        {
            id: 8,
            title: "Avengers: Infinity War",
            image: "/movies/infinitywar.jpg",
            trailerUrl: "6ZfuNTqbHE8",
            description:"",
            background_img:"/background/infinitywar.png",
            reviews: []
        },
        {
            id: 9,
            title: "Thor: Love And Thunder",
            image: "/movies/thorl&t.jpg",
            trailerUrl: "Go8nTmfrQd8",
            description:"Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
            background_img:"/background/thorl&t.png",
            reviews: []
        },
        {
            id: 10,
            title: "Spider-man: Beyond The Spider Verse",
            image: "/movies/spiderman_bysv.jpg",
            trailerUrl: "tnQ7S1BxkYo",
            description:"\n" +
                "Teenager Miles Morales teams up with Gwen Stacy on a new adventure, facing the evil enemy Spot and a large army of heroes that exist in parallel multiverses.\n" +
                "Main actors: Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
            background_img:"/background/spiderman_bysv.png",
            reviews: []
        },{
            id: 11,
            title: "Spider-man: Far From Home",
            image: "/movies/spiderman_ffh.jpg",
            trailerUrl: "Nt9L1jCKGnE",
            description:"Even your friendly neighborhood superhero can use a vacation. But a new threat forces Peter Parker to swing into action during a school trip to Europe.\n" +
                "Starring:Tom Holland, Zendaya, Samuel L. Jackson",
            background_img:"/background/spiderman_ffh.png",
            reviews: []
        },{
            id: 12,
            title: "Spider-man: No Way Home",
            image: "/movies/spiderman_nwh.png",
            trailerUrl: "JfVOs4VSpmA",
            description:"When his loved ones are put at risk, Peter Parker asks Doctor Strange to restore his secret — and accidentally sets off a disaster of epic proportions.\n" +
                "Starring:Tom Holland, Zendaya, Benedict Cumberbatch",
            background_img:"/background/spiderman_nwh.png",
            reviews: []
        },{
            id: 13,
            title: "Spider-man: Across The Spider-Verse",
            image: "/movies/spiderman_atsv.jpg",
            trailerUrl: "cqGjhVJWtEg",
            description:"Teenager Miles Morales teams up with Gwen Stacy on a new adventure, facing the evil enemy Spot and a large army of heroes that exist in parallel multiverses.\n" +
                "Main actors: Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
            background_img:"/background/spiderman_atsv.png",
            reviews: []
        },{
            id: 14,
            title: "Ironman 3",
            image: "/movies/ironman3.jpg",
            trailerUrl: "Ke1Y3P9D0Bc",
            description:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
            background_img:"/background/ironman3.png",
            reviews: []
        },
        {
            id: 15,
            title: "Fifty Shades Of Grey",
            image: "/movies/50ShadesOfName.jpg",
            trailerUrl: "SfZWFDs0LxA",
            description:"Business tycoon Christian Grey pursues wide-eyed college student Anastasia Steele and introduces her to his particular brand of intense erotic desires.\n" +
                "Starring:Dakota Johnson, Jamie Dornan, Jennifer Ehle",
            background_img:"/background/50ShadesOfName.png",
            reviews: []
        },
        {
            id: 16,
            title: "Titanic",
            image: "/movies/titanic.jpg",
            trailerUrl: "F2RnxZnubCM",
            description:"On a doomed luxury liner, first-class passenger Rose finds a love to last a lifetime when she falls for penniless artist Jack just as disaster strikes.\n" +
                "Starring:Leonardo DiCaprio, Kate Winslet, Billy Zane",
            background_img:"/background/titanic.png",
            reviews: []
        },
        {
            id: 17,
            title: "Harry Potter and the Sorcerer's Stone",
            image: "/movies/harrypotter1.jpg",
            trailerUrl: "Yki6KgoBstM",
            description:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            background_img:"/background/harrypotter1.png",
            reviews: []
        },
        {
            id: 18,
            title: "Harry Potter and the Chamber of Secrets",
            image: "/movies/harrypotter2.jpg",
            trailerUrl: "nE11U5iBnH0",
            reviews: [],
            description: "Harry Potter lives his second year at Hogwarts with Ron and Hermione when a message on the wall announces that the legendary Chamber of Secrets has been opened. The trio soon realize that, to save the school, it will take a lot of courage.",
            background_img: "/background/harrypotter2.png"
        },
        {
            id: 19,
            title: "Harry Potter and the Prisoner of Azkaban",
            image: "/movies/harrypotter3.jpg",
            trailerUrl: "lAxgztbYDbs",
            reviews: [],
            description: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
            background_img: "/background/harrypotter3.png"
        },
        {
            id: 20,
            title: "Harry Potter and the Goblet of Fire",
            image: "/movies/harrypotter4.jpg",
            trailerUrl: "3EGojp4Hh6I",
            reviews: [],
            description: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
            background_img: "/background/harrypotter4.png"
        },        {
            id: 21,
            title: "Harry Potter and the Order of the Phoenix",
            image: "/movies/harrypotter5.jpg",
            trailerUrl: "LLAaW1EgyY8",
            reviews: [],
            description: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
            background_img: "/background/harrypotter5.png",
        },        {
            id: 22,
            title: "Harry Potter and the Half-Blood Prince",
            image: "/movies/harrypotter6.jpg",
            trailerUrl: "tAiy66Xrsz4",
            reviews: [],
            description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as \"the property of the Half-Blood Prince\" and begins to learn more about Lord Voldemort's dark past.",
            background_img: "/background/harrypotter6.png",
        },        {
            id: 23,
            title: "Harry Potter and the Deathly Hallows: Part 1",
            image: "/movies/harrypotter7.jpg",
            trailerUrl: "nSu1LOpjvdZ4",
            reviews: [],
            description: "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
            background_img: "/background/harrypotter7.png",
        },        {
            id: 24,
            title: "Harry Potter and the Deathly Hallows: Part 2",
            image: "/movies/harrypotter8.jpg",
            trailerUrl: "mObK5XD8udk",
            reviews: [],
            description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
            background_img: "/background/harrypotter8.png",
        },        {
            id: 25,
            title: "The Hobbit: An Unexpected Journey",
            image: "/movies/hobbit1.jpg",
            trailerUrl: "9PSXjr1gbjc",
            reviews: [],
            description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home and the gold within it from the dragon Smaug.",
            background_img: "/background/hobbit1.png",
        },{
            id: 26,
            title: "The Hobbit: The Battle of the Dragon",
            image: "/movies/hobbit2.jpg",
            trailerUrl: "iVAgTiBrrDA",
            reviews: [],
            description: "Bilbo Baggins and company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
            background_img: "/background/hobbit2.png",
        },{
            id: 27,
            title: "The Hobbit: The Battle of the Five Armies",
            image: "/movies/hobbit3.jpg",
            trailerUrl: "ZSzeFFsKEt4",
            reviews: [],
            background_img: "/background/hobbit3.png",
        },
        {
            id: 28,
            title: "Batman Begins",
            image: "/movies/bat1.jpg",
            trailerUrl: "neY2xVmOfUM",
            reviews: [],
            description: "As a toxic threat endangers a corrupt city, Bruce Wayne finds himself at odds with a league of assassins and forced to battle more than his own demons.\n" +
                "Starring:Christian Bale, Michael Caine, Liam Neeson",
            background_img: "/background/bat1.png"
        },{
            id: 29,
            title: "The Dark Knight",
            image: "/movies/bat2.jpg",
            trailerUrl: "EXeTwQWrcwY",
            reviews: [],
            description: "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
            background_img: "/background/bat2.png"
        },{
            id: 30,
            title: "The Dark Knight Rises",
            image: "/movies/bat3.jpg",
            trailerUrl: "GokKUqLcvD8",
            reviews: [],
            description: "Fearsome terrorist Bane and wily cat burglar Selina Kyle force billionaire Bruce Wayne out of seclusion and back into battle as his alter ego, Batman.\n" +
                "Starring:Christian Bale, Tom Hardy, Anne Hathaway",
            background_img: "/background/bat3.png"
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